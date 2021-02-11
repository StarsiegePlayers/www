<script>
    import {Link} from "svelte-routing";
    import Icon from 'fa-svelte';
    import {faCaretRight} from '@fortawesome/free-solid-svg-icons';

    export let href = "";
    export let isActive = false
    export let extrapadding = false;

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        isActive = location.pathname === href
    }

</script>

<Link class="list-group-item bg-dark{isActive ? ' active' : ''}{extrapadding ? ' extra-padding' : ''}"
      getProps="{getProps}"
      to="{href}">
    {#if isActive}<Icon icon={faCaretRight}/>{/if}
    <slot/>
</Link>
