import config from "./config";

import Home from "../../content/Site/Home.md";
import Download from "../../content/Site/Download.md"
import About from "../../content/Site/About.md";

import FAQ from "../../content/Intro/FAQ.md"
import Help from "../../content/Intro/Help.md"

import Missions from "../../content/Campaign/Missions.md"
import MissionStats from "../../content/Campaign/Stats.md"
import Terrain from "../../content/Campaign/Terrain.md"

import Servers from "../views/ServerBrowser.svelte"
import ServerStats from "../views/ServerStats.svelte"
import ServerMap from "../../content/Multiplayer/Map.md"

import News from "../../content/Community/News.md"
import Calendar from "../../content/Community/Calendar.md"
import Discord from "../../content/Community/Discord.md"
import Speedrunning from "../../content/Community/Speedrunning.md"
import Projects from "../../content/Community/Projects.md"
import Files from "../../content/Community/Files.md"
import Links from "../../content/Community/Links.md"


import History from "../../content/History/History.md"
import Timeline from "../../content/History/Timeline.md"

export default {
    Logo: config.Logo,
    Discord: config.Discord,
    Routemap: [
        {route: "/", text: "Home", component: Home},
        {route: "/download", text: "Play Starsiege", component: Download, extrapadding: true },
        {group: "Getting Started",
            routes: [
                {route: "/intro", text: "F.A.Q.", component: FAQ},
                {route: "/intro/help", text: "Help", component: Help},
            ]
        },
        {group: "Campaign",
            routes: [
                {route: "/campaign", text: "Mission Browser", component: Missions},
                {route: "/campaign/stats", text: "Mission Stats", component: MissionStats},
                {route: "/campaign/terrain", text: "Terrains", component: Terrain},
            ]
        },
        {group: "Multiplayer",
            routes: [
                {route: "/multiplayer", text: "Server Browser", component: Servers},
                {route: "/multiplayer/stats", text: "Server Stats", component: ServerStats},
                {route: "/multiplayer/map", text: "World Map", component: ServerMap},
            ]
        },
        {group: "Community",
            routes: [
                {route: "/community", text: "News", component: News},
                {route: "/community/discord", text: "Discord", component: Discord},
                {route: "/community/calendar", text: "Calendar", component: Calendar},
                {route: "/community/speedrunning", text: "Speed Running", component: Speedrunning},
                {route: "/community/projects", text: "Projects", component: Projects},
                {route: "/community/links", text: "Webring", component: Links},
                {route: "/community/files", text: "Files", component: Files},
            ]
        },
        {group: "History",
            routes: [
                {route: "/history", text: "Web Archives", component: History},
                {route: "/history/timeline", text: "Timelines", component: Timeline},
            ]
        },
        {route: "/about", text: "About", component: About, extrapadding: true},
    ]
}