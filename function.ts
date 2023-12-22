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
        pl.sendMessage('§aBasic items have been paid normally');
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
            pl.sendMessage(`§cYou'll get the basic items back in ${60 - Math.floor(tick - BasicItemMain.getBasicItem[plname])/20} seconds`);
            return true;
        } else return false;
    };

};