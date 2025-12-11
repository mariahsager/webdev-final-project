
const DISCOGS_USERNAME = "camelopardalis1";
const API_URL = `https://api.discogs.com/users/${DISCOGS_USERNAME}/collection/folders/0/releases`;

export const fetchVinylCollection = async () => {
	const allVinyls = [];
	let page = 1;
	let pages = 1;
	const perPage = 50;
	try {
		do {
			const url = `${API_URL}?per_page=${perPage}&page=${page}`;
			const response = await fetch(url);
			if (!response.ok) throw new Error(`Error: ${response.status}`);
			const data = await response.json();
			pages = data.pagination ? data.pagination.pages : 1;
			allVinyls.push(
				...data.releases.map((vinyl) => {
					const { uri, id, title, artists, labels, year, cover_image } = vinyl.basic_information;
					const url = uri ? uri : id ? `https://www.discogs.com/release/${id}` : "";
					return {
						title,
						artist: artists.map((a) => a.name).join(", "),
						label: labels.map((l) => l.name).join(", "),
						year,
						image: cover_image,
						url,
					};
				})
			);
			page++;
		} while (page <= pages);
		return allVinyls;
	} catch (error) {
		console.error("Error fetching Discogs collection:", error);
		return [];
	}
};
