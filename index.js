//Removing Token for Git Push. Need to find a more secure implementation of using it. LastPass may be the move.
const token = '';
const Discord = require('discord.js');
const breakingNews = require("./news.js");
const client = new Discord.Client();
var info;


    client.on('message', (msg) => {
        if (msg.content === 'I love you Dad') {
            msg.channel.send(`I love you too ${msg.author}`);
        } else if (msg.content === 'Goodnight Dad!') {
            msg.channel.send(`Goodnight ${msg.author}!`);
        }

    });

    client.on('message', (msg) => {
        if(msg.content === "Talk dirty to me") {
            var interval = setInterval (function () {
                msg.channel.send(`You're doing a great job and I'm so proud of you, son`)
                .catch(console.error);
            }, 3.6 * 1000000);
        }
    });

    client.on('message', (msg) => {
        if(msg.content === "What's new, Pops?") {
            (async () => {
                info = await breakingNews.news(); 
                console.log("Assigning info variable");
                for(item in info.articles){
                    msg.channel.send('News: ' + info.articles[item].title);               
                }

            })()
        }
    });

    client.on('ready', () => {
        console.log('Bot is now connected');
        client.channels.cache.get('825940257479720960').send('Hello, my son <3.');
    });

    client.login(token);
