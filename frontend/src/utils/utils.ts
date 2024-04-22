import { AttemptCount } from '../models/problems'

export type ChartSize = {
    width: string;
    height: string;
};

export function getStudentEnding(amount: number) {
    const lastTwoDigits = amount % 100
    const lastDigit = amount % 10

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'студентов'
    } else if (lastDigit === 1) {
        return 'студент'
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return 'студента'
    } else {
        return 'студентов'
    }
}

export function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
}

export function getGreenColorScale(range: number, minValue: number, value: number) {
    // const ratio = value / range; // Max population value
    // const brightestColor = [2, 206, 169];
    // const mediumColor = [147, 225, 217]
    // const paleColor = [221, 255, 247];
    // const color = brightestColor.map((channel, index) =>
    //     Math.round(lerp(paleColor[index], channel, ratio))
    // );
    // return `rgb(${color.join(',')})`;
    //
    value = value - minValue
    const ratio = value / (range) // Max population value

    const purpleColor = [2, 206, 169]
    const mediumBlueColor = [131, 197, 190]
    const paleBlueColor = [237, 246, 249]

    let color: number[]

    if (value <= 0.5) {
        color = paleBlueColor.map((channel, index) =>
            Math.round(lerp(channel, mediumBlueColor[index], ratio))
        )
    } else {
        color = mediumBlueColor.map((channel, index) =>
            Math.round(lerp(channel, purpleColor[index], ratio))
        )
    }
    return `rgb(${color.join(',')})`
}

export function getBlueColorScale(timeRange: number, minValue: number, value: number) {
    value = value - minValue
    const ratio = value / (timeRange) // Max population value

    const purpleColor = [163, 213, 255]
    const mediumBlueColor = [204, 232, 255]
    const paleBlueColor = [217, 240, 255]

    let color: number[]

    if (value <= 0.5) {
        color = paleBlueColor.map((channel, index) =>
            Math.round(lerp(channel, mediumBlueColor[index], ratio))
        )
    } else {
        color = mediumBlueColor.map((channel, index) =>
            Math.round(lerp(channel, purpleColor[index], ratio))
        )
    }
    return `rgb(${color.join(',')})`
}

export function getLabelByAttemptCount(attemptCount: AttemptCount): string {
    switch (attemptCount) {
    case AttemptCount.FIRST_ATTEMPT:
        return 'задач решены с первой попытки'
    case AttemptCount.SECOND_ATTEMPT:
        return 'задач решены со второй попытки'
    case AttemptCount.MORE_ATTEMPTS:
        return 'задач решены с третьей и более попыток'
    }
}

export const generateUniqueId = (): number => {
    return Math.floor(Math.random() * Date.now())
}