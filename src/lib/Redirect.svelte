<script>
    import { onMount } from "svelte";

    export let href;

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.location.href = href;
        }

        if (href.startsWith("mailto:")) {
            if (typeof window !== 'undefined') {
                window.close();
            }
        }
    });
</script>