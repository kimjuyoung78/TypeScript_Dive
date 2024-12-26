// 타입 가드(Guard)
// 타입 추론이 가능한 특정 범위(scope) 안에서 타입을 보장
// typeof, instanceof, in
//아직 이해를 잘 못함..

// 1)
const btn = document.querySelector('button')
if(btn) {//조건문 안에 들어왔다는 것은 truthy, 즉 null은 최소한 아니라는 뜻이니 오류가 발생하지 않음
    btn.classList.add('btn')
    btn.id = 'abc'
}
//따라서 타입 단언보다 더 좋다.
if(btn instanceof HTMLButtonElement) {//이렇게 명시해도 좋고
    btn.id = 'abc'
}


// 2)
function isNum(val: unknown): val is number{
    return typeof val === 'number'
}
function toTwoDecimals(val: number | string) {
    if(isNum(val)){
        val.toFixed(2)
    }else{
        val.slice(0,2)
    }
}
toTwoDecimals(3.141592)
toTwoDecimals('Hello world!') 

// 3)
type UserA = { name: string, age: number }
type UserB = { id: string, email: string }
//unknown 키워드를 사용했다.
function isUserA(user: unknown): user is UserA {
    if (user && user.constructor === Object) {
        //할당 연산자로 할당을 해줘야 한다!
        const u = user as UserA
        return typeof u.name === 'string' && typeof u.age === 'number'
    }
    return false
}

fetch('https://exam.site')
    .then(res => res.json())
    .then((user: UserA | UserB) => {
        if (isUserA(user)) {
            console.log(user.name[0])
            console.log(user.age - 10)
        }
    })