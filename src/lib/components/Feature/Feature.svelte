<script lang="ts">
  import FeatureCard from './FeatureCard.svelte';
  import { features } from './features';
  import clsx from 'clsx';
</script>

<section class="clip-custom bg-[#DADADA] clip-features">
  <div
    class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-10 py-40 gap-5 px-5"
  >
    {#each features as { imageUrl, title, description }, index (index)}
      <div
        class={clsx({
          'lg:col-span-2 md:col-span-2 hover:scale-110 duration-500': true,
          'sm:col-span-2 md:col-span-1': index === 4,
          'md:col-start-2': index === 3,
        })}
      >
        <FeatureCard {imageUrl} {title} {description} />
      </div>
    {/each}
  </div>
</section>

<style>
  .clip-features {
    clip-path: polygon(100% 0, 100% 90%, 0 100%, 0 10%);
  }
</style>
