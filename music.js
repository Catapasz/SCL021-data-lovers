
export const playSound = function () {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
        <audio autoplay loop>s
          <source src="Harry Potter Theme Song.mp3" type="audio/mp3">    
        </audio>  `;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
  }
  document.addEventListener('click', playSound);