<script lang="ts">
  import Button from '$lib/components/buttons/Button.svelte';
  import CommentForm from '$lib/components/comment/CommentForm.svelte';
  import CommentItem from '$lib/components/comment/CommentItem.svelte';
  import { flip } from 'svelte/animate';
  import type { PageData, ActionData } from './$types';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let data: PageData;
  export let form: ActionData;

  let formattedCategories = data.categories ? data.categories.join(', ') : '';
  let article: HTMLDivElement;
  let wordcount = 0;
  let loginInputOpen = false;

  $: {
    if (article) {
      wordcount = article.innerText.split(' ').length + 1;
    }
  }

  function saveScrollPosition() {
    localStorage.setItem('scrollPosition', window.scrollY.toString());
  }

  onMount(() => {
    window.scrollTo({
      top: parseInt(localStorage.getItem('scrollPosition') || '0'),
      behavior: 'smooth',
    });
  });
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<article class="prose prose-xl prose-neutral w-full dark:prose-invert">
  <div class="not-prose text-foreground">
    <h1>{data.title}</h1>
    <p class="mt-2 h-7 text-gray-500">{formattedCategories}</p>
    <p>{data.date} - {wordcount} words</p>
    <div class="mb-8 h-[2px] w-full rounded-full bg-gray-500"></div>
  </div>
  <div bind:this={article}>
    <svelte:component this={data.content} />
  </div>
</article>

<div
  class="mt-16 flex min-h-[20rem] w-full flex-col items-center gap-4 pb-16 sm:w-[30rem] md:w-[40rem] lg:w-[50rem]"
>
  <h2>Feedback</h2>
  {#if data.comments}
    {#each data.comments as comment (comment.id)}
      <div animate:flip={{ duration: 200 }} class="w-full">
        <CommentItem {comment} authorId={data?.authorId} />
      </div>
    {/each}
  {/if}

  {#if data.authorId}
    <CommentForm />
  {:else if loginInputOpen}
    <form
      action="?/login"
      method="POST"
      class="flex min-h-[150px] w-full flex-col gap-4"
      in:fly={{ y: 50, duration: 200 }}
    >
      <input
        placeholder="your key goes here"
        name="key"
        class="w-full rounded-md bg-lightBackground p-2"
      />
      <div class="flex justify-between">
        <Button
          on:click={() => (loginInputOpen = false)}
          variant="cancel"
          class="w-32"
          type="button">Cancel</Button
        >
        <Button variant="confirm" class="w-32" type="submit" on:click={saveScrollPosition}
          >Login</Button
        >
      </div>
    </form>
  {:else}
    <div class="min-h-[150px]">
      <Button on:click={() => (loginInputOpen = true)} variant="confirm" class="min-h-[40px] w-32"
        >Login</Button
      >
    </div>

    {#if form?.error}
      <h4 class="-mt-28 text-red-500">{form?.message}</h4>
    {/if}
  {/if}
</div>
