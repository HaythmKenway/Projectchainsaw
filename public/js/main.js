const chatforms=document.getElementById('chat-form');
const socket=io();

socket.on('message',message=>{
  console.log(message);
  outputMessage(message);
});

chatforms.addEventListener('submit',e=>{
  e.preventDefault();
  const msg=e.target.msg.value;
  e.target.elements.msg.value=' ';
  e.target.elements.elements.msg.focus();
  socket.emit('chatmessage',msg);

});

function outputMessage(message){
  document.createElement('div');

}