var student1 = {
    firstName: 'Paul',
    lastName: 'Jerry',
    age: 27,
    location: 'Nigeria'
};
var student2 = {
    firstName: 'Jerry',
    lastName: 'Parkerson',
    age: 28,
    location: 'Edo state'
};
var studentList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement('table');
var thead = document.createElement('thead');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';
thead.append(th1);
thead.append(th2);
table.append(thead);
studentList.forEach(function (student) {
    var row = document.createElement('tr');
    var column1 = document.createElement('td');
    var column2 = document.createElement('td');
    column1.innerText = student.firstName;
    column2.innerText = student.lastName;
    column1.style.border = '1px solid gray';
    column2.style.border = '1px solid gray';
    column1.style.padding = '.5rem';
    column2.style.padding = '.5rem';
    row.append(column1);
    row.append(column2);
    table.append(row);
});
body.append(table);
//# sourceMappingURL=main.js.map