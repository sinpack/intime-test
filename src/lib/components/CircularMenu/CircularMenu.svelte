<script lang="ts">
  import { onMount } from 'svelte';
  import { circularItems } from './CircularMenuData';
  import Fa from 'svelte-fa';

  let circularParentDiv: HTMLDivElement;
  let isVisible = false;
  let currentDescription = '';

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    });
    if (circularParentDiv) {
      observer.observe(circularParentDiv);
    }
    return () => {
      if (circularParentDiv) {
        observer.unobserve(circularParentDiv);
      }
    };
  });
</script>

<div
  bind:this={circularParentDiv}
  class="relative parent-circle w-[636px] h-[636px] border-[6px] border-[#f5f3ff] rounded-full flex items-center justify-center"
>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <p class="text-center px-20 text-[19px] font-light">{@html currentDescription}</p>
  {#each circularItems as item, index}
    <div
      class="circle absolute drop-shadow-2xl shadow-[#f5f3ff] shadow-2xl w-[78px] h-[78px] rounded-full bg-secondary-green hover:bg-primary-purple flex items-center justify-center text-white cursor-pointer"
      class:animate={isVisible}
      style="--angle: {360 +
        (360 / circularItems.length) * index -
        90}deg; --final-translate: 318px;"
      on:click={() => (currentDescription = item.description)}
      on:keypress={() => (currentDescription = item.description)}
      role="button"
      tabindex="0"
    >
      <Fa icon={item.icon} />
    </div>
  {/each}
</div>

<style>
  .circle {
    /* Start from the center */
    transform-origin: center center;
    transform: translate(0, 0); /* Start at the center */
    opacity: 0; /* Initially hidden */
    transition: opacity 2s ease-in-out; /* Smooth transition for opacity */
  }

  .animate {
    /* When animation starts */
    animation: spiral-out 2s ease-in-out forwards; /* Spiral animation */
    opacity: 1; /* Make circles visible when animated */
  }

  @keyframes spiral-out {
    0% {
      transform: rotate(0deg) translate(0) rotate(0deg); /* Start at the center */
    }

    100% {
      transform: rotate(var(--angle)) translate(var(--final-translate))
        rotate(calc(-1 * var(--angle))); /* Final position */
    }
  }
</style>
