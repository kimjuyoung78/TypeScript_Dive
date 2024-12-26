// 타입 별칭(Alias)
// 새로운 타입 조합 생성
//MyTypeName 처럼 재사용 가능
type MyTypeName = string | number //유니온 타입으로 설정
type MyArray = MyTypeName[]

//객체 데이터 타입 (string, number)
type UserA = {
  name: string
  age: number
}

//객체 데이터 타입 (boolean)
type UserB = {
  isValid: boolean
}
type UserX = UserA & UserB

//문자열, 숫자 데이터 선언 가능 (그게 아닐 경우 오류)
const a: MyTypeName = 123

// true 와 같은 boolean 값 추가는 불가능
const b: MyArray = [1, 'A', 'B', 2, 3]

// 빈 객체 데이터는 안됨
const userA: UserA = {
    name : 'Heropy',
    age: 85
}
const userB: UserB = {
    isValid: false,
}
//type UserX = UserA & UserB
// 세 조건 모두 있어야 함. 하나라도 없으면 오류!
const userX: UserX = {
  name: 'Neo',
  age: 22,
  isValid: false
}