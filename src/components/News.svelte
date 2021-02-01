<script>
    import {timeago} from "./timeago"

    export let limit = 10
    export let header = "Community News"

    let data = [
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
        {Title: "test item", Image: "", Link: "http://example.com/", Timestamp: "2021-01-31 02:59:50"},
    ]

</script>

<style>
    .news-item-small {
        margin-bottom: 5px;
    }
    h3 {
        font-family: MayaSamuelsPro, sans-serif;
        padding-left: 0.2rem;
        margin-bottom: 1rem;
        border-bottom: 0.1rem solid;
    }
</style>

<div class="row">
    <div class="col-md-12">
        <div>
            <h3>{header}</h3>
            {#each data.slice(0, limit) as row}
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <article class="row news-item-small">
                        <div class="col-md-2 col-sm-4 col-xs-4 news-item-date">
                            <a href={row.Link}><img alt={row.Title} src={row.Image} /></a>
                        </div>
                        <div class="col-md-8 col-sm-8 col-xs-8">
                            <a href={row.Link}>{row.Title}</a>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-4 news-item-date">
                            <small use:timeago datetime="{row.Timestamp}" locale="en_US">{row.Timestamp}</small>
                        </div>
                    </article>
                </div>
            {/each}
        </div>
    </div>
</div>