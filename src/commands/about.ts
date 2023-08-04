import {Client} from "discord.js"
import {CommandInterface} from "../commander.js"


export default class About implements CommandInterface {
    name: string
    constructor() {
        this.name = "about"
    }
    getName() {
        return this.name
    }
    setup(bot:Client) {
        console.log("hello from about command")
    }
    action(bot:Client) {

    }
}