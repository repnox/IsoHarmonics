
export const REF_TYPE = {
    ref: true
}

export default function ref(variableName) {
    return {
        type: REF_TYPE,
        variableName,
    }
}