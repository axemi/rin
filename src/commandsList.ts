import {Collection} from "discord.js"
import About from "./commands/about";
import { CommandInterface } from "./commander";


export const CommandsCollection = new Collection<string, CommandInterface>()

CommandsCollection.set("about", new About())
