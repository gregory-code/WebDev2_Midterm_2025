document.addEventListener('DOMContentLoaded', () => {
    const pauseButton = document.getElementById('pauseButton');
    const overlay = document.getElementById('overlay');
    const resumeButton = document.getElementById('resumeButton');
    const refreshButton = document.getElementById('refreshButton');
    const homeButton = document.getElementById('homeButton');
    const soundToggle = document.getElementById('soundToggle');

    let isSoundOn = true;

    pauseButton.addEventListener('click', () => { // the id retrieved in css
        overlay.classList.add('active');
        pauseButton.style.display = 'none'; 
    });

    resumeButton.addEventListener('click', () => { // On click button/ actionable
        overlay.classList.remove('active');
        pauseButton.style.display = 'block'; 
    });

    refreshButton.addEventListener('click', () => {// On click button/ actionable
        location.reload();
    });

    homeButton.addEventListener('click', () => { // On click button/ acctionable
        console.log('NEED FOR redirectory to home page here');
    });

    soundToggle.addEventListener('change', () => { // Need some audio :)
        isSoundOn = soundToggle.checked;
        if (isSoundOn) {
            console.log('');
        } else {
            console.log('');
        }
    });
});
