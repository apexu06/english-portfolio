<script lang="ts">
  export let variant: 'confirm' | 'cancel';
</script>

<button
  {...$$restProps}
  on:click
  class={`${$$restProps.class ?? ''} 
			${
        variant === 'confirm'
          ? 'bg-foreground text-background shadow hover:shadow-default'
          : 'border-gay-500 border border-gray-400 text-foreground hover:underline'
      } 
		  h-10 rounded-md transition`}><slot /></button
>

<style>
</style>
