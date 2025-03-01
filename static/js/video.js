<<<<<<< HEAD
const selectVideo = document.querySelector('.select-video');
const videoInput = document.querySelector('#file');
const videoArea = document.querySelector('.video-area');

selectVideo.addEventListener('click', function () {
    videoInput.click();
});

videoInput.addEventListener('change', function () {
    const video = this.files[0];
    
    if (video.size < 20000000) { // Adjust the size limit as needed
        const reader = new FileReader();
        
        reader.onload = () => {
            const allVideos = videoArea.querySelectorAll('video');
            allVideos.forEach(item => item.remove());

            const videoUrl = reader.result;
            const videoElement = document.createElement('video');
            videoElement.src = videoUrl;
            videoElement.controls = true;

            videoArea.appendChild(videoElement);
            videoArea.classList.add('active');
            videoArea.dataset.video = video.name;
        };
        
        reader.readAsDataURL(video);
    } else {
        alert("Video size more than 20MB");
    }
});
=======
const selectVideo = document.querySelector('.select-video');
const videoInput = document.querySelector('#file');
const videoArea = document.querySelector('.video-area');

selectVideo.addEventListener('click', function () {
    videoInput.click();
});

videoInput.addEventListener('change', function () {
    const video = this.files[0];
    
    if (video.size < 20000000) { // Adjust the size limit as needed
        const reader = new FileReader();
        
        reader.onload = () => {
            const allVideos = videoArea.querySelectorAll('video');
            allVideos.forEach(item => item.remove());

            const videoUrl = reader.result;
            const videoElement = document.createElement('video');
            videoElement.src = videoUrl;
            videoElement.controls = true;

            videoArea.appendChild(videoElement);
            videoArea.classList.add('active');
            videoArea.dataset.video = video.name;
        };
        
        reader.readAsDataURL(video);
    } else {
        alert("Video size more than 20MB");
    }
});
>>>>>>> master
