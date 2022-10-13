const forms = document.getElementById('form');
const nemInput = document.querySelector('#neym');
const button = document.querySelector('#submitt');

 let users = []
 const addUser = (ev) => {
    console.log('hey')
    let user = {
        name : document.getElementById('neym').value,
        age : document.getElementById('ageU').value,
        phoneNumber : document.getElementById('telnum').value,
        email : document.getElementById('emailInput').value,
        passw : document.getElementById('password').value,
        coursesA : document.querySelector('#courseA').value,
        coursesB : document.querySelector('#courseB').value

     }
    ev.preventDefault();
    
users.push(addUser);
document.forms[0].reset();
console.log('added', {users});
    }



// dont change this
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitt').addEventListener('click', addUser);
});
forms.addEventListener('submit', (e) => {
   e.preventDefault();
});

