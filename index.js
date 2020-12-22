//Question 1
// var str = '12345';
// console.log(str);
// var res = str.split("").reverse().join("");
// console.log(" new Value => "+res);

var numb= 12345;
    var name1 = numb.toString().split('').reverse().join('') 
 console.log("Orignal value => "+numb+" Reverse Value => "+name1);

//Question 2

  var name1="gamepitara";
  var name2=name1.charAt(0).toUpperCase()+name1.slice(1);
  console.log(name1);
  console.log(name2);
//Question 3
var myArray=[7,8,9,10];
console.log( myArray);
myArray.unshift('hello');
myArray.push('bye');
console.log( myArray);

//Question 4

console.log(typeof(typeof(1))); //String
//typeof(1) is number and typeof(number) is String


//Question 5
function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
console.log(romanize(9));

//Question 6
var hero={
  _name:'John Doe',
  getSecretIdentify:function(){
    return this._name;
  }
};
var stoleSecretIdentity=hero.getSecretIdentify;// Undefined is due to here the function is not defined with parnetheses
//Without parentheses you're not actually calling the function
console.log(stoleSecretIdentity());//undefined 
console.log(hero.getSecretIdentify());//John Doe


//Question 7
var num =4;                   //num=4 declare globly
function outer(){
  var num=2;                   //num=2 var declare localy for outer()
  function inner(){
    num++;
    var num=3;                 //num=3 var declare localy for inner()
    console.log(num);
  }inner();
}outer();                      // output =3  **num=3 var declare in inner() is shown



