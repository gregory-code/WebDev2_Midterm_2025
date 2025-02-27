document.addEventListener('DOMContentLoaded', () => {
    const pauseButton = document.getElementById('pauseButton');
    const overlay = document.getElementById('overlay');
    const resumeButton = document.getElementById('resumeButton');
    const refreshButton = document.getElementById('refreshButton');
    const homeButton = document.getElementById('homeButton');
    const soundToggle = document.getElementById('soundToggle');

    let isSoundOn = true;

    document.getElementById("pauseButton").addEventListener("click", function() {
        this.style.display = "none"; 
        document.querySelector(".overlay").classList.add("active"); 
    });
    

    resumeButton.addEventListener('click', () => { // On click button/ actionable
        overlay.classList.remove('active');
        pauseButton.style.display = 'block'; 
    });

    refreshButton.addEventListener('click', () => {// On click button/ actionable
        location.reload();
    });

    homeButton.addEventListener('click', () => { // On click button/ acctionable
        window.location.href = '../index.html';
    });

    soundToggle.addEventListener('change', () => { // Need some audio :)
        soundOn = soundToggle.checked;
        if (SoundOn) {
            console.log('');
        } else {
            console.log('none');
        }
    });
});
