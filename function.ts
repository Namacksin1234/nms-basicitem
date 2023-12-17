import { Form } from "bdsx/bds/form";
import { Player } from "bdsx/bds/player";

export class BasicItemMain {
    
    public static coolTime: number = 60;

    public static giveBasicItem(pl: Player): void {
        pl.runCommand(`give @s leather_helmet 1`);
        pl.runCommand(`give @s leather_chestplate 1`);
        pl.runCommand(`give @s leather_leggings 1`);
        pl.runCommand(`give @s leather_boots 1`);
        pl.runCommand(`give @s wooden_sword 1`);
        pl.runCommand(`give @s wooden_axe 1`);
        pl.runCommand(`give @s wooden_pickaxe 1`);
        pl.sendMessage('§a성공적으로 기본템이 지급 되었습니다');
        BasicItemMain.getBasicItem[pl.getName()] = pl.getLevel().getCurrentTick();
        setTimeout(()=>{
            delete BasicItemMain.getBasicItem[pl.getName()];
        }, BasicItemMain.coolTime*1000);
    };

    public static getBasicItem: Record<string, number> = {};
    
    public static isGetBasicItem(pl: Player): boolean {
        const plname = pl.getName();
        if (!BasicItemMain.getBasicItem[plname]) return false;
        const tick = pl.getLevel().getCurrentTick();
        if (60 > Math.floor(tick - BasicItemMain.getBasicItem[plname])/20) {
            pl.sendMessage(`§c${60 - Math.floor(tick - BasicItemMain.getBasicItem[plname])/20}초 뒤에 다시 아이템 지급이 가능합니다.`);
            return true;
        } else return false;
    };

    public static async sendForm(pl: Player): Promise<boolean> {
        const form = await Form.sendTo(pl.getNetworkIdentifier(), {
            title: "§l§8[ §f기본템 §8]",
            content: "§7당신은 기본템이 지급 되는 것을 원합니까?",
            type: "modal",
            button1: "§l§8예",
            button2: "§l§8아니오"
        });
        if (form === null) return false;
        return form;
    };

};