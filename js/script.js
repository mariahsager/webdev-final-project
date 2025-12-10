export function loadHtmlIntoContainer(htmlFile, containerId) {
	fetch(htmlFile)
		.then((response) => response.text())
		.then((data) => {
			const container = document.getElementById(containerId);
			if (container) container.innerHTML = data;
		});
}

export function loadNavbar() {
	loadHtmlIntoContainer('navbar.html', 'navbar-container');
}

export function loadFooter() {
	loadHtmlIntoContainer('footer.html', 'footer-container');
}

export function truncateText(str, maxLength) {
	return str.length > maxLength ? str.slice(0, maxLength - 1) + "…" : str;
}
