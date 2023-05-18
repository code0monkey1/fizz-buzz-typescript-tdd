const fizzBuzz=(input:number)=>{
  let result=''
 
  if(input%3===0&&input%5===0){
    result= "FizzBuzz";
  }
  else if(input%3===0){
    result= "Fizz"
   }
  else if(input%5===0){
     result= "Buzz"
   }

  if(isPrimeNumber(input))
    result+= "Wizz"
   
 
  return (!result)?input:result;

 }

export const isPrimeNumber = (input:number)=>{
  
   if(input<=1 || input%1 )return false

  for(let i=2;i<=Math.sqrt(input);i++){
    if(input%i===0){
      return false;
    }
  }
  return true;
}

export default fizzBuzz;