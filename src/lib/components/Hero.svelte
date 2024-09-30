<script lang="ts">
  import digitalCard from '$lib/assets/psifiaki-karta.jpeg2_.webp';
  import Divider from './Divider.svelte';
</script>

<section id="hero" class="flex px-10 pt-5 pb-10">
  <div class="flex flex-col-reverse w-full items-center sm:flex-row">
    <div class="flex flex-col items-center space-y-2.5 basis-1/2 m-10 text-center">
      <h2 class="text-[#0A796A] text-[40px] font-normal tracking-wide">Intime Plus</h2>
      <Divider />
      <h3 class="text-[27px] text-[#5B5B5B] tracking-normal">Λογισμικό Ωρομέτρησης Προσωπικού</h3>
      <p class="text-xl text-[#666666] font-light">
        σε σύνδεση με την <strong>Ψηφιακή Κάρτα Εργασίας</strong>
      </p>
    </div>
    <div class="flex h-full basis-1/2 items-center">
      <img class="object-cover h-full" src={digitalCard} alt="Ψηφιακή Κάρτα" />
    </div>
  </div>
</section>
