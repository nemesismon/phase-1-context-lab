/* Your Code Here */
function createEmployeeRecord(empArr) {
    const timeIn = [];
    const timeOut = [];
    const employee = {};
    employee.firstName = empArr[0],
    employee.familyName = empArr[1],
    employee.title = empArr[2],
    employee.payPerHour = empArr[3]
    employee.timeInEvents = timeIn;
    employee.timeOutEvents = timeOut;
    return employee;
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
    const timeIn = [];
    const timeStamp = timeString.split(' ');
    // console.log(timeStamp);
    const timeInData = {
        type: 'TimeIn',
        date: timeStamp[0],
        time: timeStamp[1],
        };
    // const empIndex = createEmployeeRecords();
    // console.log(empIndex);
    timeIn.push(timeInData);
    // console.log(timeInData);
    console.log(this.timeInEvents.push(timeInData));
    // console.log(timeIn);
    return timeIn;
}

function createTimeOutEvent () {

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

