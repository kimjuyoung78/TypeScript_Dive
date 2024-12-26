
// ! 제네릭(Generic)
//? 서론
//a,b 매개변수가 문자열 데이터만 받아야 하니 2,3번 예시는 에러가 발생함
//그럼, 2,3번처럼 숫자'만' 받거나 boolean'만' 받을 수 있게 하려면 어떻게 해야 할까?
function toObj(a: string, b: string): { a: string, b: string }
function toObj(a: number, b: number): { a: number, b: number }
function toObj(a: boolean, b: boolean): { a: boolean, b: boolean }
function toObj(a: string | number | boolean, b: string | number | boolean): { a: string | number | boolean, b: string | number | boolean } {
    return { a, b }
}//함수 오버로딩

toObj('A', 'B')
toObj(1, 2)
toObj(true, false)

//방법1 : 유니온 타입? -> (X) 혼용해서 받을 수 있음
//방법2 : 함수 오버로딩 => (O) But 코드가 길고 복잡해진다
//TODO 방법3 : 제네릭 사용


//? <제네릭(Generic)>
//? 꺽쇠가로에 사용하고 지정하고 싶은 타입을 정하는 것
function toObj<T>(a: T, b: T): { a: T; b: T } {
        return { a, b };
}
      console.log(toObj('A', 'B')); // { a: 'A', b: 'B' }
      console.log(toObj(1, 2));     // { a: 1, b: 2 }
      console.log(toObj(true, false)); // { a: true, b: false }

function toObj(a: string, b: string): { a: string; b: string };
function toObj(a: number, b: number): { a: number; b: number };
function toObj(a: boolean, b: boolean): { a: boolean; b: boolean };

//? 제약조건
//추가한 조건 외에는 쓸 수 없다! 아래 예시에선 null을 사용할 수 없다
console.log(toObj('A', 'B'));       // { a: 'A', b: 'B' }
console.log(toObj(1, 2));           // { a: 1, b: 2 }
console.log(toObj(true, false));    // { a: true, b: false }
toObj(null, null) //에러(null은 허용되지 않음)

//? 인터페이스 구조 안에서 type을 재사용 하는 것이 가능
//? type을 인수처럼 넣어주거나 type을 매개변수처럼 받는 것이 가능



