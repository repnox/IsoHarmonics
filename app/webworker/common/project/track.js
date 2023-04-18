import on from "./automation/trigger/on";
import constant from "./generator/constant";

export const TRACK_TYPE = {
    track: true,
}

export default function track(baseFreq=1, generator=constant(), trigger=on()) {
    return {
        type: TRACK_TYPE,
        baseFreq,
        generator,
        trigger,
    }
}