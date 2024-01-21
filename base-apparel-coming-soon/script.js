const btn = document.querySelector('.input__btn');
const input = document.querySelector('input');
const message = document.querySelector('.input__message');

function submit() 
{
  if(input.value === "" || !input.value.includes('@')) {
    message.innerText = "Please provide a valid email";
    message.style.display = 'flex';
    input.style.borderColor = 'hsl(0, 93%, 68%)';
    input.style.background = "url('images/icon-error.svg') calc(100% - 60px) center no-repeat";
  }
  else {
    message.style.display = 'none';
    input.style.borderColor = 'hsl(354, 15%, 87%)';
    input.style.background = 'none';
    input.value = "";
  }
}

btn.onclick = submit;