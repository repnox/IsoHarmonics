


export function cSecondsPerSample(samplesPerSecond) {
    return 1.0 / samplesPerSecond;
}

export function cTick(secondsPerSample, previousTick, freq) {
    return previousTick + secondsPerSample / freq;
}

export function cTime(secondsPerSample, tick) {
    return secondsPerSample * tick;
}

export function cSin(time) {
    return Math.sin(time)
}