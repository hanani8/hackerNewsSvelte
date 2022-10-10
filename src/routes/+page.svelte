<script>
	import { onMount } from 'svelte';

	/**
	 * @type {{ top: Array<Object> }}
	 */
	export let data;

	let stories = [];

	onMount(async () => {
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

		stories = Stories;
	});
</script>

<div>
	{#each stories as story}
		{story}
	{/each}
</div>

<table>
	<tbody>
		{#each data.top as story, i}
			<tr id={story.id}>
				<td>
					<span class="font-normal text-sm">{i + 1}.</span>
				</td>
				<td>
					<span class="font-normal text-sm">
						{story.title}
					</span>
					<a href={story.url}>
						<span class="mr-2 font-normal text-xs align-middle opacity-50">
							({story.url})
						</span>
					</a>
				</td>
			</tr>
			<tr>
				<td colspan="1" />
				<td>
					<span class="font-normal text-xs opacity-50">
						{story.score} points by
						<a href="/user?id={story.by}" class="hover:cursor-pointer hover:underline">{story.by}</a
						>
						at {story.time} |
						<a href="/item?id={story.id}" class="hover:cursor-pointer hover:underline"
							>{story.descendants} comments.</a
						>
					</span>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
