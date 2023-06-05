
    // Create a function that will be able to convert figures from Fahrenheit to Celsius.
 

    function ftoc(farenheit) {
        var fTemp=farenheit
        var ftoc=(fTemp-32)*5/9
                var message= fTemp+'\xB0F is' + ftoc +'\xB0C'
        console.log(message);}
        ftoc(40);



        //Create a function that will calculate the average of numbers in an array
        function average(average)
        {const arr=[7,8,9,3,];
        var sum=0;
        for (var number of arr)
        [sum +=number];
        average=sum/arr.length;
        console.log(average);}
        average(6.75);
        
        //Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
        { var n=25
        var x=5
        var y=2
        if(n%x==0)
        [console.log("n is divisible by x")];
        else[console.log("n is not divisible by x")];
        if(n%y==0)
        [console.log("n is divisible by y")];
        else[console.log("n is not divisible by y")];}
         //Create a function that will output the first 100 prime numbers.
         const getFirst100Primes=()=>{
            const primes=[];
            let num=2;
            while (primes.length<100){
                if(isPrime(num)){
                    primes.push(num);
                }
                num++;
            }
            return primes;
         }
         const isPrime=(num)=>{
            if (num===2){
                return false;
            }
            for (let i=3;i<=Math.sqrt(num);i +=2){
                if (num%i===0){
                    return false;
                }
            }
            return true;
         }
         const first100primes=getFirst100Primes();
         console.log(first100primes);

         //Create a function that will return a boolean specifying if a number is a prime number. 
          function isprime(num){
            if (num===0 || num===1)return false;
            for (let i=2;i<=Math.sqrt(num);i++){
                if(num%i===0) return false;
            }
                
             return true;}
               console.log( isprime(17));
               isprime(true);
               
               //Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers. 
                 var numbers = [1, -1, 8, -7, 3, -3, 6, -4, 5, -5];
                  var positiveNumbers = numbers.filter(function(element) {
               return element > 0;
                });
                 console.log(positiveNumbers);
                 isprime(1,8,3,6,5);

 //Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz". 
{
for(let i=0;i<100;i++) {

        if (i%3==0 && i%5==0)
        { console.log("FizzBuzz"+", ");			
	}else if(i%3==0){
		 console.log("Fizz"+",");			
                    }
       else if (i%5==0){ console.log("Buzz"+", ");			
	}
       
       else{
     console.log(i+",");
    }
    }
};
//The marketing team is spending way too much time typing in hashtags. Let’s 
//create a hashtag generator for them, our hashtag generator will meet the following criteria; 
//● It must start with a hash symbol, #. 
//● Ignore all spaces in the input. 
//● All words must have their first letter capitalized.
//● If the final result is going to be longer than 140 characters, it should return false. 
//● If the input or result is an empty string, it should return false.

function makeHashtag (str) {
  let wordArray = str.split(' ').filter(char => char !== "");
  let result = "#";
  
  if (wordArray.length === 0) {
    return false;
  };
  
  result = result + wordArray.map(word => {
    let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;
  }).join('');
  
  if(result.length > 140) {
    return false;
  } else{
    return result;
  };
};
console.log(makeHashtag("itiswell"));
makeHashtag("#itiswell");



            
        
        

        
        
