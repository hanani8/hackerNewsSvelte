<script>
	import Comment from '../../lib/comment.svelte';

	/**
	 * @type {{ story: Object }}
	 */
	export let data;
	let story = data.story;
	let comments = data.comments;
</script>

<table>
	<tr>
		<td>
			<span class="text-md">
				{story.title}
			</span>
		</td>
		<td>
			<span class="text-xs opacity-50">
				({story.url})
			</span>
		</td>
	</tr>
	<tr>
		<td>
			<span class="font-normal text-xs opacity-50">
				{story.score} points by
				<span class="hover:cursor-pointer hover:underline">{story.by}</span> at {story.time}
				| hide | past | favorite |
				<a href="/item?id={story.id}" class="hover:cursor-pointer hover:underline"
					>{story.descendants} comments.</a
				>
			</span>
		</td>
	</tr>
	<tr />
	<tr>
		<td>
			<span class="text-lg underline"> Comments </span>
		</td>
	</tr>
	{#each comments as comment}
		<tr>
			<td>
				<Comment {comment} />
			</td>
		</tr>
	{/each}
</table>
