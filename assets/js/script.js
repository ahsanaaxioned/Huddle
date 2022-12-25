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

// scope and scope chain start here
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



















