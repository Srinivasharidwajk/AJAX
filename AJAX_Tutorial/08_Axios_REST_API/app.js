let serverURL = `http://127.0.0.1:3000/api`;

// Get Button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click',function() {
    fetchEmployees();
});

// fetchEmployees
let fetchEmployees = () => {
    let url = `${serverURL}/employees`;
    axios.get(url).then((response) => {
        let employees = response.data;
        let employeeRows = ``;
        for(let employee of employees){
            employeeRows += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.first_name}</td>
                                <td>${employee.last_name}</td>
                                <td>${employee.email}</td>
                                <td>${employee.gender}</td>
                                <td>${employee.ip_address}</td>
                            </tr>`;
        }
        document.querySelector('#table-body').innerHTML = employeeRows;
    }).catch((err) => {
        console.error(err);
    });
};

// POST Button
let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click',function () {
    let url = `${serverURL}/employees`;
    let newEmployee = {
        first_name : 'Rajan',
        last_name : 'Jain',
        email : 'rajan@gmail.com',
        gender : 'Male',
        ip_address : '127.0.0.1'
    };
    axios.post(url, newEmployee).then((response) => {
        console.log(response.data);
        fetchEmployees();
    }).catch((err) => {
        console.error(err);
    });
});

// Put Button
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click',function() {
    let employeeID = '_abcdef';
    let url = `${serverURL}/employees/${employeeID}`;
    let updatedEmployee  = {
        first_name : 'John',
        last_name : 'Wilson',
        email : 'jaon_wilson@gmail.com',
        gender : 'Male',
        ip_address : '255.255.255'
    };
    axios.put(url, updatedEmployee).then((response) => {
        console.log(response.data);
        fetchEmployees();
    }).catch((err) => {
        console.error(err);
    });
});

// Delete Button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click',function() {
    let employeeID = `_vwxyz`;
    let url = `${serverURL}/employees/${employeeID}`;
    axios.delete(url).then((response) => {
        console.log(response.data);
        fetchEmployees();
    }).catch((err) => {
        console.error(err);
    });
});