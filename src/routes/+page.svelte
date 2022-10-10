<script>
	/**
	 * @type {{ top: Array<Object> }}
	 */
	export let data;
</script>

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
						<span>class="hover:cursor-pointer hover:underline">{story.by}</span
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
