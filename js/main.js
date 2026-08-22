const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
	const isOpen = navMenu.classList.toggle("is-open");
	navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu mobile ao navegar, para não sobrepor o conteúdo da próxima seção
navMenu.addEventListener("click", (event) => {
	if (event.target.tagName === "A") {
		navMenu.classList.remove("is-open");
		navToggle.setAttribute("aria-expanded", "false");
	}
});
