const Discord = require('discord.js');
const bot = new Discord.Client();
const command = require('./command')
const token = '';
const PREFIX = '!';
const channel = bot.channels.cache.get("#710630899607273535");
const fs = require('fs');

// Shows profile for the user who sent the command //
const userInfo = new Discord.MessageEmbed()
	.setColor('#8e3ab5')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
    .setAuthor(bot.username + '#' + bot.discriminator)
	.setDescription('Some description here')
	.setThumbnail(bot.AvatarURL)
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
    .setFooter('Supplied by Wide-Bot', 'https://i.imgur.com/wSTFkRM.png');

// Help command to show all the commands you can use //
const helpInfo = new Discord.MessageEmbed()
	.setColor('#8e3ab5')
	.setTitle('HELP')
	.addFields(
		{ name: 'Commands', value: 'All commands must start with !' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '!ping', value: 'Responds with pong.', inline: true },
        { name: '!bruh', value: 'When it bruh moment.', inline: true },
        { name: '!todd', value: 'Our lord and saviour Todd Howard.', inline: true },
        { name: '!website', value: 'Our website.', inline: true },
        { name: '!info', value: 'Shows info based on the word you put after !info.', inline: true },
        { name: '!giveaway', value: 'Adds you to an on-going giveaway.', inline: true },
        { name: '!me', value: 'Shows info about you.', inline: true },
		{ name: '!help', value: 'Shows this list.', inline: true },
	)
	.setTimestamp()
    .setFooter('Supplied by Wide-Bot');


// Sends message to console when the bot comes online //
bot.on('ready', message =>{
    console.log('This bot is online');

})

// Messaging ping responds with pong (set up for testing bot response) //
bot.on('message', message => {
    command(bot, 'ping', message => {
        message.channel.send('Get ponged!')
    })

    let args = message.content.substring(PREFIX.length).split(" ");

    // Opens support ticket and messages user //
    command(bot, 'support', message => {
        message.author.send('Support ticket opened, please answer the questions below.')
    })
        if(args[1] === 'close'){
            message.author.send('Support ticket closed.')
    }
})

// Checks for blacklisted words and deletes the message //
bot.on('message', async message => {
    let blacklisted = ['abc', 'def', 'ghi'];

    let foundInText = false;
    for (var i in blacklisted) {
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }

    if (foundInText) {
        message.delete();
        message.channel.send('Warning: That word is blacklisted.')
    }
})

// A selection of commands the user can initiate, which returns a bot response //
bot.on('message', message=> {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'bruh':
             message.channel.send('https://tenor.com/view/bruh-bruh-momento-bruh-moment-walking-gif-17527043');
             break;
        case 'todd':
             message.channel.send('https://tenor.com/view/todd-howard-howard-nodding-gif-13246550');
             break;
        case 'website':
            message.channel.send('www.youtube.com');
            break;
        case 'gang':
            if(args[1] === 'join'){
                if(args[2] === 'epic'){
                    let member = message.mentions.members.first();
                        if (!member) return message.reply('Please mention a member!')
                    let epic = message.guild.roles.cache.find(r => r.name === "Epic Gang");
                    member.roles.add(epic).catch(console.error);
                    message.channel.send('User added to Epic Gang');
                }
                if(args[2] === 'bruh'){
                    let member = message.mentions.members.first();
                        if (!member) return message.reply('Please mention a member!')
                    let bruh = message.guild.roles.cache.find(r => r.name === "Bruh Gang");
                    member.roles.add(bruh).catch(console.error);
                    message.channel.send('User added to Bruh Gang');
                }

            }else{
                message.channel.send('!gang join [role]');
            }
            break;
        case 'giveaway':
            message.author.send('You are now entered into the giveaway.');
            break;
        case 'help':
            message.channel.send(helpInfo)
            break;
        case 'music':
            if (channel) return console.error("The channel does not exist!");
            message.member.voice.channel.join().then(connection => {
                console.log("Successfully connected");
            }).catch(e => {
                console.error(e);
            })
            break;
        case 'musicstop':
            if (channel) return console.error("Cannot disconnect!");
            message.member.voice.channel.disconnect().then(connection => {
                console.log("Successfully disconnected");
            }).catch(e => {
                console.error(e);
            })
            break;
        case 'play':

        break;




    }
})

bot.login(token);