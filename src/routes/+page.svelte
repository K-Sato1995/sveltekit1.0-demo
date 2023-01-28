<script>
	export let data;
</script>

<ul class="post-list">
	{#each data.posts as post}
		<li><a href={`posts/${post.id}`} class="post-link">{post.title}</a></li>
	{/each}
</ul>
