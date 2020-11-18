const date = new Date();
console.log(date);  // Wed Nov 18 2020 20:55:41 GMT+0900 (대한민국 표준시)

let date = new Date(0);
console.log(date);  // Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시

let date = new Date('2020/11/18/21:01:10');
console.log(date);  // Wed Nov 18 2020 21:01:10 GMT+0900 (대한민국 표준시)

alert(this === window)  // true, 호출자는 window

const caller = {
    f : function() {
        alert(this === window)
    }
}
caller.f(); // false, 호출자는 caller 객체

function nonStrictMode() {
    
    return this;
}

function strictMode() {
    'use strict'
    
    return this
}

console.log(nonStrictMode());   // window
console.log(strictMode());      // undefined
console.log(window.strictMode); // window