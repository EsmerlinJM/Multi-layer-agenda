/*
ESMERLIN JOEL MIESES
2016-4379
*/

// APIurl and form
const apiUrl = 'http://www.raydelto.org/itla/agenda/';
const form = document.getElementById('form').addEventListener('submit', submitContent);

getAll(apiUrl);

// Get data form validate form and send form to url
function submitContent(e){
    e.preventDefault();
    
    let name = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let phone = document.getElementById('phone').value;

    if(name != '' && lastName != '' && phone != ''){
        let data = {
            name: name,
            lastName: lastName,
            phone: phone
        };
        storeData(data, apiUrl);
    } else {
        alert('Campos Vacios');
    }
}

// Get all json of APIUrl
function getAll(url){
    fetch(url)
    .then((r)=> {
        return r.json();
    })
    .then((data) => {
        let table = document.getElementById('table');
        data.forEach(d => {
            let tr = document.createElement('tr');
            let name = document.createElement('td');
            let lastName = document.createElement('td');
            let phone = document.createElement('td');
            name.textContent = d.nombre;
            lastName.textContent = d.apellido;
            phone.textContent = d.telefono;
            tr.appendChild(name);
            tr.appendChild(lastName);
            tr.appendChild(phone);
            table.appendChild(tr);
        })
    })
    .catch((e) => {
        console.log(`Error: ${e}`);
    });
}

// Store the data and send data on method POST
function storeData(data, url) {
    fetch(url, {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*'
        }
    }).then((r) => {
        console.log('Enviado');
    }).catch((e) => {
        console.log(`Error: ${e}`);
    });
}

