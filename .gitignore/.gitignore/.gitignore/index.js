const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "f!";

client.on("ready", () => {
    client.user.setActivity("f!help | In " + client.guilds.size + " servers.");
    client.user.setStatus("dnd");
    console.log("Ready!");
});

let Money = 0;

client.on("message", (message) => {
    if(!message.content.startsWith("f!")) return;
    if(message.author.bot) return;

    let ID = message.author.id
    let Name = message.author.name;
 
    Money = Money + 4;

    if(message.content.startsWith(prefix + "help")){
    	let embed = new Discord.RichEmbed()
    	.setAuthor("Help Menu")
    	.setColor("#3498db")
    	.setThumbnail(message.author.avatarURL)
    	.addField("help", "This command.")
    	.addField("uptime", "Show the bot's uptime.")
    	message.author.send(embed);
    	message.channel.send(":ballot_box_with_check: Check your PMs, **" + message.author.username + "**!");
	}

	if(message.content.startsWith(prefix + "uptime")){
    	let totalSeconds = (client.uptime / 1000);
    	let hours = Math.floor(totalSeconds / 3600);

    	totalSeconds %= 3600;

    	let minutes = Math.floor(totalSeconds / 60);
    	let seconds = totalSeconds % 60;

    	let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    	message.reply("**The bot was uptime** : " + uptime);
	}

	if(message.content.startsWith(prefix + "profile")) {
        let embed = new Discord.RichEmbed()
        .setColor("#3498db")
        .setTitle("Money: " + Money)
        message.channel.send(embed);
	}
});

client.login(process.env.TOKEN);
