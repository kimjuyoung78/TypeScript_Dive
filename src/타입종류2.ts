///////////void 타입/////////////
//값을 반환하지 않는 함수의 변환 타입

const hello: (msg : string) => void = msg => {
    return `Hello ${msg}`
}
hello('World!');

//튜플(Tuple)
// [id, name, isValid]
const userA: [number, string, boolean] = [1, 'Heropy', true]
const userB: [number, string, boolean] = [2, 'Neo', false]
const userC: [number, string, boolean] = [3, 'Evan', true, 'evan@gamil.com']

const tup: [number, number] = [4, 5]
tup.splice(2, 0, 6) // [4, 5, 6]

const user: [number, string, boolean] = [1, 'Heropy', true]
user.push('thesecon@gmail.com')

//기본 배열은 길이의 제한이 X
// 하지만 튜플은 고정된 길이의 배열 타입


// 잘못된 데이터가 할당하면 안된다는 것을 코드로 바로 보여준다


// push, splice 메소드 사용은 가능! (but 길이가 달라지니 주의해야 한다) 


// 배열 데이터를 만들때는 아이템의 타입을 꼭 정의를 해줘야 한다.


// Never 타입
// 어떤 것도 할당할 수 없는 타입,
// 혹은 정상적으로 종료되지 않는 함수의 반환 타입.
const nev: number[] = []
nev.push(6)

const myError: (m: string) => never = (msg) => {
    throw `에러! - ${msg}`
}
try {
    myError('Never 타입..') // '에러! - Never 타입..'
} catch (err) {
    console.error(err)
}



//////////////// Unknown 타입
// 어떤 것도 할당할 수 있지만, 정확히 무엇인지 알 수 없는 타입.
// 다른 타입에는 할당 할 수 없음.

let anything: unknown = 'Hello'
anything = 123
anything = { a: 'A' }
anything = [1, 2, 3]

//그래서 any보다 unkown 많이 쓴다. any 보다는 엄격하지만 자유롭게 선언할 수 있으니
if (typeof anything === 'string') {
    const a: string = anything
}
// const b: number = anything  // 에러
// const c: boolean = anything  // 에러

// Any vs Unknown

let any: any = 'hello'
console.log(any.toUpperCase()) // OK!
any = 123
console.log(any.toUpperCase()) // OK! - 런타임 에러 발생!

let unk: unknown = 'hello'
// console.log(unk.toUpperCase()) // Run time Error! 얘를 에러 안뜨게 하려면
//조금 더 엄격한 상황을 만드는게 좋다 
//단점 : 코드의 양 늘어남 장점 : 코드의 안정성이 올라간다
if(typeof unk === 'string'){
    console.log(unk.toUpperCase);//OK!  
}
unk = 123
// console.log(unk.toUpperCase()) // Error!
