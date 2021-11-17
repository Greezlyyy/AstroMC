const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTEwNjAyMTg3MjA0MzM3NzA0.YZVOXw.Er5MxJ1N9FPL0OojPzklhWT1880")

client.on("ready", () => {
    console.log("Il bot è online!")
})

client.on("messageCreate", (message) => {
    if (message.content == "!ciao") {
        message.channel.send("Hey ciao!")
    }
})