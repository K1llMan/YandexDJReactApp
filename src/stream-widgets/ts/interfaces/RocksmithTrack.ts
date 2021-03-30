import { RocksmithTrackArrangement } from "../enums/enums";

export interface IRocksmithTrack {
    key: string,
    artist: string,
    name: string,
    user: string,
    arrangementType: string
}