function hello(msg) {
    console.log("Hello ".concat(msg, "?!"));
}
hello('world'); //true
//hello(123) //error 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
//hello(true) //error
