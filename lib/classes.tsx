/**
 * 处理class,拼接class
 */

 const scopedClassMaker=(prefix:string)=>{
     return function (name?:string){
         return [prefix,name].filter(Boolean).join('-');
     }
 }

 export {scopedClassMaker}