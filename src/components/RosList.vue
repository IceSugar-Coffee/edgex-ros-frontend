<template>
  <div>
    <h1>This is ros-list page</h1>
  </div>

  <div class="card-body p-0 position-relative">
    <div class="bg-light px-2 py-2">
      <div class="btn-group btn-group-sm" role="group">
        <button class="btn btn-primary" data-testid="device-list-refresh-btn" @click="refresh()">
                    <span>
                        <i class="fa fa-refresh mr-1"></i>
                        <span>Refresh</span>
                    </span>
        </button>
        <button type="button" class="btn btn-info">
                    <span>
                        <i class="fa fa-plus mr-1"></i>
                        <span>Add</span>
                    </span>
        </button>
        <button type="button" class="btn btn-success" @click="edit()">
                    <span>
                        <i class="fa fa-edit mr-1"></i>
                        <span>Edit</span>
                    </span>
        </button>
        <button type="button" class="btn btn-danger" @click="deleteConfirm()">
                    <span>
                        <i class="fa fa-trash mr-1"></i>
                        <span>Delete</span>
                    </span>
        </button>
      </div>
    </div>

    <div class="table-responsive ">
      <table class="table table-hover text-truncate ">
        <thead class="thead-light">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Labels</th>
          <th scope="col">AdminState</th>
          <th scope="col">Command</th>
          <!-- <th scope="col">Created</th>
          <th scope="col">Modified</th> -->
        </tr>
        </thead>
        <tbody>
          <tr v-for="(device,id) in ros" :key="id">
            <td>{{device.id}}</td>
            <td>{{device.name}}</td>
            <td>{{device.description}}</td>
            <td>{{device.label}}</td>
            <td>
              <span class="badge bg-success">
                {{device.state}}
              </span>
            </td>
            <td class="text-center">
              <span class="badge bg-primary text-light"  role="button" @click="toTeleop(device.id)">
                  <i class="fa fa-terminal font-weight-bolder"></i>
              </span>
            </td>
          </tr>
        </tbody>>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "RosList",
  data() {
    return {
      ros: [{
        id: 1,
        name: "Ros01",
        description: "芝士小车",
        label: "领航机",
        state: "已控制",
        cmd: "cmd"
      },{
        id: 2,
        name: "Ros02",
        description: "芝也士小车",
        label: "跟随机",
        state: "已控制",
        cmd: "cmd"
      }]
    }
  },
  methods:{
    toTeleop (id){
      this.$router.push({name:'teleop',params:{id:id}});
    }
  }
}
</script>

<style scoped>

</style>