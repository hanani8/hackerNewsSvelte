export const prerener = true;

export async function load({ url, fetch }) {
	const params = url.searchParams;
	const id = params.get('id');
	const URL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
	const FETCH = await fetch(URL);
	const DATA = await FETCH.json();
	const KIDS = DATA.kids;
	let COMMENTS = [];
	for (let i = 0; i < 10; i++) {
		const COMMENT_URL = `https://hacker-news.firebaseio.com/v0/item/${KIDS[i]}.json`;
		const COMMENT_FETCH = await fetch(COMMENT_URL);
		const COMMENT_DATA = await COMMENT_FETCH.json();
		COMMENTS.push(COMMENT_DATA);
	}
	return {
		story: DATA,
		comments: COMMENTS
	};

	// throw error(404, 'Not found');
}
