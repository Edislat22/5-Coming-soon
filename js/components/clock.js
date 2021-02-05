function clock(selector) {
   const DOM = document.querySelector(selector);
   const numbers = [432, 9, 37, 39];
   const labels = ['days', 'hours', 'minutes', 'seconds'];
   let HTML = '';

   for (let i = 0; i < 4; i++) {
       HTML += ` <div class="time">
                   <div class="value">${numbers[i]}</div>
                   <div class="label">${labels[i]}</div>
          </div>`;
   }

   DOM.innerHTML = HTML;
}

export { clock }