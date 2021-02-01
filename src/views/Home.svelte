<!--suppress HtmlUnknownTarget -->
<script>
    import Discord from "../components/Discord.svelte"
    import Tile from "../components/Tile.svelte"
    import News from "../components/News.svelte"

    let tiles = [
        [
            {
                Title: "Server Browser",
                Link: "/servers",
                Image: "/static/img/serverbrowser.png",
                Description: "Play on Community servers"
            },
            {
                Title: "Community News",
                Link: "/community",
                Image: "/static/img/news.png",
                Description: "Catch up on community highlights"
            }
        ],
        [
            {
                Title: "Community Projects",
                Link: "/community/projects",
                Image: "/static/img/projects.png",
                Description: "How we're making Starsiege better"
            },
            {
                Title: "Historical Archives",
                Link: "/history",
                Image: "/static/img/history.png",
                Description: "Where we came from, where we're going"
            }
        ]
    ]
</script>

<div class="row">
    <div class="col-md-8">
        {#each tiles as tilegroup}
            <div class="row">
                {#each tilegroup as tile}
                    <Tile title={tile.Title} href={tile.Link} img={tile.Image}>{tile.Description}</Tile>
                {/each}
            </div>
        {/each}
    </div>
    <div class="col-md-4">
        <Discord guildID="297873205316681728" invite="https://discord.gg/KA4N6J8" theme="dark"/>
    </div>
</div>
<News header="Community News" limit=10 />