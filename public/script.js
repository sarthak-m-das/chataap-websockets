const socket = io(window.location.origin)
console.log(window.location.origin)

const message = document.getElementById('message')
const n =document.getElementById('name')
const btn = document.getElementById('send')
const output = document.getElementById('output')
const answer = document.getElementById('answer')

btn.addEventListener("click", ()=>{
    socket.emit('message', {
        message: message.value,
        name: n.value
    });
    message.value ='';
  })

socket.on('message', (data)=>{
    answer.innerHTML ='';
    output.innerHTML += '<p><strong>' + data.name + ': </strong>' + data.message + '</p>';
})

