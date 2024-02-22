// costanti
const limit = 100;
const m3 = 3;
const m5 = 5;

// output
const myList = document.getElementById('my-list');

// ciclo
for(let i = 1; i <= limit; i++){
  if(!(i % m3) && (i % m5)){
    console.log('fizz');
    myList.innerHTML +=`
    <li class="my-square fizz">fizz</li>
    `;
  } else if((i % m3) && !(i % m5)){
    console.log('buzz');
    myList.innerHTML +=`
    <li class="my-square buzz">buzz</li>
    `;
  } else if(!(i % m3) && !(i % m5)){
    console.log('fizzbuzz');
    myList.innerHTML +=`
    <li class="my-square fizz-buzz">fizzbuzz</li>
    `;
  } else{
    console.log(i);
    myList.innerHTML +=`
    <li class="my-square my-element">${i}</li>
    `;
  }
}