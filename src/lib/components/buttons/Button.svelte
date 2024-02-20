<script lang="ts">
	export let variant: 'confirm' | 'cancel';
</script>

<button
	{...$$restProps}
	on:click
	class={`${$$restProps.class ?? ''} ${variant === 'confirm' ? 'bg-foreground text-background' : 'bg-lightBackground text-foreground'} h-10 rounded-md shadow transition hover:shadow-default`}
	><slot /></button
>

<style>
</style>
