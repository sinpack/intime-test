<script lang="ts">
	import type { CustomButtonProps } from './CustomButton.types';

	export let buttonLabel: CustomButtonProps['label'] = 'Button';
	export let type: CustomButtonProps['type'] = "button";
	export let onClick: CustomButtonProps['onClick'];
	export let className: CustomButtonProps['className'] = '';
</script>

<button
	{type}
	class={`px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-700 ${className}`}
	on:click={onClick}
>
	{buttonLabel}
</button>
