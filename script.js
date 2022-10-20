let submitBtn = document.getElementById('submitt');
let num = 0;
submitBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    let clients = localStorage.getItem('clients')
    clients = JSON.parse(clients)
    if (clients == null){
        clients = [];
    }
    let data = JSON.stringify({
        Name : document.getElementById('neym').value,
        Age : document.getElementById('ageU').value,
        Phone : document.getElementById('telnum').value,
        Email : document.getElementById('emailInput').value,
        Passw : document.getElementById('password').value,
        Course : document.querySelector('input[name=Course]:checked').value
    });
    clients.push(data)
    let dataStorage = localStorage.setItem('clients', JSON.stringify(clients));
    console.log(dataStorage);
});
console.log(localStorage.getItem('clients'))