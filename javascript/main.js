
let request = new XMLHttpRequest(); 
request.open('GET', 'https://amandeepsin.github.io/A3-Javascript/datafile.json')
request.responseType='json';
request.send();

request.onload = function() {
	
  let array = request.response['array'];
  
  for (let i = 0; i < array.length; i++) {  
    let box = document.createElement('div');
    let image = document.createElement('img');
	image.setAttribute('src', array[i].imagePath);
	box.appendChild(image)
    let mainTitle = document.createElement('h1');
	mainTitle.textContent = array[i].name;
	box.appendChild(mainTitle);
    let price = document.createElement('h4');
    price.textContent = '$' + array[i].price;
	box.appendChild(price);
	let description = document.createElement('p');
    description.textContent = array[i].description;
    box.appendChild(description);
    document.body.appendChild(box); 
     
  }
  
}