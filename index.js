/* Your Code Here */
function createEmployeeRecord(empArr) {
    return {
        firstName: empArr[0],
        familyName:  empArr[1],
        title: empArr[2],
        payPerHour: empArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords (empArrays) {
    let empIndex = [];
    for (const element of empArrays) {
        let tempEmp = createEmployeeRecord(element);
        empIndex.push(tempEmp);
        }
    return empIndex;
}

function createTimeInEvent (timeString) {
    let [date, hour] = timeString.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date,
    })
    return this;
}

function createTimeOutEvent (timeString) {
    let [date, hour] = timeString.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date,
    })
    return this;
}

function hoursWorkedOnDate (date) {
    for (let i=0; i < this.timeInEvents.length; i++) {
        if (date === this.timeInEvents[i].date) {
            return ((this.timeOutEvents[i].hour - this.timeInEvents[i].hour) / 100);
        }
    }
}
        
function wagesEarnedOnDate (date) {
    let hoursInt = hoursWorkedOnDate(date);
    console.log(hoursInt);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll () {

}