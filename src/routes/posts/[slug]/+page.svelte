<script lang="ts">
  import Button from '$lib/components/buttons/Button.svelte';
  import CommentForm from '$lib/components/comment/CommentForm.svelte';
  import CommentItem from '$lib/components/comment/CommentItem.svelte';
  import { authorKey, authorLoggedIn } from '$lib/stores/localStorageStore';
  import type { Comment } from '@prisma/client';
  import { flip } from 'svelte/animate';
  import type { PageData, ActionData } from './$types';
  import { fade, fly } from 'svelte/transition';

  export let data: PageData;
  export let form: ActionData;

  let comments: Comment[] = [];

  $: data,
    (() => {
      if (!data.comments) return;
      comments = data.comments.sort((a, b) => {
        let aDate = new Date(a.createdAt);
        let bDate = new Date(b.createdAt);
        return aDate > bDate ? -1 : 1;
      });
    })();

  let formattedCategories = data.categories ? data.categories.join(', ') : '';
  let article: HTMLDivElement;
  let wordcount = 0;
  let loginInputOpen = false;

  $: {
    if (article) {
      wordcount = article.innerText.split(' ').length;
    }
  }

  $: if (form?.success) {
    $authorLoggedIn = true;
    $authorKey = form.id;
  }
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
  <h2>Comments</h2>
  {#if data.comments}
    {#each comments as comment (comment.id)}
      <div animate:flip={{ duration: 200 }} class="w-full">
        <CommentItem {comment} />
      </div>
    {/each}
  {/if}

  {#if $authorLoggedIn}
    <CommentForm />
  {:else if loginInputOpen}
    <form
      action="?/login"
      method="POST"
      class="flex w-full flex-col gap-4"
      in:fly={{ y: 50, duration: 200 }}
    >
      <input placeholder="key" name="key" class="w-full rounded-md bg-lightBackground p-2" />
      <div class="flex justify-between">
        <Button
          on:click={() => (loginInputOpen = false)}
          variant="cancel"
          class="w-32"
          type="button">Cancel</Button
        >
        <Button variant="confirm" class="w-32" type="submit">Login</Button>
      </div>
    </form>
  {:else}
    <Button on:click={() => (loginInputOpen = true)} variant="confirm" class="w-32">Login</Button>
  {/if}

  {#if form?.error}
    <h4 class="text-red-500">Invalid Key! Try again</h4>
  {/if}
</div>
