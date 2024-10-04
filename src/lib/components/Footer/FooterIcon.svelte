<script lang="ts">
  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
  import Fa, { type IconSize } from 'svelte-fa';

  export let icon: IconDefinition;
  export let text: string = '';
  export let color: string = '#049C84';
  export let size: IconSize = '1.2x';
  export let rotate: number | string = 0;
  export let isCentered: boolean = false;
  export let className: string = '';
  export let url: string = '';

  const handleRedirection = () => {
    if (url) {
      window.location.href = url;
    }
  };
</script>

<div
  class="flex w-fit space-x-5 ml-5 items-center {url ? 'cursor-pointer' : 'cursor-default'}"
  on:click={url ? handleRedirection : null}
  on:keypress={url ? handleRedirection : null}
  role="button"
  tabindex="0"
>
  <div class="flex w-5 justify-center" class:justify-center={isCentered}>
    <Fa {icon} primaryColor={color} {size} {rotate} class={className} />
  </div>
  {#if text}
    <span class="text-sm">{text}</span>
  {/if}
</div>
