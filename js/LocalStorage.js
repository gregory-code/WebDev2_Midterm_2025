
	const body = document.body;
	const navButtons = document.querySelectorAll(".navButton");
	const regularButtons = document.querySelectorAll(".animalCrossingButton");

	// Check for saved preference in localStorage
	const savedMode = localStorage.getItem("theme");

	// Apply the saved theme if it exists
	if (savedMode) 
	{
		navButtons.forEach((button) => { button.classList.add(savedMode) });
		regularButtons.forEach((button) => { button.classList.add(savedMode) });
		body.classList.add(savedMode);
	}
	else
	{
		// Default to light mode if no preference is saved
		body.classList.add("light-mode");
	}

	const toggleButton = document.getElementById("toggleDarkMode");

	if (toggleButton) 
	{
		// Toggle dark mode
		toggleButton.addEventListener("click", () =>
		{
			if (body.classList.contains("dark-mode"))
			{
				body.classList.replace("dark-mode", "light-mode");

				navButtons.forEach((button) => { button.classList.remove("dark-mode") });
				regularButtons.forEach((button) => { button.classList.remove("dark-mode") });

				localStorage.setItem("theme", "light-mode"); // Save preference
			}
			else
			{
				body.classList.replace("light-mode", "dark-mode");

				navButtons.forEach((button) => { button.classList.add("dark-mode") });
				regularButtons.forEach((button) => { button.classList.add("dark-mode") });

				localStorage.setItem("theme", "dark-mode"); // Save preference
			}
		});
	}