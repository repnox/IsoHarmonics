

export const ENVELOPE_TYPE = {
    generator: true,
    envelope: true,
}

export default function envelope(attack=0, decay=0,sustain=1, release=0 ) {
    return {
        type: ENVELOPE_TYPE,
        attack, decay, sustain, release
    }
}