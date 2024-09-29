<script lang="ts">
	import { goto } from '$app/navigation';
	import linkItems from '../../../utils/linkItems';
	import logo from '../../assets/intime_logo.webp';
	import CustomButton from '../Buttons/CustomButton.svelte';
	import Navlink from './Navlink.svelte';
</script>

<header class="px-10 mx-auto flex items-center w-full py-2.5">
	<div class="flex items-center justify-center px-5 h-40"><img class="object-contain h-full" src={logo} alt="Intime Logo" /></div>
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
