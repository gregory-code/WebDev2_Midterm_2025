document.addEventListener('DOMContentLoaded', () => {
    const pauseButton = document.getElementById('pauseButton');
    const overlay = document.getElementById('overlay');
    const resumeButton = document.getElementById('resumeButton');
    const refreshButton = document.getElementById('refreshButton');
    const homeButton = document.getElementById('homeButton');
    const soundToggle = document.getElementById('soundToggle');
    const buttonAudio = new Audio('../audio/buttonAudio.wav')

    let SoundOn = true;
    let isSoundOn = true;

    function buttonSound() {
        if (SoundOn) {
            buttonAudio.currentTime = 0;
            buttonAudio.play();
        }
    }
    document.getElementById("pauseButton").addEventListener("click", function() {
        this.style.display = "none"; 
        document.querySelector(".overlay").classList.add("active"); 
        buttonSound();
    });

    resumeButton.addEventListener('click', () => { 
        overlay.classList.remove('active');
        pauseButton.style.display = 'block'; 
        buttonSound();
    });

    refreshButton.addEventListener('click', () => {
        buttonSound();
        setTimeout(() => {
            location.reload();
        }, 100);
    });

    homeButton.addEventListener('click', () => { 
        buttonSound();
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 100);  
    });

    soundToggle.addEventListener('change', () => { // Need some audio :)
        issoundOn = soundToggle.checked;
        if (isSoundOn) {
            console.log('');
        } else {
            console.log('none');
        }
    });
});
