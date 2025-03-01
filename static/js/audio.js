<<<<<<< HEAD
const selectAudio = document.querySelector('.select-audio'); 
const audioInput = document.querySelector('#file'); 
const audioArea = document.querySelector('.audio-area'); 

selectAudio.addEventListener('click', function () {
    audioInput.click();
});

audioInput.addEventListener('change', function () {
    const audio = this.files[0];

    if (audio.size < 10000000) { 
        const reader = new FileReader();

        reader.onload = () => {
            const allAudios = audioArea.querySelectorAll('audio');
            allAudios.forEach(item => item.remove());

            const audioUrl = reader.result;
            const audioElement = document.createElement('audio');
            audioElement.src = audioUrl;
            audioElement.controls = true;

            audioArea.appendChild(audioElement);
            audioArea.classList.add('active');
            audioArea.dataset.audio = audio.name;
        };

        reader.readAsDataURL(audio);
    } else {
        alert("Audio size more than 10MB"); 
    }
});
=======
const selectAudio = document.querySelector('.select-audio'); 
const audioInput = document.querySelector('#file'); 
const audioArea = document.querySelector('.audio-area'); 

selectAudio.addEventListener('click', function () {
    audioInput.click();
});

audioInput.addEventListener('change', function () {
    const audio = this.files[0];

    if (audio.size < 10000000) { 
        const reader = new FileReader();

        reader.onload = () => {
            const allAudios = audioArea.querySelectorAll('audio');
            allAudios.forEach(item => item.remove());

            const audioUrl = reader.result;
            const audioElement = document.createElement('audio');
            audioElement.src = audioUrl;
            audioElement.controls = true;

            audioArea.appendChild(audioElement);
            audioArea.classList.add('active');
            audioArea.dataset.audio = audio.name;
        };

        reader.readAsDataURL(audio);
    } else {
        alert("Audio size more than 10MB"); 
    }
});
>>>>>>> master
