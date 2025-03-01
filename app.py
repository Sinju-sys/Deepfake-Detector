from flask import Flask, render_template, url_for, request
import os
from image_test import *
from video_test import *
from audio_test import *

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload_image', methods=['GET', 'POST'])
def upload_image():
    if request.method == 'POST':

        src = "static/images/"+request.form['image']
        out = "static/testimage_output/output.jpg"

        process_image(src, out)

        return render_template('image.html', inputimage=src, outputimage=out)
    return render_template('image.html')

@app.route('/upload_video', methods=['GET', 'POST'])
def upload_video():
    if request.method == 'POST':
        src = "static/videos/"+request.form['video']
        out = "static/testvideo_output/output.mp4"

        process_video(src, out)

        return render_template('video.html', inputvideo=src, outputvideo=out)
    return render_template('video.html')

@app.route('/upload_audio', methods=['GET', 'POST'])
def upload_audio():
    if request.method == 'POST':
        src = "static/audios/"+request.form['audio']
        out = runtest(src)
        return render_template('audio.html', inputaudio=src, output=out)
    return render_template('audio.html')

@app.route('/logout')
def logout():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
