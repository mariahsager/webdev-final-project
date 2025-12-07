// Fetch vinyl collection from Discogs API (public endpoint)
// Replace 'YOUR_USERNAME' with your actual Discogs username
const DISCOGS_USERNAME = 'camelopardalis1';
const API_URL = `https://api.discogs.com/users/${DISCOGS_USERNAME}/collection/folders/0/releases`;

export async function fetchVinylCollection() {
	const allVinyls = [];
	let page = 1;
	let pages = 1;
	const perPage = 50;
	try {
		do {
			const url = `${API_URL}?per_page=${perPage}&page=${page}`;
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}
			const data = await response.json();
			pages = data.pagination ? data.pagination.pages : 1;
			allVinyls.push(...data.releases.map(vinyl => {
				const uri = vinyl.basic_information.uri;
				const id = vinyl.basic_information.id;
				const url = uri ? uri : (id ? `https://www.discogs.com/release/${id}` : '');
				return {
					title: vinyl.basic_information.title,
					artist: vinyl.basic_information.artists.map(a => a.name).join(', '),
					label: vinyl.basic_information.labels.map(l => l.name).join(', '),
					year: vinyl.basic_information.year,
					image: vinyl.basic_information.cover_image,
					url
				};
			}));
			page++;
		} while (page <= pages);
		return allVinyls;
	} catch (error) {
		console.error('Error fetching Discogs collection:', error);
		return [];
	}
}
