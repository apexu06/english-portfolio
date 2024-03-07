<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center gap-4">
  <h2>Error: {$page.error?.message}</h2>
  <a href="/">Go back home</a>
</div>
