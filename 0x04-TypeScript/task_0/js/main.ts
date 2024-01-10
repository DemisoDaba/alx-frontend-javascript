interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "California"
}

const student2: Student = {
    firstName: "Sara",
    lastName: "Mate",
    age: 25,
    location: "Ohio"
}

const students: Student[] = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

students.forEach((student: Student) => {
    const row = document.createElement('tr');
    table.appendChild(row);

    const firstName: string = student.firstName;
    const firstNameColumn = document.createElement('td');
    firstNameColumn.textContent = firstName;
    row.appendChild(firstNameColumn);

    const location: string = student.location;
    const locationColumn = document.createElement('td');
    locationColumn.textContent = location;
    row.appendChild(locationColumn);
})
