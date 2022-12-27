function createEmployeeRecord(employeeArr){
    const record = {
        firstName: employeeArr[0],
        familyName: employeeArr[1],
        title: employeeArr[2],
        payPerHour: employeeArr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return record;
}

function createEmployeeRecords(recordArr){
    return recordArr.map(createEmployeeRecord)
}

function createTimeInEvent(employeeRecord, dateStamp){
    const dateSplit = dateStamp.split(' ');
    const timeIn = {
        type: 'TimeIn',
        hour: Number(dateSplit[1]),
        date: dateSplit[0],
    }
    employeeRecord.timeInEvents.push(timeIn);
    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp){
    const dateSplit = dateStamp.split(' ');
    const timeOut = {
        type: 'TimeOut',
        hour: Number(dateSplit[1]),
        date: dateSplit[0],
    }
    employeeRecord.timeOutEvents.push(timeOut);
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, givenDate){
    const timeIn = employeeRecord.timeInEvents.find(element => element.date === givenDate);
    const timeOut = employeeRecord.timeOutEvents.find(element => element.date === givenDate);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(recordObject, dateGiven){
    return hoursWorkedOnDate(recordObject, dateGiven) * recordObject.payPerHour;
}

