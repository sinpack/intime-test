<script lang="ts">
  import type { FeatureCardProps } from './Feature.types';
  export let imageUrl: FeatureCardProps['imageUrl'];
  export let title: FeatureCardProps['title'];
  export let description: FeatureCardProps['description'];
</script>

<div
  class="flex flex-col text-gray-600 items-center cursor-pointer bg-white p-5 rounded-lg shadow-md hover:scale-110 transition-500 hover:text-primary-green"
>
  <img src={imageUrl} alt={title} class="w-full rounded-t-lg object-contain h-20" />
  <p class="text-center mt-2">{description}</p>
</div>
