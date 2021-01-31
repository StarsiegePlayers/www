<script>
    import { Link } from "svelte-routing";

    export let href = "";
    export let isActive = false
    export let extrapadding = false;

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
        isActive = location.pathname === href
        let props = {
            class: "list-group-item list-group-item-action bg-dark text-yellow"
        }

        extrapadding ? props.class += " extra-padding" : null
        isActive ? props.class += " active" : null

        return props;
    }
</script>

<Link to="{href}" getProps="{getProps}">{#if isActive}<span>&rsaquo;</span>{/if} <slot/></Link>
