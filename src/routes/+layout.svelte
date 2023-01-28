<div class="container">
	<!-- 全てのページでヘッダーを表示する -->
	<nav class="header">
		<h1 class="title">SvelteKit Demo</h1>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>

	<!-- それぞれのページ内容をここに入れ込む -->
	<slot />

	<!-- 全てのページでfooterを表示する -->
	<footer class="footer">
		<h1 class="title">SvelteKit Demo</h1>
	</footer>
</div>
