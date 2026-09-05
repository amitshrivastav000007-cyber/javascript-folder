// // let a =10;
// // {
// //     let a = 20;
// //     console.log("Inside:",a);
// // }

// // console.log("Outside:",a);
// // if(true){
// //     var a = 30;
// //     let b = 40;
    
// // }
// // console.log(a);
// // console.log(b);

// // let a = 9007199254740991n;
// // a + 3n

// // operators
// // 12 + 5 = 17
// // "12" + 5 = "125"

// // 12 - 5 = 7
// // "12" - 5 = 7

// // 12*5 = 60
// // 2**3 = 8(exponentiation operator)

// // 12/4 = 3

// // 12%4 = 0(remainder)


// // let a = 12;(assignment operator)
// // a+=5;
// // a-=1;
// // a*=2;
// // a%=3;
// // a/=2;



// // 12>13 ? console.log("true"): console.log("false")  -> example of tenary operator


// //                                      Questions
// // let x = 10;
// // let y = 20;

// // if (x > 5 && y < 25){
// //     console.log("a")
// // }
// // //a



// // let isAdmin = true;
// // let isloggedIn = false;
// // if ( isAdmin || isLoggedIn) {
// //     console.log("Access granted")
// // }    else {
// //     console.log("Access Denied")
// // }
// // // //Access granted


// // let temp = 35;
// // if (!(temp < 30)) {
// //     console.log("Hot")
// // } else {
// //     console.log("pleasent")
// // }
// // // //hot



// // let a = 0;

// // if (a) {
// //     console.log("Truthy");
// // } else {
// //     console.log("Falsy");
// // }
// // // //falsy



// // let score = 78;

// // let grade = score >= 90 ? "A" 
// //           : score >= 75 ? "B" 
// //           : score >= 60 ? "C" 
// //           : "Fail";

// // console.log(grade);
// // // //B


// // let points = 120;

// // let status = points > 100 ? "Gold" 
// //            : points > 50  ? "Silver" 
// //            : "Bronze";

// // console.log(status);
// // //Gold


// // let isLoggedIn = true;
// // let hasToken = false;

// // let access = (isLoggedIn && hasToken) ? "Granted" : "Denied";

// // console.log(access);
// // //Denied


// // let a = 5;
// // console.log(a++);
// // //5 (jab nxt time a aayega to 1 badh jayega)


// // let b = 7;
// // console.log(++b);
// // //8



// // let x = 3;
// // let y = x++;
// // console.log(x, y);
// // //(3 4)



// // let p = 4;
// // let q = ++p;

// // console.log(p, q);
// // //(4 5)


// // let m = 10;
// // let result = m--;

// // console.log(result, m);
// // //(9 10)



// // let n = 5;
// // let total = n++ + ++n;

// // console.log(total);
// // //12



// // let likes = 100;

// // function likePost() {
// //     return ++likes;
// // }

// // console.log(likePost());
// // console.log(likes);
// // //100
// // //101



// // let count = 5;

// // if (count-- === 5) {
// //     console.log("Matched");
// // } else {
// //     console.log("Not Matched");
// // }
// // //matched




// //control flow

// // if(LoggedIn && Admin){

// // }
// // else if(LoggedIn){

// // }
// // else{

// // }



// // switch(3) {
// //     case 1:
// //         break;
// //     case 1:
// //         break;
// //     case 3:
// //         console.log("jalwa h hamara")
// //         break;
// //     default:

// // }

// // function getval(val){
// //     if(val < 100) return "A";
// //     else if(val < 75) return "B";
// //     else if(val < 50) return "C";
// //     else return "D"
// // }
// // console.log(getval(76))


// //question
// // write a function getgrade(score) that:
// // - Take a student's marks (0 to 100)
// // - returns the grade based on this logic:
// // 90-100 A+
// // 80-89  A
// // 70-79  B
// // 60-69  c
// // 33-59  d
// // 0-32   fail
// // anything else  Iavalid marks


// // function getGrade(val){
// //     if(val >= 90 && val <= 100) return "A+";
// //     if(val >= 80 && val <= 89) return "A";
// //     if(val >= 70 && val <= 79) return "B";
// //     if(val >= 60 && val <= 69) return "C";
// //     if(val >= 33 && val <= 59) return "D";
// //     if(val >= 0 && val <= 32) return "Fail";
// //        return "Invalid marks";

// // }
// // console.log(getGrade(75))



// //rockpaperscissor

// //loops

// // for 
// // 1 - 100
// // for(i = 1; i<101; i++){
// //     console.log(i)
// // }


// // let i = 1
// // while(i<32){
// //     console.log(i);
// //     i++;
// // }


// // let i = 2
// // do{
// //     console.log(i);
// //     i++;
// // }
// // while(i<24){
// //     console.log(i)
// //     i++;
// // }

// // for(i = 1; i<100; i++){
    
// //     if(i === 32){
// //         continue;
// //     }
// // console.log(i);
// // }



// // for(i=10; i>0; i--){
// //     console.log(i);
// // }
// // let i = 10
// // while(i>0){
// //     console.log(i);
// //     i--;
// // }

// //question 3- print even numbers from 1 to 20 using for loop

// // for(i = 1; i<21; i++){
// //    if(i%2 === 0)
// //     console.log(i)
// // }

// //question 4-print odd number from 1 to 15 using while loop.

// // let i = 1;
// // while(i<16){
// //     if(i%2 === 1)
// //         console.log(i);
// //     i++;
// // }

// //question 5- print the multiplication table of 5(i.e 5 x 1 = 5  ... 5 x 10 = 50)

// // for(i=1; i<11; i++){
// //     console.log(`5 * ${i}= ${5 * i}`)
// // }


// //question 6- find the sum of numbers from 1 to 100 using loops.


// // sum = sum + i;
// // for(i = 1; i<101; i++){
// //     let sum = 0
    
// // }
// // console.log(sum)


// //question 7- print all the number between 1 to 50 that are divisible by 3.

// // for(let i = 1; i < 51; i++){
// //    if(i%3 === 0)
// //     console.log(i);
// // }


// //question 8- ask the user for a number and print wheather each number from 1 to that no. is even or odd.

// // val = prompt("give a number")
// // for(i = 1; i <= val; i++){
// //     if(i%2 === 0) {
// //         console.log(`${i} is even`);
// //     } else{
// //         console.log(`${i} is odd`);
// //     }
// // }

// //question 9- count hou many numbers between 1 to 100 which is divisible by 3 and 5 both.

// // for(i = 1; i < 101; i++){
// //     if(i%3 ===0 && i%5 === 0)
// //         console.log(i);
// // }




// // question 10- 
// // stop at first multiple of 7

// // write a loop from 1 to 100 that:
// //   . print each number 
// //   . stops completely when its find the first number divisible by 7

// // for(let i = 1; i<101; i++){
// //     console.log(i);
// //     if(i%7 === 0){
// //         break;
// //     }
// // }


// //question 11-skip multiples of 3

// //  write a loop from 1 to 20 that:
// // .  skips numbers divisible by 3
// // . prints all others

// // use continue

// // expected output:
// //1 2 4 5 7 8 10 11 ....(no 3, 6, 9, etc.)
// // for(let i = 1; i<=20; i++){
// //     if(i%3 === 0) continue;
// //     console.log(i);
// // }



// // question  12-  print first 5 odd no. only

// // write a loop from 1 to 100 that:
// // . print only 5 odd numbers
// // . then stops the loop 

// // use both if, continue, and a counter + break

// // expected output:
// // 1 3 5 7 9

// // let count = 0;
// // for(let i = 1; i < 101; i++){
// //     if(i%2 === 1){
// //         count++;
// //         console.log(i);
// //     }
// //     if(count === 5) break;
        
// // }
// // Q- 1 se 20 tak numbers print karo.
// // for(i = 1; i<21; i++){
// //     console.log(i);
// // }

// // Q2. Even Hunter
// // 1 se 50 tak saare even numbers print karo.
// //    for(i = 1; i<50; i/2){
// //     if(i%2 === 0)
// //         console.log(i);
// //    }

// // Q3. Sum Machine
// // 1 se 1000 tak sabhi numbers ka sum calculate karo.
// // let sum = 0
// // for(i = 1; i<1001; i++){
// //     sum = sum + i
// // }
// // console.log(sum);


// //Q4. Reverse Countdown
// //User se N input lo aur N se 1 tak reverse counting print karo.
// //  val = prompt("give a number")
// //  for(i = 7; i>0; i--){
// //    console.log(i); 
// //  }


// //Q5. Multiplication Master
// //User se ek number N lo aur uska multiplication table 1 se 10 tak print karo.
// // val = prompt("Enter a number")                              <= galat logic 
// // for(i = 1; i<71; i++){
// //     if(i%7 === 0)
// //     console.log(i);
// // }

// // let n = Number(prompt("Enter a number:"));
// // for (let i = 1; i <= 10; i/2) {
// //     console.log(n * i);
// // }
// // 
// //                     Functios


// // function dance(v1) {
// //     console.log(`${v1} nach raha h`)
// // }
// // dance("gadha");
// // dance("ghoda");
// // dance("lawda");
// // dance("kutta");
// // dance("tatti");
// // dance("ojhaa");
// // dance("munni");
 
// // function add(v1, v2){
// //     console.log(v1 + v2)
// // }
// // add(1,2); 



// // function abcd(a, b, c, ...val){
// //   console.log(a, b, c, val);
// // }
// // abcd(1, 2, 3, 4, 5, 6, 7);



// // function add(v1, v2){
// //     console.log(v1 + v2)
// // }
// // add(1,2); 



// // function abcd(a, b, c, ...val){
// //   console.log(a, b, c, val);
// // }
// // abcd(1, 2, 3, 4, 5, 6, 7);


// // returns and early returns

// // function abcd(v1){
// //   return 12 + v1;
// // }


// // let val = abcd(23);
// // console.log(val);

// // function abcd(val){
// //  val();
// // }
// // abcd(function(){
// //         console.log("chale ja bsdk")
// // });


// // function abcd(){
// // return function(){
// //     console.log("bhed ke lodo")

// // }
// // }
// // abcd()();

// // let a = 12;
// // function abcd(){
// //     console.log("balle balle ");
// // }
// // abcd();

// // let a = 12;
// // function hui(){
// // a++;
// // }
// // hui();  


// // (function(){
// // console.log("heyey");
// // })();


// //questions

// // function multiply(a,b) {
// //     return a * b;
// // }
// // // convert this function into fat arroe function
// // let multiply = (a, b) => {
// //   return a * b;
// // }

// // Q-2)  
// // use rest parameter to accept any number of scores and return the total.

// // function  getscore(...score){
// //     let total = 0
// //     score.forEach(function(score){
// //         total = total + score

// //     })
// //     return total;
// // }
// // console.log(getscore(10, 12, 14, 16));


// // write a bmi calculator.

// // function bmi(weight, height){
// //     return weight / (height * height);

// // }
// // console.log(bmi(48,1.6).toFixed(2))



// // reuseable discount calculator

// // function discountcalculator(discount){
// //     return function(price){
// //       return price - price * (discount / 100);
// //     }
// // }
// // let ten = discountcalculator(10);
// // let twenty = discountcalculator(20);
// // console.log(ten(300))


// // function counter() {
// //     let count = 0;
// //     return function() {
// //         count++;
// //         return count;
// //     };
// // }
// // let c = counter();
// // console.log(c());
// // console.log(c());
// // console.log(c());
// // console.log(c());
// // let d = counter();
// // console.log(d())
// // console.log(d())
// // console.log(d())
// // console.log(d())
// // console.log(c())



// // arrays

// // let arr =[11 ,22, 33,34, 5]
// // let newarr = arr.map(function(val){
// //     if(val>5) return val;
// // });

// // let arr =[1,2,3,4,5,6,7,8,9,9,10]
// // let newarr = arr.filter(function (val){
// //     if (val>5) return true;
// // });


// // let arr =[11 ,22, 33,34, 5]
// // let ans = arr.reduce(function (accumultor, val){
// //     return accumultor + val;
// // }, 0);

// // let arr = [10,23,40,89,90]
// //   let amit = arr.every(function(val){
// //     return val > 9;
// //   });



// // let arr = [1, 2, 3, 4, 5]
// // let [a, b, , c] = arr; 

// // let arr = [1, 2, 3, 4, 5, 6, 7 ,8 ,9];
// // let arr2 = [...arr];


// // use .map() to square each number:
// // let arr = [1, 2, 3, 4];
// // let newarr = arr.map(function(val){
// //     return val*val;
// // });


// // use .filter() to keep number greater than 10:

// // let arr = [1, 12, 32, 3, 43, 22, 2, 222]
// // let newarr = arr.filter(val => {
// //     return val > 10
// // });



// // use.reduce() to find the sum of this array:
// // let arr = [10, 20, 30]
// // let newarr = arr.reduce(function(acumulator, val){
// //     return acumulator + val;
// // }, 0);

// // use .find() to get the first number less than 10:
// // let arr = [7, 9, 21, 23,34]
// // let newarr = arr.find(function(val){
// //     return val < 10
// // });


// // use .some to check if any student has scored below 35:
// // let arr = [23, 36, 70, 99, 100]
// // let newarr = arr.some(function(val){
// //     return val < 35;
// // });



// // us .every() to check  if all the numbers are even:
// // let arr = [23, 36, 70, 99, 100]
// // let newarr = arr.every(function(val){
// //     return val%2 === 0
// // });


// // destructure this array to get first name and last name:
// // let fullname = ["Amit" , "Shrivastav"];
// // let [firstname, lastname] = fullname;

// // merge two operators usnig spread operator:
// // let a = [1, 2];
// // let b = [2,3];
// // let c = [...a, ...b]


// // add "india" to start of this array using spread: 
// // let countries = ["usa" , "uk"]
// // countries = ["india" , ...countries];



// // let obj = {
// //     Name: "amit",
// //     age: 18,
// //     email: "amitshrivastav00007@gmail.com",

// // };
// // Object.keys(obj)

// // for(let key in obj){
// //     console.log(key, obj[key]);
// // }





// // let obj = {
// //     Name: "amit",
// //     age: 18,
// //     email: "amitshrivastav00007@gmail.com",

// // };
// //  let obj2 = {...obj}
// // obj2.Name ="shrivastav"



// // const obj = {
// //     name: "harsh",
// //     address: {
// //         city: "bhopal",
// //         pin: 462001,
// //         location: {
// //             lat: 23.2,
// //             lng: 77.4,
// //         },
// //     },
// // };
// // let obj2 = JSON.parse(JSON.stringify(obj));
// // obj2.address.city = "delhi"
// // obj2.address.pin = 110018


// // let role = "admin";

// // let obj = {
// //     name: "amit",
// //     age: "18",
// //     email:"amitshrivastav00007@gmauil.com",
// //     address: {
// //         city: "delhi",
// //         pin: 110018
// //     },
// //     [role]: "amit",

// // }


// //create an object for student with name, age, and isEnrolled.
// // let obj = {
// //     name: "amit",
// //     age: 18,
// //     isEnrolled: "true",
// // };



// // can an object key be a number or boolean? try this
// // const obj = {
// //     true: "yes",
// //     43: "answer",
// // };
// // console.log(obj[43]);/


// // access the value of "first-name" from this object:
// // const user = {
// //     "first-name": "harsh",
// // };
// // user["first-name"];


// //give a dynamic key let key ="age" , how will you access[key]?
// // let key = "age"
// // const user = {
// //   age: 18,
// // };

// //from the object below, print the latitude:
// // const locations = {
// //     city: "bhopal",
// //     coordinates: {
// //         lat: 23.2,
// //         lng: 77.4
// //     },
// // };
// // locations.coordinates.lat

// // const locations = {
// //     city: "bhopal",
// //     coordinatos: {
// //         lat: 23.2,
// //         lng: 77.4
// //     },
// // };
// // locations?.coordinates?.lat

// // destructure the city and lat from the location above.
// //from the object below, print the latitude:
// // const locations = {
// //     city: "bhopal",
// //     coordinates: {
// //         lat: 23.2,
// //         lng: 77.4
// //     },
// // };
// // let { city } = locations;
// // let { lat } = locations.coordinates;



// //destructure the key "first-name" as a variable called firstName.

// // const user = {
// //     "first-name": "harsh",
// // };

// // let { "first-name": firstName } = user;




// // use object.entries() to print all key-value pairs as:
// // title:"javaScript"
// //duration: "4 weeks"
// // const course = {
// //     title:"javaScript",
// //     duration: "4 weeks",
// // };



// // Object.entries(course).forEach(function(val){
// //     console.log(val[0] +":" + val[1])
// // });













// ////                                            3   documnets object model(dom)

// // let h1 = document.querySelector("h1")

// // console.dir(h1);
// // h1.hidden = "true"


// // let h1 = document.querySelector("h1")
// // console.dir(h1)
// // h1.innerHTML =  "<i>bhaiya vastegane huiye</>"



// // let a = document.querySelector("a");
// // a.href = "https://www.google.com"
// // console.log(a.getAttribute("href"));


// // let a = document.querySelector("a");
// // a.setAttribute("href", "http://www.google.com");




// // create elements 
// // append/prepend karo jaha bhi element chahiye waha 

// // let h1 = document.querySelector("h1");
// // h1.textContent = "chacha vaste gune hui ye";
// // document.querySelector("body").prepend(h1);
 

  

// // T1: select the heading of a page by ID and change its text to "welcome to the sheryians!".
  
// // let heading = document.querySelector("#heading");
// // heading.textContent = "welcome to sheryians!"

// // select all <li> elements and print their text using loop
// // let lis = document.querySelectorAll("li");
// //  lis.forEach(function(val){
// //     console.log(val.textContent);
// //  });

// // let lis = document.querySelectorAll("li");
// // for(i = 0; i<lis.length; i++)
// //     console.log(lis[i].textContent);


// // // select a paragraph and replace its content with: 
// // {
// //     /* <b>updated</b> by javaScript */
// // }

// // let p = document.querySelector("p");
// // p.innerHTML = " <b>updated</b> by javaScript "


// // how do you get the src of an image uusing javascript
// //let img = document.querySelector("img")
// // console.log(img.getAttribute("src"));
// //console.log(img.src);



// // what does setAttribute() do ?
// // document.querySelector("img").setAttribute("src", "https://images.unsplash.com/photo-1787419079181-30eb9748e338?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");


// //href ko update karo
// // let a = document.querySelector("a");
// // a.href = "https://www.google.com"


// //add a title attribute to a div dynamically
// // let div = document.querySelector("div");
// // // div.title = "some info"
// // div.setAttribute("title", "some info");


// // create a new list item <li>New Task</li> and add it to the end of a <ul>.

// // let ul = document.querySelector("ul");
// // let li = document.createElement("li")
// // li.textContent = " New Task"
// // ul.appendChild(li);



// // create a new image element with a placeholder source and add it at the top of a div.
// // let img = document.createElement("img");
// // img.setAttribute("src" , "https://imgs.search.brave.com/0Q9vvE9CpSQY_6kXOtbCPYqNPKL-_Fhz9EHitfMJupI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXZlY3Rvci9kZWZh/dWx0LXVpLWltYWdl/LXBsYWNlaG9sZGVy/LXdpcmVmcmFtZXMt/MjYwbnctMTAzNzcx/OTE5Mi5qcGc");
// // img.classList.add("placeholder");
// // document.querySelector("div").prepend(img);





// // // add ahighlight class to every even itemm in a list.
// // let li = document.querySelectorAll("ul li:nth-child(2n)");
// // li.forEach(function(elem){
// //     elem.classList.add("highlight");
// // });



// // let p = document.querySelector("p");

// // p.addEventListener("click",function(){
// //     p.style.color = "green";
// // });



// // let p = document.querySelector("p");
// // function dblclick() {
// //     p.style.color = "yelow";
// // }
// // p.addEventListener("dblclick", dblclick);
// // p.removeEventListener("dblclick",dblclick);

// // let inp = document.querySelector("input");
// // inp.addEventListener("input", function(detl){
// //     if(detl.data !== null) {
// //         console.log(detl.data);
// //     }
// // });

// // let sel = document.querySelector("select");
// // let Device = document.querySelector("#Device");

// // sel.addEventListener("change", function(dets){
// //     Device.textContent = `${dets.target.value} device selected`;
    
   
// // });





// // let h1 = document.querySelector("h1");

// // window.addEventListener("keydown", function(dets) {

// //     if (dets.key === " ") {
// //         h1.textContent = "spc";
// //     } else {
// //         h1.textContent = dets.key;
// //     }

// // });

// // let btn = document.querySelector("#btn");
// // let fileinp  = document.querySelector("#fileinp");
// // btn.addEventListener("click", function(){
// //     fileinp.click();
// // });

// // fileinp.addEventListener("change", function(dets){
// //      const file = dets.target.files[0];
// //      if(file) {
// //          btn.textContent = file.name;
// //      }
// // });


// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     let card = document.createElement("div");
//     card.classList.add("card");
    
//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;

//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;

//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;


//     profile.appendChild(img);
//     card.appendChild(profile);
    
    
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);
//     main.appendChild(card);
    

//     inputs.forEach(function (inp) {
//         if(inp.type !== "submit") {
//             inp.value = "";
//         }
//     });
// });


// let main = document.querySelector("#main");
// main.addEventListener("mouseover", function(dets){
//     main.style.backgroundColor = "yellow";
// });
// main.addEventListener("mouseout", function(dets){
//     main.style.backgroundColor = "red";
// });


// let main = document.querySelector("#main");
// window.addEventListener("mousemove", function(dets){
//     main.style.top = dets.clientY + "px";
//     main.style.left = dets.clientX + "px";
// });


// let main = document.querySelector("#main");
// let button = document.querySelector("button");
// button.addEventListener("click", function(dets){
//     alert("clicked");
// });
// let main = document.querySelector("#main");
// main.addEventListener("click", function(dets){
//     dets.target.classList.toggle("lt");  
// });


let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function(dets){
    let left = 20 - dets.target.value.length;
    span.textContent = left;
     if (left < 0) {
        span.style.color = "red";
     }  else {
        span.style.color = "black";
     }
});