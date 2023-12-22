import { blue } from "colors";
import { events } from "bdsx/event";

const pluginTitle = "[ BASIC ITEM PLUGIN ]";

console.log(blue(`
██████╗  █████╗ ███████╗██╗ ██████╗██╗████████╗███████╗███╗   ███╗        
██╔══██╗██╔══██╗██╔════╝██║██╔════╝██║╚══██╔══╝██╔════╝████╗ ████║        
██████╔╝███████║███████╗██║██║     ██║   ██║   █████╗  ██╔████╔██║        
██╔══██╗██╔══██║╚════██║██║██║     ██║   ██║   ██╔══╝  ██║╚██╔╝██║        
██████╔╝██║  ██║███████║██║╚██████╗██║   ██║   ███████╗██║ ╚═╝ ██║        
╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝╚═╝   ╚═╝   ╚══════╝╚═╝     ╚═╝                                                                                                                                                                               
`));
console.log(pluginTitle.blue + " plugin is loading...");

events.serverOpen.on(() => {
    console.log(pluginTitle.blue + " plugin is launched");

    import("./function");
    import("./scr/command");
    import("./scr/from");
});