export function getStudentEnding(amount: number) {
    const lastTwoDigits = amount % 100;
    const lastDigit = amount % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return "студентов";
    } else if (lastDigit === 1) {
        return "студент";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return "студента";
    } else {
        return "студентов";
    }
}

export function parseCSV(csvData: string): { dates: Date[], values: number[] } {
    const csvRows = csvData.split('\n');
    const dates: Date[] = [];
    const values: number[] = [];

    csvRows.forEach(row => {
        const [dateString, valueString] = row.split(',');
        const date = new Date(dateString);
        const value = parseInt(valueString, 10);

        if (!isNaN(date.getTime()) && !isNaN(value)) {
            dates.push(date);
            values.push(value);
        }
    });

    return {dates, values};
}

export enum CompletionStatus {
    NOT_STARTED = 'Не начал',
    IN_PROGRESS = 'Начал но не завершил',
    COMPLETED = 'Прошел курс'
}

export function getColorCompletionStatus(status: CompletionStatus) {
    switch (status) {
        case CompletionStatus.COMPLETED:
            return '#02CEA9';
        case CompletionStatus.IN_PROGRESS:
            return '#FEF045';
        case CompletionStatus.NOT_STARTED:
            return '#F06C79';
    }
}

export function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

export function getGreenColorScale(range: number, value: number) {
    const ratio = value / range; // Max population value
    const brightestColor = [2, 206, 169]; // R, G, B values of bright green
    const paleColor = [240, 240, 240]; // R, G, B values of pale green
    const color = brightestColor.map((channel, index) =>
        Math.round(lerp(paleColor[index], channel, ratio))
    );
    return `rgb(${color.join(',')})`;
}

export function getBlueColorScale(timeRange: number, minValue: number, value: number) {
    value = value - minValue;
    const ratio = value / (timeRange); // Max population value

    const purpleColor = [163, 213, 255];
    const mediumBlueColor = [204, 232, 255];
    const paleBlueColor = [217, 240, 255];

    let color: number[];

    if (value <= 0.5) {
        color = paleBlueColor.map((channel, index) =>
            Math.round(lerp(channel, mediumBlueColor[index], ratio))
        );
    } else {
        color = mediumBlueColor.map((channel, index) =>
            Math.round(lerp(channel, purpleColor[index], ratio))
        );
    }
    return `rgb(${color.join(',')})`;
}
