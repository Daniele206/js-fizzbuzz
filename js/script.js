// costanti
const limit = 101;
const m3 = 3;
const m5 = 5;

// ciclo
for(let i = 1; i < limit; i++){
  if(!(i % m3) && (i % m5)){
    console.log('fizz');
  } else if((i % m3) && !(i % m5)){
    console.log('buzz');
  } else if(!(i % m3) && !(i % m5)){
    console.log('fizzbuzz');
  } else{
    console.log(i);
  }
}