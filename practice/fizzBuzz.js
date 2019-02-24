function fizzBuzz(num) {
  var fizz = "Fizz",
      buzz = "Buzz",
      i = 1;
      
  for (i; i <= num; i+=1) {
    if(i % 3 === 0 && i % 5 === 0) console.log(fizz+buzz);
    else if (i % 3 === 0) console.log(fizz); 
    else if (i % 5 ===0) console.log(buzz);
    else console.log(i);
  }
}

fizzBuzz(1459);
