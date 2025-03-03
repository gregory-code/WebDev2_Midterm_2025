

	document.addEventListener('DOMContentLoaded', () => {
		const audio = document.getElementById('animalCrossingMusic');
		const musicSave = localStorage.getItem('playAudio');

		// Apply saved preference
		if (musicSave === 'true')
		{
			document.addEventListener('click', enableAudioOnce, { once: true });
		}
		else
		{
			audio.muted = true; // Ensure muted by default
		}

		// Enable audio on the first page click
		function enableAudioOnce()
		{
			if (musicSave === 'true')
			{
				audio.muted = false; // Unmute audio
			}
		}
	});