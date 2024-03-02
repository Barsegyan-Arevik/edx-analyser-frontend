export default function getStudentEnding(number) {
    const lastTwoDigits = number % 100;
    const lastDigit = number % 10;

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


function parseCSV(csvString) {
    const rows = csvString.trim().split('\n');
    const data = rows.slice(1).map(row => {
        const [username, time] = row.split(',');
        return { username, time: parseFloat(time) / 3600}; // преобразование времени в число
    });
    return data;
}
