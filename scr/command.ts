import { CustomCommandFactory, command } from "bdsx/command";
import { BasicItemMain } from "../function";
import { CommandOrigin } from "bdsx/bds/commandorigin";
import { Player, ServerPlayer } from "bdsx/bds/player";
import { BasicItemForm } from "./from";

class BasicCommand {

    public static commandName: string = "basicitem";

    public static commandDescription: string = "Basic items will be provided";

    public static registerBasicCommand(): CustomCommandFactory {
        return command.register(BasicCommand.commandName, BasicCommand.commandDescription);
    };

    public static getPlayerToOrigin(origin: CommandOrigin): Player {
        return origin.getEntity() as ServerPlayer;
    };

};

BasicCommand.registerBasicCommand().overload(async (param, origin, output) => {
    const pl = BasicCommand.getPlayerToOrigin(origin)
    if (!BasicItemMain.isGetBasicItem(pl)) {
        if (await BasicItemForm.sendForm(pl)) {
            BasicItemMain.giveBasicItem(pl);
        };
    };
},{});