
// 타입 단언(Assertion)
// '단언'이란, 주저하지 아니하고 딱 잘라 말함.
// as, ! (Non-null 단언 연산자)

// 1)
const btn = document.querySelector('button') as HTMLButtonElement
//또는 document.querySelector('button')!
btn.classList.add('btn')
btn.id = 'abc'

// 2)
function toTwoDecimals(val: number | string, isNum: boolean) {
    if (isNum) {
        (val as number).toFixed(2)
    } else {
        (val as string).slice(0, 2)
    }
}
toTwoDecimals(3.141592, true)
toTwoDecimals('Hello world!', false)
//개발자가 타입스크립트에세 단언해서 딱 말한다.

//요기가 false로 잘못 쓰여질 경우도 있기 때문에
//단언보다는 타입 가드를 쓰는게 훨씬 안전하다.


// 3)
const json = '{ "name": "Heropy", "age": 85 }'
const user = JSON.parse(json) as {name: string , age: number}
// console.log(user.email)


// 4)
let num!: number
//선언하고 초기화 '안하고' 출력을 하는 경우에 이렇게 단언연산자 ! 를 넣어줄 수 있다.
console.log(num);
// 그러면 오류가 안 남. 그 자리에서 초기화가 되었다고 판단한다.(물론 아무 값도 없지만)