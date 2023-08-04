import {Client, Collection} from "discord.js"

export interface CommandInterface {
    name: string
    getName: () => string
    setup: (bot: Client) => void
    action: (bot: Client) => void
}

export class Commander {
    bot:Client
    readonly commands: Collection<string, CommandInterface>
    constructor(bot: Client, commands: Collection<string,CommandInterface>) {
        this.bot = bot
        this.commands = commands
    }
    
    setupAll() {
        this.commands.forEach(cmd => {
            cmd.setup(this.bot)
        })
    }
}