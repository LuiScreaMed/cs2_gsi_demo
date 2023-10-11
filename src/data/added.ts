export interface Added {
    player?: {
        weapons?: {
            [key: string]: boolean
        },
        state?: {
            defusekit?: boolean
        }
    },
    round?: {
        win_team?: boolean,
        bomb?: boolean
    }
}