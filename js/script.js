
export const loadHtmlIntoContainer = async (htmlFile, containerId) => {
	try {
		const response = await fetch(htmlFile);
		const data = await response.text();
		const container = document.getElementById(containerId);
		if (container) container.innerHTML = data;
	} catch (error) {
		console.error(`Failed to load ${htmlFile}:`, error);
	}
};

export const loadNavbar = () => loadHtmlIntoContainer('navbar.html', 'navbar-container');
export const loadFooter = () => loadHtmlIntoContainer('footer.html', 'footer-container');

export const truncateText = (str, maxLength) =>
	str.length > maxLength ? str.slice(0, maxLength - 1) + "" : str;
