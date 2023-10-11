import { Weapon } from "./weapon.js"

export interface Player {
    steamid: string,
    name: string,
    activity: string | "menu" | "playing",
    observer_slot?: number,
    team?: string | "CT" | "T",
    state?: PlayerState,
    weapons?: {
        [key: string]: Weapon
    },
    match_stats?: PlayerMatchStats,
}

export interface PlayerState {
    health: number,
    armor: number,
    helmet: boolean,
    flashed: number,
    smoked: number,
    burning: number,
    money: number,
    round_kills: number,
    round_killhs: number,
    equip_value: number
}

export interface PlayerMatchStats {
    kills: number,
    assists: number,
    deaths: number,
    mvps: number,
    score: number
}