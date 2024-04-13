<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { page } from "$app/stores";

    onMount(() => {
        // goto('/');
        console.log($page.error);
    })
</script>