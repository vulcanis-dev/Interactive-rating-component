
//from what i understand youre replacing the forms default submit with this function
// so when you click submit you want to display a thank you image and a message and then remove the inputs? 
// and then show the user what number they selected? 

//in the first section you create all the elements you want to show
// this is fine and works however if you imagine this is a much more busy page the more functionality, this would become very slow and potentially 
// cause a lot of page artifacts.
// A better solution would be to declare all of this in your html and css and simple set display to none, then in your submit function you can 
// set your display to block and it will show up. that means whilst youre working you can make it look how you want more easily around all your other 
// elements.
// To prevent Default of Form submission
document.querySelector('#myForm').addEventListener('submit', (e) => {

  e.preventDefault();

  console.log('Form has been submitted!');

//Creating & styling Dom Elements
    const background = document.querySelector('#results') //background is a bit of an ambiguous name for this variable, results would make more sense as thats what youre selecting
    background.style.opacity = '1';
    const image = document.createElement('img')
    image.src = 'illustration-thank-you.svg'
    document.querySelector('.box-container').appendChild(image)
    image.style.position = 'relative';
    image.style.bottom = '280px';
    const box = document.querySelector('.box-container');
    box.style.gridTemplateRows = '190px';
    const Heading = document.querySelector('#Heading');
    Heading.innerText = 'Thank you!';
    Heading.style.position = 'relative';
    Heading.style.top = '150px';
    Heading.style.left = '5px';
    const p2 = document.querySelector('.sentence-1');
    p2.style.postion = 'relative';
    p2.style.top = '60px';
    p2.style.left = '10px';
    
    //your text will automatically wrap and fit to its container, however your line breaks may be inconsistent across devices and windows size
    // so you should rely on your styling to format the text instead
    //inserting innerText into Dom
   const p = document.querySelectorAll('.sentence-1');
    p[0].innerText = `We appreciate you taking the time to give a \n Rating. If you ever need more support, don’t \n \u00a0 \u00a0 \u00a0 \u00a0  \u00a0  \u00a0  \u00a0 \u00a0  \u00a0   hesitate to get in touch! `

// Removing elements
const inputs = document.querySelectorAll('input');
inputs.forEach(Element => Element.remove());

const starid = document.querySelectorAll('.star');
starid.forEach(Element => Element.remove());

const circle = document.querySelectorAll('.circle');
circle.forEach(Element => Element.remove());

const label = document.querySelectorAll('label');
label.forEach(Element => Element.remove());
});

//if you changed your button classes to match his query could be on that class, and then you could also remove your name properties from the inputs
// for Displaying number rating from 1 - 5
const btn = document.querySelector('.submit')
    const radioButtons = document.querySelectorAll('input[name="number"]');
    btn.addEventListener('click', () => {
      let selectedNumber;
      for ( const radioButton of radioButtons) {
        if (radioButton.checked) {
          selectedNumber = radioButton.value;
          break;
        }
      }
      results.innerText = selectedNumber ? `You have selected ${selectedNumber} out of 5` : ``;
        
    });
