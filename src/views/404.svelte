<script>
    import {navigate} from 'svelte-routing';

    let count = 5;
    const interval = setInterval(update, 1000)

function update() {
    if (count > 1) {
        return count--;
    }
    clearInterval(interval)
    navigate("/", {replace: false})
}

</script>

<h2>Not Found</h2>

<p>This page doesn't exist, redirecting you to the main page in {count} second{#if count>1}s{/if}...</p>
