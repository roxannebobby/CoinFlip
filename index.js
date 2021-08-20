function flip(repeat){
  var countHeads = 0;

for (let i = 0; i < repeat; i++){

var coinFlip = Math.round(Math.random());

if (coinFlip === 1){
  console.log('The flip reveals', 'heads', '.');
  countHeads = countHeads + 1;
}

if (coinFlip === 0){
  console.log('The flip reveals', 'tails', '.');
    }
  }

  return(countHeads/repeat);
}
flip(100);