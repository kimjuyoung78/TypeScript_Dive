///////////void 타입/////////////
//값을 반환하지 않는 함수의 변환 타입

const hello: (msg : string) => string = msg => {
    return `Hello ${msg}`
}
hello('World!');
 

