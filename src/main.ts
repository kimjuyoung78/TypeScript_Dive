function hello(msg: string) {//강한 문법을 적용하자 msg 선언은 에러가 떠서 바로 수정
    console.log(`Hello ${msg}?!`);
}
hello('world'); //true
//hello(123) //error 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
//hello(true) //error


//셋팅 순서
// npm i -D typescript
//tsconfig.json 
//package.json 파일에 scripts 부분 
//  "scripts": {
//     "tsc": "tsc src/main.ts"
//   },
//로 변경
// 터미널 명령어 : npm run tsc (해당 ts 파일을 js 파일로 생성해줌)