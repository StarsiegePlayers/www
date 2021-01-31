<!--suppress HtmlUnknownTarget -->
<script>
    export let location = '/';
</script>
<style>
    a {
        color: white;
        text-decoration: none;
        background-color: transparent;
    }
    a:hover {
        text-decoration: underline;
    }
    .row .tiles h3 {
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
        height: 200px;
        border: 0.18rem solid #003977;
        margin-bottom: 20px;
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
    #tile-serverbrowser {
        background-image: url('/static/img/serverbrowser.png');
    }
    #tile-news {
        background-image: url('/static/img/news.png');
    }
    #tile-projects {
        background-image: url('/static/img/projects.png');
    }
    #tile-history {
        background-image: url('/static/img/history.png');
    }
</style>
<div class="row">
    <div class="col-md-8">
        <div class="row tiles">
            <div class="col-md-6">
                <a href="/server-browser" class="tile" id="tile-serverbrowser">
                    <div class="tile-head">
                        <h3>Server Browser</h3>
                        <div class="tile-subhead">
                            Play on Community servers
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-6">
                <a href="/news" class="tile" id="tile-news">
                    <div class="tile-head">
                        <h3>Community News</h3>
                        <div class="tile-subhead">
                            Catch up on community highlights
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="row tiles">
            <div class="col-md-6">
                <a href="/projects" class="tile" id="tile-projects">
                    <div class="tile-head">
                        <h3>Community Projects</h3>
                        <div class="tile-subhead">
                            How we're making Starsiege better
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-6">
                <a href="/history" class="tile" id="tile-history">
                    <div class="tile-head">
                        <h3>Historical Archives</h3>
                        <div class="tile-subhead">
                            Where we came from, where we're going
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="col-md-4"></div>
</div>