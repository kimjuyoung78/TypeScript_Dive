////////////////문자, 숫자, 불린 타입/////////////////

let str: string = 'Hellow World'
let num: number = 123
let boo: boolean = true
//타입을 미리 명시한다
str = 'Good morning~'
num = 123
boo = false
// ': string'요 부분 빼고는 전부 JS이다


//////////////////////객체타입////////////////////////////
const obj:{a : number} = {a : 0}// 데이터의 형식도 정하고, 초기값도 정해줘야 한다
obj.a = 123
//obj.b = 456 //-> error '{ a: number; }' 형식에 'b' 속성이 없습니다.ts(2339)



/////////////////////////////배열타입////////////
const arr: number[] = []
const arr2: Array<string> =[] // 위와 동일한 선언이다. 근데 위를 훨 많이 씀
//위의 객체 타입과 다르게 빈 배열도 초기값으로 할당할 수 있다
//하지만 무조건 Number(숫자) 데이터여야만 한다!
arr[0] = 123 // [123]
//arr[1] = '456' // error :'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)



////////////////////함수타입//////////////////////////////
const hello0:(a:string, b:number) => string = (msg,xyz) => msg

const hello1:(a:string, b:number) => string = function (msg,xyz) {
  //...
  return msg
}
//일반 함수도 구조가 동일하다
//중간에 들어가는 로직은 함수 타입과 관련 없고, 매개변수와 반환 타입만 확실하게 명시해주면 된다.
//중괄호와 
//매개변수의 갯수와 타입도 각각 일치해야 한다.

const hello2 = function (msg : string ,xyz : number):string {
  //...
  return msg
}
//매개변수에 직접 타입을 명시할 수 있다


function hello6 (msg:string, xyz:number): string{
  return msg
}
// 타입 영역을 제거해도 매개변수에 직접 타입 지정할 수 있다.
//반환타입도 명시한다



////////////////Enum(이넘) 타입//////////////
//타입 + 값(데이터)의 집합으로 역방향 매핑(reverse mapping) 가능.

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
console.log(week[0])// 'Sun'
console.log(week[6])// 'Sat'
console.log(week.findIndex(d => d === 'Sun'))//0
console.log(week.findIndex(d => d === 'Sat'))//6

enum Week { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
console.log(Week[0]) // 'Sun'
console.log(Week[6]) // 'Sat'
console.log(Week.Sun) //0
console.log(Week.Sat) //6

const EnumWeek = {
  0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat',
  Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6
}
console.log(EnumWeek[0]) // 'Sun'
console.log(EnumWeek[6]) // 'Sat'
console.log(EnumWeek.Sun) // 0
console.log(EnumWeek.Sat) // 6


enum Colors { Red, Green = 4, Blue }

console.log(Colors.Red) // 0
console.log(Colors[0]) // 'Red'

console.log(Colors.Green) // 4
console.log(Colors.Blue) // 5 !! (green 인덱스를 4로 변경해서!)
// 따라서 Blue를 출력하고 싶으면? 2가 아니라 5를 불러와야 한다
console.log(Colors[7]);


//문자를 할당하게 되면 역방향 매핑이 안된다
enum Colors { Red1 = 'r', Green1 = 4, Blue1 }
//이렇게 인덱싱 하면
console.log(Colors.Red) // 'r' -> 이건 되는데
console.log(Colors[4]) // 'Green'
//console.log(Colors.r) // error -> TS 에선 문자열 열거형의 경우 역방향 매핑이 생성되지 않기 때문






