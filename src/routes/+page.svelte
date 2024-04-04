<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { ChevronRight } from 'lucide-svelte';
  import type { PageData } from './$types';
  import { goto } from '$app/navigation';

  export let data: PageData;
  let loaded = false;

  onMount(() => (loaded = true));
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="flex h-[calc(100vh-5rem)] w-full snap-center flex-col items-center justify-center">
  <div class="flex h-1/2 w-full flex-col justify-between sm:w-1/2">
    {#if loaded}
      <div class="flex flex-col items-center gap-4 sm:items-start">
        <h1
          transition:fly={{ y: -300 }}
          class="gradientText h-[58px] text-5xl sm:h-[90px] sm:w-[600px] sm:text-[80px]"
        >
          My Portfolio
        </h1>
        <h3 transition:fly={{ y: 200, delay: 200 }} class="font-normal">
          by <b>Jakob Zelger</b>
        </h3>

        <div
          transition:fly={{ x: 200, delay: 300 }}
          class="h-2 w-72 rounded-full bg-foreground sm:h-3"
        ></div>
        <h4 transition:fly={{ x: -200, delay: 100 }} class="font-normal">2023 - 2024</h4>
      </div>

      <div class="mt-16 flex justify-center sm:mt-0 sm:justify-end">
        <button
          class="group flex w-fit items-center justify-center self-center text-xl transition"
          transition:fly={{ x: 200, delay: 400 }}
          on:click={() => {
            window.scroll({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          <div class="hidden items-center transition group-hover:translate-x-4 sm:flex">
            <ChevronRight class="-mr-2 "></ChevronRight>
            <ChevronRight class="-mr-2"></ChevronRight>
            <ChevronRight class="mr-4"></ChevronRight>
          </div>

          <span class="text-3xl transition">Scroll <b>Down</b></span>
        </button>
      </div>
    {/if}
  </div>
</div>
<div class="flex h-screen w-full flex-col items-center justify-center gap-8">
  <div class="prose prose-lg prose-neutral w-full dark:prose-invert">
    <svelte:component this={data.content} />
  </div>
  <button class="text-xl" on:click={() => goto('/posts/categories')}>Get <b>Started</b></button>
</div>
