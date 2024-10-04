<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Header/Navbar.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
