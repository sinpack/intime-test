<script lang="ts">
  import { onMount } from 'svelte';
  import type { FeatureCardProps } from './Feature.types';

  export let imageUrl: FeatureCardProps['imageUrl'];
  export let title: FeatureCardProps['title'];
  export let description: FeatureCardProps['description'];
  let featureCard: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    });

    if (featureCard) {
      observer.observe(featureCard);
    }

    return () => {
      if (featureCard) {
        observer.unobserve(featureCard);
      }
    };
  });
</script>

<div
  bind:this={featureCard}
  class="flex flex-col text-gray-600 items-center cursor-pointer bg-white p-5 rounded-lg shadow-md opacity-0 translate-y-10 [transition:opacity_1s,transform_1s]"
>
  <img src={imageUrl} alt={title} class="w-full rounded-t-lg object-contain h-20" />
  <p class="text-center mt-1">{description}</p>
</div>
