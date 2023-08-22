import './toggle-mode.js'
// dark mode - true    starts the app this way
// light mode - false 
let CurrentMode = true

const button_mode = document.getElementById('toggle-mode');

button_mode.addEventListener('click' , swap_mode)

function swap_mode(event){
  //when this event happen the actual click will change the name just read by acessibility
  document.querySelector('html').classList.toggle('light')

  const check_mode = CurrentMode ? `Modo Dark ` : `Modo Light`
  
  event
  .currentTarget
  .querySelector('span')
  .TextContent = `${CurrentMode} ativado`;

  CurrentMode = !CurrentMode;  // cuz if you click on it go to next img and function  (add or remove the ClasList)
}