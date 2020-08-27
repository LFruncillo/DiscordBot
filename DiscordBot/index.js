const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQ2NDQ4NjQ2OTM3MTE2Nzkz.X0AeeQ.nn1Dk2lh0uIpE8lc_HcpA5VZXv8';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online');
})

bot.on('message', message=> {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong');
            break;
        case 'bruh':
             message.channel.send('https://tenor.com/view/bruh-bruh-momento-bruh-moment-walking-gif-17527043');
             break;
        case 'todd':
             message.channel.send('https://tenor.com/view/todd-howard-howard-nodding-gif-13246550');
             break;
        case 'website':
            message.channel.send('www.youtube.com');
            break;
        case 'info':
            if(args[1] === 'schedule'){
                message.channel.send('Mon,Wed & Fri | 2pm-6pm');
            }else{
                message.channel.send('Invalid command');
            }
            break;
    }
})

bot.login(token);