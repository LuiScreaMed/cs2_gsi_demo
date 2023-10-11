export interface Map {
    mode: string | "competitive",
    name: string,
    phase: string,
    round: number,
    team_ct: MapTeam,
    team_t: MapTeam,
    num_matches_to_win_series: number
}

export interface MapTeam {
    score: number,
    name: string,
    consecutive_round_losses: number,
    timeouts_remaining: number,
    matches_won_this_series: number
}