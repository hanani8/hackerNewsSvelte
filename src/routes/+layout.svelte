<script>
	import '../app.css';
</script>

<main class="w-3/4 mx-auto" style="background-color: #f6f6ef">
	<nav class="bg-orange-500 h-6  flex flex-row gap-7">
		<p class="font-semibold text-sm pl-3">Hacker News</p>
		<p class="font-bold text-sm">
			Top
		</p>
		<p class="font-bold text-sm">
			<a href="/ask">Ask</a>
		</p>
		<p class="font-bold text-sm">
			<a href="/show">Show</a>
		</p>
	</nav>

	<slot />
</main>
