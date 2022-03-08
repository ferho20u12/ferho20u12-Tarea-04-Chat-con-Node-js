//const { response } = require("express");

//const message document.querySelector('#message')
const url = 'http://localhost:3000/'
//const url ='myapp/app.js'

document.getElementById("bttnR").onclick = function () 
{
    fetch(url+"get",
    {
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("message").innerText = data 
    })
};
document.getElementById("bttn").onclick = function () 
{
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({username: document.querySelector('#inputMessage').value}), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
          console.log(data)
      })
    
};
