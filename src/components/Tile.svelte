<script>
    import {link} from "svelte-routing";

    export let href;
    export let title;
    export let img
</script>

<style>
    h3 {
        margin-top: 0;
        text-align: left;
        color: yellow;
        font-family: BankGothic, monospace;
        margin-bottom: 16px;
        padding: 5px;
        font-size: 24px;
        border-bottom: 1px solid #878787;
        background-color: rgba(0,0,0,.6)
    }
    .tile {
        position: relative;
        text-align: right;
        cursor: pointer;
        display: block;
        height: 12.5rem;
        border: 0.18rem solid #003977;
        margin-bottom: 1.25rem;
        background-position: right;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .tile-head {
        padding-right: 0;
    }
    .tile-subhead {
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-family: MayaSamuelsPro, sans-serif;
    }

    a {
        color: white;
        text-decoration: none;
        background-color: transparent;
    }
    a:hover {
        text-decoration: underline;
    }
</style>

<div class="col-md-6">
    <a class="tile" href={href} style="background-image: url(&quot;{img}&quot;);" use:link>
        <div class="tile-head">
            <h3>{title}</h3>
            <div class="tile-subhead"><slot /></div>
        </div>
    </a>
</div>
