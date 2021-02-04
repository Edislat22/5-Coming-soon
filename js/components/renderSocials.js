function renderSocials(data) {
   let HTML = '';
   for (let i = 0; i < data.length; i++) {
       const socialObject = data[i];
   
       HTML += `<a href="${socialObject.href}" target="_blank" class="fa fa-${socialObject.icon}"></a>`;
   }

   console.log(HTML);
}

export { renderSocials }