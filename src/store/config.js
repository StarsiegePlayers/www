function nowMinus(hours) {
    let d = new Date();
    d.setHours(d.getHours() - hours)
    return d.toUTCString();
}

export default {
    Title: "Starsiege Players",
    GitURL: "https://github.com/StarsiegePlayers/www",
    GitContentURL: "https://github.com/StarsiegePlayers/www-site-content",

    Calendar: {
        LicenseKey: "GPL-My-Project-Is-Open-Source",
        Events: [
            {
                Name: "Matchmaking Events",
                APIKey: (!process.env.PROD_BUILD ? process.env.CALENDAR_API_KEY_1 : process.env.CALENDAR_PROD_KEY_1),
                CalendarID: "qve8pvha1fs8oiinq633nbe57o@group.calendar.google.com"
            },
            {
                Name: "Community Birthdays",
                APIKey: (!process.env.PROD_BUILD ? process.env.CALENDAR_API_KEY_2 : process.env.CALENDAR_PROD_KEY_2),
                CalendarID: "rfpk5nqji86bic4e635jcntouo@group.calendar.google.com"
            }
        ],
    },

    Logo: {
        Text: "Starsiege Players Logo",
        Image: "https://via.placeholder.com/240x100.png?text=240x100",
        Link: "/"
    },

    Discord: {
        GuildID: "297873205316681728",
        Image: "https://discordapp.com/api/guilds/297873205316681728/embed.png?style=banner2",
        Invite: "https://discord.gg/KA4N6J8",
        Theme: "dark",
        Text: "Join us on Discord!",
    },

    News: {
        Events: [
            {
                Title: "Neo just pushed to project lorem-ipsum on Gitlab",
                Image: "https://i.pravatar.cc/50?img=1",
                Link: "http://example.com/",
                Timestamp: nowMinus(0)
            },
            {
                Title: "Wilzuun registered a new project on Github Dolor sit amet!",
                Image: "https://i.pravatar.cc/50?img=3",
                Link: "http://example.com/",
                Timestamp: nowMinus(1)
            },
            {
                Title: "Angel-A finished broadcasting on Twitch.tv",
                Image: "https://i.pravatar.cc/50?img=9",
                Link: "http://example.com/",
                Timestamp: nowMinus(2)
            },
            {
                Title: "Drake wrote an article on the project hard-lockup-computer",
                Image: "https://i.pravatar.cc/50?img=4",
                Link: "http://example.com/",
                Timestamp: nowMinus(3)
            },
            {
                Title: "Angel-A started broadcasting LIVE on Twitch.tv",
                Image: "https://i.pravatar.cc/50?img=9",
                Link: "http://example.com/",
                Timestamp: nowMinus(4)
            },
            {
                Title: "Jenetrix released version 420.69.1 of starsiege-installer",
                Image: "https://i.pravatar.cc/50?img=5",
                Link: "http://example.com/",
                Timestamp: nowMinus(5)
            },
            {
                Title: "Plaguedog added computer-loop.cs to the archives",
                Image: "https://i.pravatar.cc/50?img=6",
                Link: "http://example.com/",
                Timestamp: nowMinus(6)
            },
            {
                Title: "Starsiege Players wishes Neo a happy 27th Birthday",
                Image: "https://i.pravatar.cc/50?img=7",
                Link: "http://example.com/",
                Timestamp: "2021-01-10 00:00:00"
            },
            {
                Title: "Happy New Years from Starsiege Players",
                Image: "https://i.pravatar.cc/50?img=8",
                Link: "http://example.com/",
                Timestamp: "2021-01-01 00:00:00"
            },
            {
                Title: "Merry Christmas from Starsiege Players",
                Image: "https://i.pravatar.cc/50?img=9",
                Link: "http://example.com/",
                Timestamp: "2020-12-25 00:00:00"
            },
            {
                Title: "Happy Thanks Giving from Starsiege Players",
                Image: "https://i.pravatar.cc/50?img=10",
                Link: "http://example.com/",
                Timestamp: "2020-11-28 00:00:00"
            },
        ],
    }
}