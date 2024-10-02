<script lang="ts">
  import { goto } from '$app/navigation';
  import type { NavigationButtonProps } from './NavigationButton.types';
  export let label: NavigationButtonProps['label'];
  export let url: NavigationButtonProps['url'];
  export let className: NavigationButtonProps['className'] = '';

  const handleClick = () => {
    goto(url);
  };
</script>

<button
  class="flex w-fit h-fit {className}"
  on:click|preventDefault={handleClick}
  on:keydown={(e) => e.key === 'Enter' && handleClick}
>
  {label}
</button>
