import fs from "fs";
import path from "path";

/**
 * Generate cfg file for cs2
 *
 * 生成一个用于cs2的cfg文件
 * @returns Generated cfg file name and server port number.
 */
export function generateCfgFile(): {
    fileName: string,
    port: number
} {
    try {
        let cfgPath: string = path.join(path.resolve(), "cfg");
        let config: Config = JSON.parse(fs.readFileSync(path.join(cfgPath, "config.json"), "utf8"));
        let fileName = `gamestate_integration_${config.gsi_name.replace(/_/g, "")}.cfg`;
        fs.writeFileSync(path.join(cfgPath, `gamestate_integration_${config.gsi_name.replace(/_/g, "")}.cfg`), generateCfg(config));
        return { fileName, port: config.port };
    } catch (e) {
        throw e;
    }
}

function generateCfg(config: Config): string {
    return `"${config.gsi_name}"
    {
         "uri" "http://localhost:${config.port}/"
         "timeout" "5.0"
         "buffer"  "0.1"
         "throttle" "0.1"
         "heartbeat" "30.0"
         "data"
         {
            "provider"            "0"
               "map"                 "1"
               "round"               "1"
               "player_id"           "1"
               "player_state"        "1"
               "player_weapons"      "1"
               "player_match_stats"  "1"
         }
    }`
}

interface Config {
    gsi_name: string,
    port: number
}