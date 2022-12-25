// // // js variable start here
// var a = 10;
// console.log(a);
// var a = "axioned";
// console.log(a);
// let b = 25;
// console.log(b);
// // let b = "jhon";
// const c = 45;
// console.log(c);
// // const c = "ram";
// var x = 10;
// console.log(y);
// {
//   console.log(x);
//   var y = 20;
//   console.log(y);
// }
// // js variable end here

// scope  start here
// let var1 = "sneha";
// var var2 = "sneha again";
// console.log(window.var1 ,window.var2);
// var ab = "ramesh";
// console.log(ab);
// console.log(bc);
// {
//   console.log(ab);
//   var bc = "sam";
//   console.log(bc);
//   var varFun=()=>console.log(ab,bc);
//   varFun();
// }

// let ab = "ramesh";
// console.log(ab);
// // console.log(bc);
// {
//   let ab = "sam",
//    bc ="suresh";
//   console.log(ab,`im ${bc}`);
//   var varFun=()=>console.log(ab,bc);
//   varFun();
// };
// scope  end here

// function scope and scope chain start here
// let ab = `im global`;
// console.log(ab);
// // console.log(bc);
// {
//   let bc ="im inside block";
//   // console.log(ab,`im ${bc}`);
//   console.log(ab,`im ${bc} with ${ac}`);
//   var varFun=()=>{
//     let ac = "im inside function scope"
//     console.log(ab,`im ${bc} with ${ac}`);
//   }
//   varFun();
// };
// function scope and scope chain end here

// lexical scoping start here
// let lexiParent=()=>{
//   let xy = "im parent";
//   console.log(xy);
//   // console.log(yz);
//   let lexiChild = ()=>{
//     let yz = `im child of lexiparent`;
//     console.log(yz);
//     console.log(xy);
//     console.log(abc);
//     let lexiChild2 = ()=>{
//       let abc ="im nested child";
//       console.log(xy,yz,abc);
//     }
//     lexiChild2();
//   }
//   lexiChild();
// };
// lexiParent();
// lexical scoping end here

// hoisting start here

// // console.log(host);
// // var host = "im hoisting";
// // // console.log(host);

// hostTest();
// // console.log(hostTest);
// function hostTest(){
//   var hostAgain = "im inside hoisting function";
//   console.log( hostAgain);
// };

// // console.log(expressionFun);
// // expressionFun();
// // var expressionFun = function (){
// //   console.log("im inside expression function");
// // }

// // console.log(expressionFun2);
// // expressionFun2();
// // var expressionFun2 = ()=>{
// //   console.log("im inside expression function");
// // }

// hoisting with let and const
// console.log(variable);
// let variable = "im hoisting";
// {
//   console.log(varBloc);
//   let varBloc = "im inside block hoisting"
// }

// console.log(expressionFun);
// expressionFun();
// let expressionFun = function (){
//   console.log("im inside expression function");
// }

// console.log(expressionFun2);
// expressionFun2();
// let expressionFun2 = ()=>{
//   console.log("im inside expression function");
// }
// hoisting end here
