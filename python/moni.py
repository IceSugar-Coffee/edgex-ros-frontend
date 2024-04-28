from flask import Flask, send_file
from PIL import Image
import io
import threading
import time

app = Flask(__name__)

# 全局变量用于控制图片颜色
image_color = 'red'

def change_image_color():
    global image_color
    while True:
        # 每隔一秒钟更改图片颜色
        time.sleep(1)
        image_color = 'blue' if image_color == 'red' else 'red'

# 启动后台线程
thread = threading.Thread(target=change_image_color)
thread.daemon = True
thread.start()

@app.route('/generate_image')
def generate_image():
    # 创建一张指定颜色的图片
    image = Image.new('RGB', (200, 200), color=image_color)
    
    # 将图片转换为二进制数据
    img_byte_array = io.BytesIO()
    image.save(img_byte_array, format='PNG')
    img_byte_array.seek(0)
    
    # 返回二进制数据
    return send_file(img_byte_array, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
