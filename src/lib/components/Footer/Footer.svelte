<script lang="ts">
  import logoWhite from '$lib/assets/intime_logo_white.webp';
  import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
  import { format } from 'date-fns';
  import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import FooterIcon from './FooterIcon.svelte';

  const currentYear = format(new Date(), 'yyyy');
</script>

<footer class="flex flex-col">
  <div class="flex flex-col md:flex-row bg-primary-grey py-10 px-20 divide-x-2">
    <div class="flex flex-col basis-1/3 space-y-10">
      <div class="flex items-center justify-left px-5 h-28">
        <img class="object-contain h-full" src={logoWhite} alt="Intime Logo" />
      </div>
      <h2 class="text-base p-5 font-light text-white">
        <strong>Η τεχνολογία είναι το πάθος μας</strong> αλλά η αφοσίωσή μας στην εξυπηρέτηση του πελάτη
        είναι η κινητήριος δύναμή μας από το 1985 έως και σήμερα!
      </h2>
    </div>
    <div class="flex flex-col font-light basis-2/3 justify-center space-y-5 p-2.5 text-white">
      <FooterIcon icon={faPhone} text="210 5552037" rotate="270" />
      <FooterIcon icon={faEnvelope} text="info@orbitsystems.gr" />
      <FooterIcon icon={faMapPin} text="Περσεφόνης 19, Ελευσίνα 192 00" />
    </div>
  </div>
  <div class="flex flex-row bg-secondary-grey py-2.5 px-96">
    <p class="text-[16px] p-2.5 text-footer-text-grey">© All rights reserved {currentYear}</p>
    <div class="flex items-center grow justify-end space-x-10">
      <FooterIcon
        icon={faFacebook}
        isCentered
        size="1.5x"
        className="filter-white"
        url="https://www.facebook.com/profile.php?id=100090786193608"
      />
      <FooterIcon
        icon={faLinkedin}
        isCentered
        size="1.5x"
        className="filter-white"
        url="https://www.linkedin.com/company/orbit-systems-greece/"
      />
      <FooterIcon
        icon={faInstagram}
        isCentered
        size="1.5x"
        className="filter-white"
        url="https://www.instagram.com/intime.plus/"
      />
    </div>
  </div>
</footer>
