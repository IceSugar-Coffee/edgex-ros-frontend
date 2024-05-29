<template v-slot:dropdown>
    <v-app id="tags-view-container">
      <el-row style="color: white; float: left">
        <el-dropdown @command="add">
          <el-button type="primary">添加<i class="el-icon-arrow-down el-icon--right"/></el-button>
          <el-dropdown-menu>
            <el-dropdown-item command="box">立方体</el-dropdown-item>
            <el-dropdown-item command="sphere">球体</el-dropdown-item>
            <el-dropdown-item command="cylinder">圆柱</el-dropdown-item>
            <el-dropdown-item command="octahedron">正八面体</el-dropdown-item>
            <el-dropdown-item command="dodecahedron">正十二面体</el-dropdown-item>
            <el-dropdown-item command="icosahedron">正二十面体</el-dropdown-item>
            <el-dropdown-item command="customize">自定义</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
      <div id="content"/>
      <div>
        <div ref="container" style="width: 800px; height: 600px;"></div>
      </div>
    </v-app>
  </template>
  
  <script>
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
  import {GLTFLoader} from "three/addons";
  var scene = new THREE.Scene();
  var mesh = null;
  var camera = null;
  var  renderer = null;
  var controls=null;
  var axesHelper=null;
  var materialColor=0xffffff;
  var materialOpacity=1;
  var clearColor=0xDDDDDD;
  var cameraCurve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-100, 0, 200),
        new THREE.Vector3(100, 0, 200),
        new THREE.Vector3(100, 0, -200),
      ],
      closed
  );
  var cameraCurve1 = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-97, 0, 194),
        new THREE.Vector3(97, 0, 194),
        new THREE.Vector3(97, 0, -194),
      ],
      closed
  );
  var cameraCurve2 = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-103, 0, 206),
        new THREE.Vector3(103, 0, 206),
        new THREE.Vector3(103, 0, -206),
      ],
      closed
  );
  var meshArr=[];
  // var shperePathIndex=[1001, 666, 333];
  var shperePathIndex=[50, 100, 150];
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'threejs',
    data() {
      return {
        MeshArr:null,
        // scene: null, // 场景
        // mesh: null, // 材质
        // camera: null, // 相机
        // renderer: null, // 渲染器
        // controls: null, // 控件
        // axesHelper: null, // 辅助三维坐标系
        //
        // materialColor: 0xffffff, // 材质对象颜色
        // materialOpacity: 1, // 材质对象透明度
        // clearColor: 0xDDDDDD // 背景色
  
      }
    },
    mounted() {
      // 初始化
      this.init()
      // 监听鼠标事件
      this.eventListener()
    },
    methods: {
      init() {
        // 创建场景
        // this.createScene()
  
        // 创建光源
        this.createLight()
  
        // 创建相机对象
        this.createCamera()
  
        // 创建渲染器
        this.createRender()
  
        // 创建控件
        this.createControls()
  
        // 添加辅助坐标系、地面网格
        this.addHelper()
  
        this.createModels();
        // 执行渲染操作
  
        this.render()
  
        // this.add("box")
  
        // this.newRender();
      },
  
  
  
      /**
       * 创建场景
       */
      // createScene() {
      //   scene = new THREE.Scene()
      // },
  
      /**
       * 创建光源
       */
      createLight() {
        // 点光源
        var point = new THREE.PointLight(0xffffff)
        point.position.set(400, 250, 300) // 点光源位置
        scene.add(point) // 点光源添加到场景中
        // 环境光
        var ambient = new THREE.AmbientLight(0x444444)
        scene.add(ambient) // 环境光添加到场景中
      },
  
      /**
       * 创建相机
       */
      createCamera() {
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
        camera.position.set(400, 300, 400) // 设置相机位置
        camera.lookAt(scene.position) // 设置相机方向(指向的场景对象)
      },
  
      /**
       * 创建渲染器
       */
      createRender() {
        renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight) // 设置渲染区域尺寸
        renderer.setClearColor(clearColor, 1) // 设置背景颜色
        document.getElementById('content').appendChild(renderer.domElement) // 元素中插入canvas对象
      },
  
      /**
       * 创建控件
       */
      createControls() {
        // 创建控件对象
        controls = new OrbitControls(camera, renderer.domElement)
        // 监听鼠标、键盘事件
        controls.addEventListener('change', this.render)
      },
  
      /**
       * 添加地面网格、辅助坐标系等...
       */
      addHelper() {
        // 辅助坐标系  参数表示坐标系大小，可以根据场景大小去设置
        axesHelper = new THREE.AxesHelper(150)
        scene.add(axesHelper)
  
        // 添加地面网格
        var gridHelper = new THREE.GridHelper(1000, 50, 0xb7b7b7, 0xababab)
        gridHelper.position.y = 0
        gridHelper.position.x = 0
        scene.add(gridHelper)
      },
  
      /**
       * 执行渲染操作
       */
      render() {
        renderer.render(scene, camera) // 执行渲染操作
      },
  
      /**
       * 增加几何体
       * @param type
       */
      add(type) {
        console.log('add ...')
  
        let geometry = null
        // 材质对象
        let material =new THREE.MeshLambertMaterial({
          color: materialColor,
          opacity: materialOpacity,
          transparent: true
        })
  
        // 立方体
        if (type === 'box') {
          geometry = new THREE.BoxGeometry(10, 10, 10)
          // 网格模型对象
          mesh = new THREE.Mesh(geometry, material)
          mesh.translateY(1)
        }
        // 球体
        if (type === 'sphere') {
          geometry = new THREE.SphereGeometry(60, 40, 40)
          // 网格模型对象
          mesh = new THREE.Mesh(geometry, material)
          mesh.translateY(40 / 2)
        }
        // 圆柱
        if (type === 'cylinder') {
          geometry = new THREE.CylinderGeometry(50, 50, 100, 25)
          // 网格模型对象
          mesh = new THREE.Mesh(geometry, material)
          mesh.translateY(100 / 2)
        }
  
        // 网格模型添加到场景中
        scene.add(mesh)
        this.render()
      },
  
      /**
       * 鼠标键盘监听事件
       */
      eventListener() {
        window.addEventListener('click', () => {
          console.log('on click')
        })
      },
  
      createModels() {
          let axes = new THREE.AxesHelper(6000);
          axes.position.set(0,0,0)
          scene.add(axes);
        //使用指定的点创建一条平滑的三维样条曲线当做相机运动路径
        // cameraCurve = new THREE.CatmullRomCurve3(
        //     [
        //       new THREE.Vector3(-300, 40, 200),
        //       new THREE.Vector3(300, 40, 200),
        //       new THREE.Vector3(300, 40, -200),
        //     ],
        //     true
        // );
        //参考路径上取100个点，每个点上添加蓝色小球
        const pathPoints = cameraCurve.getPoints(1000);
        // const THIS = this;
  
        // 引入三维模型(glb或者gltf格式)
        const loader = new GLTFLoader();
          // loader.load(`${THIS.publicPath}models/robot.glb`, (glb) => {
        for (let i=0;i<3;i++){
          loader.load(`models/robot.glb`, (glb) => {
            meshArr[i] = glb.scene.children[0].children[0];
            meshArr[i].position.set(
                pathPoints[i*100].x,
                pathPoints[i*100].y,
                pathPoints[i*100].z,
            );
            meshArr[i].scale.set(0.06, 0.06, 0.06);
            scene.add(meshArr[i]);
            renderer.render(scene, camera);
            this.newRender();
          });
        }
  
       // //绘制一条路径参考线
       //  const geometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
       //  const geometry1 = new THREE.BufferGeometry().setFromPoints(cameraCurve1.getPoints(1000));
       //  const geometry2 = new THREE.BufferGeometry().setFromPoints(cameraCurve2.getPoints(1000));
       //  const material = new THREE.LineBasicMaterial({
       //    color: 0xf00,
       //    linewidth: 1,
       //  });
       //  const curveObject = new THREE.Line(geometry, material);
       //  const curveObject1 = new THREE.Line(geometry1, material);
       //  const curveObject2 = new THREE.Line(geometry2, material);
       //
       //  scene.add(curveObject);
       //  scene.add(curveObject1);
       //  scene.add(curveObject2);
       //  scene.add()
       //  this.render();
      },
  
      newRender(){
        //参考路径的索引在1001~0中往复减少
        // if (shperePathIndex[0] === 0) {
        //   shperePathIndex[0] = 1001;
        // }
        // if (shperePathIndex[1] === 0) {
        //   shperePathIndex[1] = 1001;
        // }
        // if (shperePathIndex[2] === 0) {
        //   shperePathIndex[2] = 1001;
        // }
        shperePathIndex[1] += 1;
        shperePathIndex[0] += 1;
        shperePathIndex[2] += 1;
        // 设置绿色球的位置为参考路径上当前点的位置
        //取相参考径上当前点的坐标
        if(meshArr[0]) {
          const sphereCurveIndex = shperePathIndex[0] / 1000; //取值0~1
          const tmpSpherePosition = cameraCurve.getPointAt(sphereCurveIndex);
          this.renderCurve(tmpSpherePosition,0xff4040);
  
          meshArr[0].position.set(
              tmpSpherePosition.x,
              tmpSpherePosition.y,
              tmpSpherePosition.z
          );
          // 当前点在线条上的位置
          meshArr[0].position.copy(tmpSpherePosition);
          // 返回一个点t在曲线上位置向量的法线向量
          const tangent = cameraCurve.getTangentAt(sphereCurveIndex);
          // 位置向量和切线向量相加即为所需朝向的点向量
          const lookAtVec = tangent.add(tmpSpherePosition);
          meshArr[0].lookAt(lookAtVec);
        }
        if(meshArr[1]) {
          const sphereCurveIndex = shperePathIndex[1] / 1000; //取值0~1
          const tmpSpherePosition = cameraCurve1.getPointAt(sphereCurveIndex);
          this.renderCurve(tmpSpherePosition,0x98FB98);
  
          meshArr[1].position.set(
              tmpSpherePosition.x,
              tmpSpherePosition.y,
              tmpSpherePosition.z
          );
          // 当前点在线条上的位置
          meshArr[1].position.copy(tmpSpherePosition);
          // 返回一个点t在曲线上位置向量的法线向量
          const tangent = cameraCurve1.getTangentAt(sphereCurveIndex);
          // 位置向量和切线向量相加即为所需朝向的点向量
          const lookAtVec = tangent.add(tmpSpherePosition);
          meshArr[1].lookAt(lookAtVec);
        }
        if(meshArr[2]) {
          const sphereCurveIndex = shperePathIndex[2] / 1000; //取值0~1
          const tmpSpherePosition = cameraCurve2.getPointAt(sphereCurveIndex);
          this.renderCurve(tmpSpherePosition,0xFFF68F);
  
          meshArr[2].position.set(
              tmpSpherePosition.x,
              tmpSpherePosition.y,
              tmpSpherePosition.z
          );
          // 当前点在线条上的位置
          meshArr[2].position.copy(tmpSpherePosition);
          // 返回一个点t在曲线上位置向量的法线向量
          const tangent = cameraCurve2.getTangentAt(sphereCurveIndex);
          // 位置向量和切线向量相加即为所需朝向的点向量
          const lookAtVec = tangent.add(tmpSpherePosition);
          meshArr[2].lookAt(lookAtVec);
        }
  
  
        // meshArr[0].rotateY(Math.PI);
        meshArr.forEach((item) => {
          item.rotateY(Math.PI);
        });
        renderer.render(scene, camera);
        if(shperePathIndex[2] != 1000){
        requestAnimationFrame(this.newRender);
        }else return;
      },
  
      renderCurve(points,col) {
        const pointsGeometry = new THREE.BoxGeometry(10, 10, 10);
        const pointsMaterial = new THREE.PointsMaterial({ color: col,size:0.5 });
        const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
        pointsMesh.position.copy(points);
        scene.add(pointsMesh);
        renderer.render(scene, camera);
  
        // const animate = () => {
        //   requestAnimationFrame(animate);
        //   renderer.render(scene, camera);
        // };
        // animate();
      }
  
    }
  }
  </script>
  
  <style scoped>
  #tags-view-container{
    padding: 10px;
    margin: 0;
  }
  </style>
  
  