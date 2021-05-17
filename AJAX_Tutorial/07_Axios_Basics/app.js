// TextData Button
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click',function () {
   fetchTextData();
});

let fetchTextData = () => {
    axios.get('./data/message.txt').then((response) => {
        if(response.status !== 200){
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        let fileContent = response.data;
        document.querySelector('#text-card').innerHTML = `<h3>${fileContent}</h3>`;
    }).catch((err) => {
        console.error(err);
    });
};

// json button
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click',function() {
    fetchJSONData();
});

let fetchJSONData = () => {
    axios.get('./data/mobiles.json').then((response) => {
        if(response.status !== 200){
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        let mobile = response.data;
        let htmlTemplate = `<ul class="list-group mt-1">
                                <li class="list-group-item">ID : ${mobile.id}</li>
                                <li class="list-group-item">Brand : ${mobile.brand}</li>
                                <li class="list-group-item">Color : ${mobile.color}</li>
                                <li class="list-group-item">Price : ${mobile.price}</li>
                            </ul>`;
        document.querySelector('#json-card').innerHTML = htmlTemplate;
    }).catch((err) => {
        console.error(err);
    });
};

// api data button
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click',function() {
    fetchAPIData();
});

let fetchAPIData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        if(response.status !== 200){
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        let users = response.data;
        let userList = '';
        for(let user of users){
            userList += `<ul class="list-group mt-1">
                            <li class="list-group-item">ID : ${user.id}</li>
                            <li class="list-group-item">Name : ${user.name}</li>
                            <li class="list-group-item">email : ${user.email}</li>
                            <li class="list-group-item">City : ${user.address.city}</li>
                         </ul>`;
        }
        document.querySelector('#api-card').innerHTML = userList;
    }).catch((err) => {
        console.error(err);
    });
};