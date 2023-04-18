import ratio from "../../ratio";
import envelope from "./envelope";

export const HARMONICOSC_TYPE = {
    generator: true,
    harmonicosc: true,
}

export default function harmonicosc(fundamentalRatio=ratio(), relativeAmplitude=envelope()) {
    return {
        type: HARMONICOSC_TYPE,
        fundamentalRatio,
        relativeAmplitude
    }
}