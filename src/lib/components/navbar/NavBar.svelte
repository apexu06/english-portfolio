<script lang="ts">
  import { Github } from 'lucide-svelte';
  import ModeToggle from './ModeToggle.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  let loaded = false;
  onMount(() => (loaded = true));

  function goBack() {
    if (browser) {
      window.history.back();
    }
  }
</script>

{#if loaded}
  <nav
    class="flex h-full w-full items-center justify-between bg-lightBackground px-8 text-foreground shadow-default"
  >
    <button on:click={() => goto('/')} transition:fly={{ x: -200, duration: 400 }}>
      <h3>Home</h3>
    </button>
    <div class="flex gap-4" transition:fly={{ x: 200, duration: 400 }}>
      <ModeToggle />
      <a href="https://github.com/apexu06/english-portfolio">
        <Github class="h-7 w-7"></Github>
      </a>
    </div>
  </nav>
{/if}
