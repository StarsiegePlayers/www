Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.addHours = function(hours) {
    var date = new Date(this.valueOf());
    date.setHours(date.getHours() + hours)
    return date;
}

export function generateData(startDate, endDate) {
    let out = []
    if (typeof startDate !== "object") {
        startDate = new Date(startDate)
    }
    if (typeof endDate !== "object") {
        endDate = new Date(endDate)
    }
    let currentDate = startDate;
    while (currentDate <= endDate) {
        for (let i = 0; i <= 23; i ++) {
            let value = Math.floor(Math.random() * 10);
            out.push({
                date: currentDate.getTime(),
                value: value,
            })
            currentDate = currentDate.addHours(1);
        }
    }
    return out;
}

export function dayDifference(dateStart, dateEnd) {
    if (typeof dateStart !== "object") {
        dateStart = new Date(dateStart);
    }
    if (typeof dateEnd !== "object") {
        dateEnd = new Date(dateEnd);
    }
    return Math.abs((dateStart.getTime() - dateEnd.getTime()) / (1000 * 3600 * 24))
}

export const serverChartData = convertChartData(generateData("2021-08-11", "2021-08-18"));
export const playerChartData = convertChartData(generateData("2021-08-11", "2021-08-18"));


export const stats = {
    lastupdated: (new Date()).toISOString(),
    currentusers: 10,
    currentservers: 25,
    startDate: "2020-08-18",
    endDate: "2021-08-18",
    data: generateData("2020-08-18", "2021-08-18"),
}

export function convertChartData(dataIn) {
    let out = [];
    dataIn.forEach(e => out.push([ (new Date(e.date)).getTime(), e.value ]));
    return out;
}