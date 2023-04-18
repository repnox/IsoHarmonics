
export const CONSTANT_TYPE = {
    generator: true,
    constant: true,
}

export default function constant(value=0 ) {
    return {
        type: CONSTANT_TYPE,
        value,
    }
}