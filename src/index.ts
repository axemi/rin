import { Client, IntentsBitField, Events} from "discord.js";
import { CommandInterface, Commander } from "./commander";
import { CommandsCollection } from "./commandsList";

const intentBits = new IntentsBitField()
intentBits.add(IntentsBitField.Flags.Guilds, IntentsBitField.Flags.MessageContent)

const bot = new Client({
    intents: intentBits
})
const commander = new Commander(bot, CommandsCollection)
bot.once(Events.ClientReady, event => {
    console.log(`connected ${event.user.username} (${event.user.id})`)
    commander.setupAll()
})

const btk = process.env.btk
bot.login(btk)

//shutdown
process.on('SIGINT', function() {
    bot.destroy()
    console.log("disconnected bot")
});