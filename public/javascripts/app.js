const port = document.URL;

document.getElementById("bttnR").onclick = function () 
{
    fetch(port+"get",
    {
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("message").innerText = data 
    })
};
document.getElementById("bttn").onclick = function () 
{
    fetch(port, {
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
