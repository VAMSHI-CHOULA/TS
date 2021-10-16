// function foo(c:number,b:number){
//                console.log("Hey this is inside the block");
//                return c+b;
//              }
//              console.log(foo(10,10));
/*This is the reason Javascript is Interpreted Language*/
/* var x;
console.log(x);
x=10; */
function foo(a, b) {
    console.log("It may be Inside the function declaration");
    return a + b;
}
//function declaration
console.log(foo(10, 20));
// console.log(foo(10,20));
var bar = function (c, d) {
    return c + d;
};
//function expression
console.log(bar("Vamshi", "Choula"));

/* position:fixed
position:absolute
position:relative */
/* 1.
What are closures into javascript?
2. */


