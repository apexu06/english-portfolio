<script lang="ts">
	import { Github } from 'lucide-svelte';
	import ModeToggle from './ModeToggle.svelte';
	import { afterNavigate, goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let loaded = false;
	onMount(() => (loaded = true));

	let pageToNavigateTo = '/';
	const navNames = {
		'/posts/categories': { name: 'Home', url: '/' },
		'/posts': { name: 'Go Back', url: undefined },
		'/': { name: '', url: '/' },
	} as const;

	afterNavigate(({ from }) => {
		pageToNavigateTo = from?.url.pathname ?? pageToNavigateTo;
	});

	function getNavTarget(pathname: string): { name: string; url?: string } {
		const entry = Object.entries(navNames).find(([k, _v]) => pathname.startsWith(k));
		return entry ? entry[1] : { name: 'Home', url: '/' };
	}
</script>

{#if loaded}
	<nav
		class="flex h-full w-screen items-center justify-between bg-lightBackground px-8 text-foreground shadow-default"
	>
		<button
			on:click={() => goto(getNavTarget($page.url.pathname).url ?? pageToNavigateTo)}
			transition:fly={{ x: -200, duration: 400 }}
		>
			<h3>
				{getNavTarget($page.url.pathname).name}
			</h3>
		</button>
		<div class="flex gap-4" transition:fly={{ x: 200, duration: 400 }}>
			<ModeToggle />
			<a href="https://github.com/apexu06/english-portfolio">
				<Github class="h-7 w-7"></Github>
			</a>
		</div>
	</nav>
{/if}
