<script>
	export let comment;
</script>

<div class="px-5">
	<div>
		<div>
			<span class="text-xs opacity-50">
				{comment.by} at {comment.time}
			</span>
		</div>
	</div>
	<div>
		<div>
			<p class="text-sm">
				{comment.text}
			</p>
		</div>
	</div>
	<div>
		<span class="text-xs underline"> reply </span>
	</div>
</div>
