const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const dotenv = require('dotenv');

dotenv.config();


client.login(token);

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})


// client.on('message', message => {
//     console.log(message.content)
// })


// function ping(message) {
//     if (message.content === `${prefix}ping`) {
//         message.channel.send('pong')
//     }
// }
// client.on('message', ping)



//if message doesnt start with prefix or the bot sent the message, return
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //remove the prefix from the message and the empty spaces. returns the arguments in an array
    const args = message.content.slice(prefix.length).trim().split(' ');

    // removes the first element of the args array to avoid having the command name in the arg array. 
    const command = args.shift().toLowerCase();

    if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }

        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }
})


