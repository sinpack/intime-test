<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Feature/Feature.svelte';
  import Accordion from '$lib/components/Accordion/Accordion.svelte';
  import { accordionData } from '../utils/accordionData';
  import NavigationButton from '$lib/components/Buttons/NavigationButton.svelte';
  import pinakas1 from '$lib/assets/pinakas1.webp';
  import pinakas2 from '$lib/assets/pinakas2.webp';
  import mobile from '$lib/assets/mobile.webp';
  import pattern from '$lib/assets/pattern.webp';
  import CircularMenu from '$lib/components/CircularMenu/CircularMenu.svelte';

  const firstThreeItems = accordionData.slice(0, 3);
  const fiveLastItems = accordionData.slice(3, 8);
</script>

<main>
  <Hero /><Features />
  <section id="home-video" class="flex justify-center py-20">
    <iframe
      width="1140"
      height="489"
      src="https://www.youtube.com/embed/wMZq4hpBtWY"
      title="Demo Intime Plus - Παρουσίαση εφαρμογής"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </section>
  <section class="container mx-auto px-10 py-5">
    <div class="flex px-2.5 space-x-2.5">
      <div class="flex flex-col py-5 space-y-5 basis-2/5">
        <h2 class="text-4xl font-light text-[#6A56A6] text-pretty">
          Χρήσιμες πληροφορίες για την ένταξη των επιχειρήσεων στην ψηφιακή κάρτα εργασίας
        </h2>
        <p class="text-[#716C80]">
          Νομοθεσία 4808/21: Όλες οι επιχειρήσεις-εργοδότες της χώρας <strong>υποχρεούνται</strong> να
          διαθέτουν και να λειτουργούν ηλεκτρονικό σύστημα μέτρησης χρόνου εργασίας των εργαζομένων τους,
          άμεσα συνδεδεμένο και διαλειτουργικό σε πραγματικό χρόνο με το ΕΡΓΑΝΗ.
        </p>
        <p class="font-normal">
          Οι ιδιαιτερότητες και οι ανάγκες της κάθε επιχείρησης δεν είναι εύκολο να «χωρέσουν» σε
          ένα “προκάτ” συμβατικό οικοδόμημα. Με την σκέψη αυτή αναπτύξαμε το λογισμικό INTIME PLUS
          έτσι ώστε να προσαρμόζεται σε μεγάλο βαθμό στις ανάγκες της δουλειάς σας αλλά ταυτόχρονα
          την εξελίσσουμε με βάση την νομολογία αλλά και τις ζητήσεις σας.
        </p>
        <NavigationButton
          label="Επικοινωνήστε μαζί μας για να μάθετε περισσότερα"
          url="/contact"
          className="bg-[#686868] rounded-full px-10 py-4 text-white tracking-wider text-[15px] hover:bg-secondary-green transition-300"
        />
      </div>
      <div class="py-5 basis-3/5">
        {#each firstThreeItems as accordion, index (index)}
          <Accordion
            open={false}
            header={accordion.header}
            details={accordion.details}
            headerColor="text-primary-red"
          />
        {/each}
        <div class="flex flex-col sm:flex-row w-full mt-2.5 space-x-5">
          <img
            class="max-w-full h-auto sm:max-w-[55%] object-cover shadow-2xl drop-shadow-xl"
            src={pinakas1}
            alt="Διαχείριση πίνακα"
          />
          <img
            class="max-w-full h-auto sm:max-w-[43%] object-cover shadow-2xl drop-shadow-xl"
            src={pinakas2}
            alt="Στοιχεία προσωπικού"
          />
        </div>
      </div>
    </div>
  </section>
  <hr class="my-10 mx-2.5 h-[1px] border-t-0 bg-[#A4A4AC]" />
  <section class="container mx-auto px-48 py-5">
    <div class="flex flex-col">
      <h2
        class="text-[34px] font-light text-primary-red text-pretty border-l-[5px] border-primary-red pl-5"
      >
        ALERTS -Υπενθυμίσεις λογισμικού
      </h2>
      <div class="flex w-full pt-5 pb-2.5">
        <div class="basis-1/2">
          {#each fiveLastItems as accordion, index (index)}
            <Accordion
              open={false}
              header={accordion.header}
              details={accordion.details}
              headerColor="text-primary-red"
            />
          {/each}
        </div>
        <div class="flex w-full basis-1/2">
          <img
            class="max-w-full h-full object-cover shadow-2xl drop-shadow-xl"
            src={mobile}
            alt="Διαχείριση πίνακα"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-background-green py-10">
    <hr class="mx-2.5 h-[1px] border-t-0 bg-white" />
    <h2 class="text-white text-center py-20 text-[27px] font-light">
      Το Ελληνικό Λογισμικό που προσαρμόζεται στις ανάγκες σας
    </h2>
    <hr class="mx-2.5 h-[1px] border-t-0 bg-white" />
  </section>
  <h2 class="p-20 mt-10 text-primary-purple text-center text-[33px] font-light tracking-normal">
    Ανακαλύψτε κάποιες από τις δυνατότητες του <strong>Intime Plus</strong>
  </h2>
  <section class="bg-cover h-screen mx-auto container" style="background-image: url({pattern});">
    <div class="flex justify-center"><CircularMenu /></div>
  </section>
</main>
