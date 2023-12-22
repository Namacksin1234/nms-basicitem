import { Form } from "bdsx/bds/form";
import { Player } from "bdsx/bds/player";

export class BasicItemForm {

    public static async sendForm(pl: Player): Promise<boolean> {
        const form = await Form.sendTo(pl.getNetworkIdentifier(), {
            title: "§l§8[ §fBasicItem §8]",
            content: "§7Do you want the basic items to be paid?",
            type: "modal",
            button1: "§l§8Yes",
            button2: "§l§8No"
        });
        if (form === null) return false;
        return form;
    };

};