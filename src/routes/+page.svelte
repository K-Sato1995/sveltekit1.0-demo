<script>
	export let data;
</script>

<ul class="post-list">
	{#each data.posts as post}
		<li><a href={`posts/${post.id}`} class="post-link">{post.title}</a></li>
	{/each}
</ul>

<style>
	.post-list {
		list-style-type: decimal;
	}

	.post-list > li {
		margin-top: 10px;
	}

	.post-link {
		color: #000;
		text-decoration: none;
	}

	.post-link:hover {
		text-decoration: underline;
	}
</style>
