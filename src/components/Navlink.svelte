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

<style>
    :global(#left-nav span div a) {
        padding-left: 40px;
    }
</style>

<Link class="list-group-item list-group-item-action bg-dark text-yellow {isActive ? 'active' : ''} {extrapadding ? 'extra-padding' : ''}"
      getProps="{getProps}"
      to="{href}">{#if isActive}<Icon icon={faCaretRight} />{/if}<slot/>
</Link>