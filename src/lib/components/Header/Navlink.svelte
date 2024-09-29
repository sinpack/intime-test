<script lang="ts">
	import { goto } from '$app/navigation';
	import { derived } from 'svelte/store';
	import { page } from '$app/stores';
	import type { NavlinkProps } from './Navlink.type';

	export let name: NavlinkProps['name'];
	export let href: NavlinkProps['href'];

	let isActiveLink: boolean = false;
	const currentPath = derived(page, ($page) => $page.url.pathname);
	$: isActiveLink = href === '/' ? $currentPath === href : $currentPath.startsWith(href) && $currentPath.length > 1;

	const handleClick = (event: MouseEvent) => {
		event?.preventDefault();
		goto(href);
	};
</script>

<div
	class="hover:underline hover:text-green-600 transition-all tracking-wide text-[#7A7A7A] font-light text-xl"
	class:underline={isActiveLink}
	class:decoration-green-300={isActiveLink}
>
	<a class="flex w-full cursor-default" on:click={handleClick} {href}>
			{name}
	</a>
</div>
