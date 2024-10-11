<script lang="ts">
  import Divider from '$lib/components/Divider.svelte';
  import { faFacebookF, faInstagramSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa';
  import whiteLogo from '$lib/assets/white_orbit.webp'; // Import the white logo
  import type { SocialIcon } from '$lib/interfaces';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import type { ActionData } from './$types';

  export let form: ActionData;

  const icons: SocialIcon[] = [
    { iconName: faFacebookF, url: 'https://www.facebook.com/profile.php?id=100090786193608' },
    { iconName: faLinkedinIn, url: 'https://www.linkedin.com/company/orbit-systems-greece/' },
    { iconName: faInstagramSquare, url: 'https://www.instagram.com/intime.plus/' },
  ];
</script>

<section>
  <div class="container mx-auto flex flex-col md:flex-row px-50 py-10 space-x-5">
    <div class="flex flex-col px-5 basis-1/2">
      <div class="flex flex-col items-center space-y-5">
        <h2 class="flex w-full py-1 text-secondary-green text-3xl font-light justify-center">
          Επικοινωνήστε μαζί μας
        </h2>
        <div class="flex place-content-center w-20">
          <Divider />
        </div>
        <p class="flex w-full text-[#333333] text-base justify-center text-center">
          Είμαστε πάντα στη διάθεσή σας για οποιαδήποτε απορία ή διευκρίνιση
        </p>
        <div class="flex flex-row w-full justify-center space-x-2.5">
          {#each icons as { iconName, url }}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center h-10 w-10 rounded-full bg-primary-green hover:bg-secondary-green transition-500 cursor-pointer"
            >
              <Fa icon={iconName} primaryColor="white" size="lg" />
            </a>
          {/each}
        </div>
      </div>
      <div
        class="relative flex flex-col items-center space-y-5 bg-primary-green rounded-3xl px-2.5 py-2.5 md:px-5 lg:px-10 text-white mt-20"
      >
        <img
          src={whiteLogo}
          alt="Orbit Systems Logo"
          class="absolute top-0 left-0 w-full h-full object-contain opacity-40 pointer-events-none"
        />
        <div class="relative z-10">
          <h2 class="flex w-full text-start pt-10 text-[36px] font-light">Orbit Systems</h2>
          <div class="space-y-3.5">
            <p class="font-normal">
              Η εταιρεία <strong>Orbit Systems</strong>, ιδρύθηκε το <strong>1985</strong> στην Ελλάδα,
              με σκοπό την ανάπτυξη ηλεκτρονικών και λογισμικών εφαρμογών που καλύπτουν εξειδικευμένες
              ανάγκες και απαιτήσεις.
            </p>
            <p class="font-normal">
              Από την ίδρυσή μας, δώσαμε ιδιαίτερο βάρος στην ανάπτυξη σχέσεων εμπιστοσύνης και
              ειλικρίνειας με τους πελάτες μας αλλά και στην υποστήριξή τους και μετά την πώληση.
            </p>
            <p class="font-normal">
              Με περισσότερα από <strong>35 χρόνια</strong> στο χώρο της έρευνας, ανάπτυξης και προώθησης
              τεχνολογίας στη χώρα μας, νιώθουμε περήφανοι που οι πελάτες μας αποτελούν πια τη μεγάλη
              μας οικογένεια.
            </p>
          </div>
        </div>
      </div>
    </div>
    <ContactForm {form} />
  </div>
  <div class="flex py-20">
    <iframe
      loading="lazy"
      src="https://maps.google.com/maps?q=Orbit%20Systems&amp;t=m&amp;z=9&amp;output=embed&amp;iwloc=near"
      title="Orbit Systems"
      aria-label="Orbit Systems"
      class="grow h-[687px]"
    ></iframe>
  </div>
</section>
