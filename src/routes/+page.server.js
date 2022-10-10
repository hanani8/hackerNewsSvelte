export async function load({ fetch }) {
	const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
	const FetchTopStories = await fetch(url);
	const TopStoriesIDs = await FetchTopStories.json();
	let Stories = [];
	for (let i = 0; i < 10; i++) {
		const story_url = `https://hacker-news.firebaseio.com/v0/item/${TopStoriesIDs[i]}.json`;
		const FetchTopStory = await fetch(story_url);
		const TopStory = await FetchTopStory.json();
		Stories.push(TopStory);
	}
	return {
		top: Stories
	};

	// throw error(404, 'Not found');
}
