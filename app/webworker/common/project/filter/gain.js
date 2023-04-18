import constant from "../generator/constant";

export const GAIN_TYPE = {
    filter: true,
    gain: true,
}

export default function gain(coefficient=constant(1)) {
    return {
        type: GAIN_TYPE,
        coefficient,
    }
}