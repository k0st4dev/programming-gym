/* //1. problem FizzBuzz
for(let a=1;a<=100;a++){
  if((a%3===0)&&(a%5===0)){
    console.log("FizzBuzz");
  }else if(a%3===0){
    console.log("Fizz");
  }else if(a%5===0){
    console.log("Buzz");

  }
  else console.log(a);

}
*/

/*//2. problem
for(let a=1;a<=50;a++){
  if((a%4===0)&&(a%6===0)){
    console.log("EvenBuzz");
  }else if(a%4===0){
    console.log("Even");
  }else if(a%6===0){
    console.log("Buzz")
  }
    else {
    console.log(a);
  }
}
*/


//Problem 3

function zbir(n) {
  let tmp=0;
  for (let a=1;a<=n;a++){   
    tmp+=a;
  }
  return tmp;
}
