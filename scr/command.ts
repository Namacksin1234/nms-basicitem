import { CustomCommandFactory, command } from "bdsx/command";
import { BasicItemMain } from "../function";
import { CommandOrigin } from "bdsx/bds/commandorigin";
import { Player, ServerPlayer } from "bdsx/bds/player";

class BasicCommand {

    public static commandName: string = "기본템";

    public static commandDescription: string = "기본템을 지급 받습니다";

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
        if (await BasicItemMain.sendForm(pl)) {
            BasicItemMain.giveBasicItem(pl);
        };
    };
},{});