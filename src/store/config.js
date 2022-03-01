function nowMinus(hours = 0, minutes = 0) {
    let d = new Date();
    d.setHours(d.getHours() - hours)
    d.setMinutes(d.getMinutes() - minutes)
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
        Image: "/static/img/leftlogo.png",
        Link: "/"
    },

    Discord: {
        GuildID: "938588777465655298",
        Image: "https://discordapp.com/api/guilds/938588777465655298/widget.png?style=banner2",
        SmallImage: "https://discordapp.com/api/guilds/938588777465655298/widget.png",
        Invite: "https://discord.gg/ZR7ZH7RBdU",
        Theme: "dark",
        Text: "Join us on Discord!",
    },

    News: {
        Events: [
            {
                Title: "Neo just pushed to project lorem-ipsum on Gitlab",
                Image: "https://i.pravatar.cc/50?img=neo",
                Link: "http://example.com/",
                Timestamp: nowMinus(0)
            },
            {
                Title: "u/Ficus just posted \"Lorem Ipusm\" on r/Starsiege",
                Image: "https://i.pravatar.cc/50?img=uficus",
                Link: "http://example.com/",
                Timestamp: nowMinus(0, 30)
            },
            {
                Title: "Wilzuun registered a new project on Github Dolor sit amet!",
                Image: "https://i.pravatar.cc/50?img=Wilzuun",
                Link: "http://example.com/",
                Timestamp: nowMinus(1)
            },
            {
                Title: "Two-In-The-Bush just posted \"Dolor Sit Amet\" to the #starsiege tag on Tumblr",
                Image: "https://i.pravatar.cc/50?img=two-in-the-bush",
                Link: "http://example.com/",
                Timestamp: nowMinus(1, 30)
            },
            {
                Title: "Angel-A finished broadcasting on Twitch.tv",
                Image: "https://i.pravatar.cc/50?img=angel",
                Link: "http://example.com/",
                Timestamp: nowMinus(2)
            },
            {
                Title: "Capt.Aaaaaa just posted \"Fashion starsiege\" to the #starsiege tag on Instagram",
                Image: "https://i.pravatar.cc/50?img=cpt.aaaaaa",
                Link: "http://example.com/",
                Timestamp: nowMinus(2, 30)
            },
            {
                Title: "Drake wrote an article on the project hard-lockup-computer",
                Image: "https://i.pravatar.cc/50?img=Drake__",
                Link: "http://example.com/",
                Timestamp: nowMinus(3)
            },
            {
                Title: "Angel-A started broadcasting LIVE on Twitch.tv",
                Image: "https://i.pravatar.cc/50?img=angel",
                Link: "http://example.com/",
                Timestamp: nowMinus(4)
            },
            {
                Title: "Jenetrix released version 420.69.1 of starsiege-installer",
                Image: "https://i.pravatar.cc/50?img=Jenetrix",
                Link: "http://example.com/",
                Timestamp: nowMinus(5)
            },
            {
                Title: "Plaguedog added computer-loop.cs to the archives",
                Image: "https://i.pravatar.cc/50?img=Plaguedog",
                Link: "http://example.com/",
                Timestamp: nowMinus(6)
            },
            {
                Title: "Starsiege Players wishes Neo a happy 27th Birthday",
                Image: "https://i.pravatar.cc/50?img=StarsiegePLayersBirthday",
                Link: "http://example.com/",
                Timestamp: "2021-01-10 00:00:00"
            },
            {
                Title: "Happy New Years from Starsiege Players",
                Image: "https://i.pravatar.cc/50?img=StarsiegePLayersParty",
                Link: "http://example.com/",
                Timestamp: "2021-01-01 00:00:00"
            },
            {
                Title: "Merry Christmas from Starsiege Players",
                Image: "https://i.pravatar.cc/50?img=StarsiegePLayersChristmas",
                Link: "http://example.com/",
                Timestamp: "2020-12-25 00:00:00"
            },
            {
                Title: "Happy Thanksgiving from Starsiege Players",
                Image: "https://i.pravatar.cc/50?img=StarsiegePLayersThanksgiving",
                Link: "http://example.com/",
                Timestamp: "2020-11-28 00:00:00"
            },
        ],
    }
}