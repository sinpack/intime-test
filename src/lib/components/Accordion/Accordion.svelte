<script lang="ts">
  import { slide } from 'svelte/transition';
  import Fa from 'svelte-fa';
  import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

  import type { AccordionProps } from './AccordionProps';
  import clsx from 'clsx';

  export let open: AccordionProps['open'] = false;
  export let header: AccordionProps['header'] = '';
  export let details: AccordionProps['details'] = [];
  export let headerColor: AccordionProps['headerColor'];
  const handleToggle = () => (open = !open);
</script>

<div>
  <div class="flex items-center cursor-pointer">
    <button
      class={clsx({ 'ml-4 flex items-center py-2.5': true, [headerColor]: open })}
      on:click={handleToggle}
    >
      <Fa icon={faCaretRight} rotate={open ? -90 : 0} class="flex items-center px-1" />
      <span class="flex-1 text-lg pl-2.5 text-left leading-tight">
        {header}
      </span>
    </button>
  </div>

  {#if open}
    <div class="p-4 transition-all duration-300" transition:slide>
      <ul>
        {#each details as detail, index (index)}
          <li class="mb-2">
            <p>
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              {@html detail}
            </p>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  <div class="border border-solid" />
</div>
