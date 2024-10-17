<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import linkItems from '../../../utils/linkItems';
  import logo from '../../assets/intime_logo.webp';
  import CustomButton from '../Buttons/CustomButton.svelte';
  import Navlink from './Navlink.svelte';

  let isScrolled: boolean = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 0;
    };
    window.addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll);
  });
</script>

<header
  class="sticky top-0 z-50 bg-white px-10 mx-auto flex items-center w-full py-2.5 transition-shadow"
  class:shadow-lg={isScrolled}
>
  <div class="flex items-center justify-center px-5 h-32">
    <img class="object-contain h-full" src={logo} alt="Intime Logo" />
  </div>
  <nav class="flex w-full">
    <ul class="flex">
      {#each linkItems as { href, name }}
        <li class="px-2.5">
          <Navlink {href} {name} />
        </li>
      {/each}
    </ul>
  </nav>
  <div>
    <CustomButton type="button" buttonLabel="Δηλώστε ενδιαφέρον" onClick={() => goto('/cart')} />
  </div>
</header>
