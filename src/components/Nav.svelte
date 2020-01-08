<script>
	export let segment;
</script>

<style>

</style>

<nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>home</a></li>
		<li><a rel=prefetch class:selected='{segment === "favorited"}' href='favorited'>favorited</a></li>
	</ul>
</nav>
