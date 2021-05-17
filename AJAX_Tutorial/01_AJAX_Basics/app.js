// Text File Data
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click',function() {
    // Create an AJAX Request
    let xhr = new XMLHttpRequest();

    // Prepare the Request
    xhr.open('GET' , './data/message.txt' , true);

    // send the Request
    xhr.send();

    // Process the Request
    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText;
            displayTextData(data);
        }
    };
});

// display TextData
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
};

// JSON Button
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click',function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./data/mobiles.json',true);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText;
           let mobile = JSON.parse(data);
           displayJSONData(mobile);
        }
    };
});

// display JSON Data
let displayJSONData = (mobile) => {
    let htmlTemplate = '';
    htmlTemplate = `<ul class="list-group mt-1">
                        <li class="list-group-item">ID : ${mobile.id}</li>
                        <li class="list-group-item">BRAND : ${mobile.brand}</li>
                        <li class="list-group-item">COLOR : ${mobile.color}</li>
                        <li class="list-group-item">PRICE : ${mobile.price}</li>
                    </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
};

// API button
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click',function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200){
            let data = xhr.responseText;
            let users = JSON.parse(data);
           displayUsers(users);
        }
    };
});

// display Users
let displayUsers = (users) => {
    let  htmlTemplate = '';
    for(let user of users){
        htmlTemplate += `<ul class="list-group mt-1">
                            <li class="list-group-item">ID : ${user.id}</li>
                            <li class="list-group-item">NAME : ${user.name}</li>
                            <li class="list-group-item">EMAIL : ${user.email}</li>
                            <li class="list-group-item">STREET : ${user.address.street}</li>
                            <li class="list-group-item">CITY : ${user.address.city}</li>
                         </ul>`;
    }
    document.querySelector('#api-card').innerHTML = htmlTemplate;
};
