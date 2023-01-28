export async function load() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');

	return {
		posts: response.ok && (await response.json())
	};
}
