import config from "./config"

export default {
    Discord: config.Discord,
    TileData: [
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
};
