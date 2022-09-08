
// To prevent Default of Form submission
document.querySelector('#myForm').addEventListener('submit', (e) => {

  e.preventDefault();

  console.log('Form has been submitted!');

//Creating & styling Dom Elements
    const background = document.querySelector('#results')
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
