<script>
	import { Github } from 'lucide-svelte';
	import ModeToggle from './ModeToggle.svelte';
</script>

<nav class="flex h-20 w-screen items-center justify-between bg-background px-8 text-foreground">
	<h2 class="text-[30px]">apexu</h2>
	<div class="flex gap-4">
		<ModeToggle />
		<a href="https://github.com/apexu06/english-portfolio">
			<Github class="h-8 w-8"></Github>
		</a>
	</div>
</nav>

<style>
	nav {
		box-shadow: 20px 20px 40px 20px rgba(0, 0, 0, 0.1);
	}
</style>
