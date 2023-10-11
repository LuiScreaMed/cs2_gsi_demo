export interface Round {
    phase?: string | "freezetime" | "warmup" | "live",
    win_team?: string | "CT" | "T",
    bomb?: string | "planted"
}