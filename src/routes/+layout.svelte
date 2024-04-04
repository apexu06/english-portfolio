<script lang="ts">
  import NavBar from '$lib/components/navbar/NavBar.svelte';
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import { fade } from 'svelte/transition';
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import type { PageData } from './$types';

  injectSpeedInsights();
  export let data: PageData;
</script>

<ModeWatcher />
<div class="h-screen w-full">
  <div class="h-20">
    <NavBar />
  </div>
  {#key data.currentRoute}
    <main
      in:fade={{ duration: 200, delay: 220 }}
      out:fade={{ duration: 200 }}
      class="flex h-[calc(100vh-5rem)] flex-col items-center px-4 py-16 sm:px-16"
    >
      <slot />
    </main>
  {/key}
</div>
