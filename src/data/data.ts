import { Added } from "./added.js";
import { Auth } from "./auth.js";
import { Map } from "./map.js";
import { Player } from "./player.js";
import { Round } from "./round.js";

export interface Data {
    map?: Map,
    round?: Round,
    player: Player,
    auth?: Auth,
    previously?: Data,
    added?: Added
}