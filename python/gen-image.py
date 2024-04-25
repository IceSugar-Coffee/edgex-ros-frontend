from PIL import Image
import time
tag = 0
while 1:
    if tag == 0:
        red_image = Image.new('RGB', (200, 200), color = 'red')
        red_image.save('./image.png')
        tag = 1
        time.sleep(1)
    else:
        red_image = Image.new('RGB', (200, 200), color = 'blue')
        red_image.save('./image.png')
        tag = 0
        time.sleep(1)