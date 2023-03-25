//Print odd numbers in ina an array in anonymous function and using template literals
//Anonymous function
var number=function([num]){
    num=[111,22,33,22];
    for(var i=0;i<num.length;i++){
  
        if(num [i]%2 !=0){
          console.log(`The odd numbers ARE ${num[i]}`)
        }
    }
   }([]);
   //IIFE
(function odd(num){
    for(var i=0;i<num.length;i++){
        if(num[i]%2!=0){
            console.log(`The odd numbers ARE ${num[i]}`)
        }
    }
})   ([2,3,4,5])
//Print odd numbers in array functions\
//Arrow function
var odd=([num]) =>{
   num=[44,55,99,33,22];
    console.log(`The given numbers are ${num}`);
    for(var i=0;i<num.length;i++){
        if(num[i]% 2!=0){
    console.log(`The odd number for the given number is  ${num[i]}`);
        }}
}
([]);
//Title uppercase
//Anonymous fucntion
var titlecaps=function(String){
    str=String.split("");
    for(var i=0;i<str.length;i++){
        str[i]=str[i][0].toUpperCase()+str[i].slice(1);
        console.log(str.join(""));
    }
    
}("hello");
//IIFE
(function title(String){
    str=String.split("");
    for(var i=0;i<str.length;i++){
        str[i]=str[i][0].toUpperCase()
    }
console.log(str)
})("Arun")
//Arrow function
var caps=(op)=>{
    myop=op.split("");
    for(var i=0;i<myop.length;i++){
        myop[i]=myop[i][0].toUpperCase()+myop[i].slice(1);
        
    console.log(myop.join(""));
}
    }
("hii");
//Sum of all numbers in an array
//Anonymous
var arr=[1,2,3]
var sum=function(a,b,c){
    return a+b+c;
}
console.log(sum(...arr));

//IIFE
var num=[12,2,3];
 (function sum(a,b,c){
    return a+b+c;
    console.log(sum(...num))
 }) ([12,3,3])
//Arrow function
 var n=[1,2,3];
 var sum=(a,b,c)=>{
    return a+b+c;
 }
 console.log(sum(...n))

 //remove duplicates
 //Anonymous fucntion
 var fruits=["apple","mango","banana","mango"];
 var fruit=function(){
    return Array.from(new Set(fruits));
 }
 console.log(fruit());

 //IIFE
 (function op(arr){
    return Array.from(new Set (arr));
    console.log(arr);
 })(["hii","hello","hii"])
 //Arrow function
 var name=["Arun","Ram","Raj","Raj"];
 var duplicate=(name)=>{
    return Array.from(new Set(name));
 }
 console.log(duplicate(name));

 //prime number
 var num=[1,2,3,4];
var prime=function(number){
    if(number<2){
        return false;
    }
    for(var i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
          return false;
        }
        
           
    }

    return true;
;}

var primes = num.filter(prime);

console.log(primes);

//IIFE
var num=[1,2,4,5]
var primenum=num.filter(function isprime(number){
    if(number<2){
        return false;
    }
    for(var i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
   
})

console.log(primenum);

//Arrow function
var arr=[11,2,4,55];
var primenumber=(number)=>{
    if(number<2){
        return false;
    }
    for(var i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}
var primenumbers=arr.filter(primenumber);
console.log(primenumbers);

var nam="Arun";
var n=nam.replace("SsS");
console.log(n)