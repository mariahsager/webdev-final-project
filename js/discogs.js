// Fetch vinyl collection from Discogs API (public endpoint)
// Replace 'YOUR_USERNAME' with your actual Discogs username
const DISCOGS_USERNAME = 'camelopardalis1';
const API_URL = `https://api.discogs.com/users/${DISCOGS_USERNAME}/collection/folders/0/releases`;

export async function fetchVinylCollection() {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		const data = await response.json();
		return data.releases.map(vinyl => ({
			title: vinyl.basic_information.title,
			artist: vinyl.basic_information.artists.map(a => a.name).join(', '),
			label: vinyl.basic_information.labels.map(l => l.name).join(', '),
			year: vinyl.basic_information.year,
			image: vinyl.basic_information.cover_image
		}));
	} catch (error) {
		console.error('Error fetching Discogs collection:', error);
		return [];
	}
}
