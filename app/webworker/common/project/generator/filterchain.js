import constant from "./constant";
import gain from "../filter/gain";


export const FILTERCHAIN_TYPE = {
    generator: true,
    filterchain: true,
}

export default function filterchain(generator=constant(0), filter=gain()) {
    return {
        type: FILTERCHAIN_TYPE,
        generator,
        filter,
    }
}