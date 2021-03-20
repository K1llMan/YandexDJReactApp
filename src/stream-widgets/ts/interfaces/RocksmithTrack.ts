import { RocksmithTrackArrangement } from "../enums/enums";

export interface IRocksmithTrack {
    artist: string,
    name: string,
    user: string,
    arrangementType: RocksmithTrackArrangement
}