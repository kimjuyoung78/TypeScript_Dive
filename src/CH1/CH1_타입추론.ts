//타입 추론(Inference)
// '추론'이란, 어떠한 판단을 근러고 삼아 다른 판단을 이끌어 냄.
// 1) 초기화된 변수
// 2) 기본값이 지정된 매개변수
// 3) 반환이 있는 함수

let a = 'Hello'
a = 123 //'number' 형식은 'string' 형식에 할당할 수 없습니다.
a = true //'boolean' 형식은 'string' 형식에 할당할 수 없습니다.
function join(a: string, b: string=''):string{
    return a + b
}
const   x = join('Hello','World') // x 가 문자열이라는 것을 설명 안해도 타입 추론을 통해 타입 지정을 할 수 있다.
//이때 a나 b 둘 중에 하나라도 자료형이 선언이 된 경우에만. 둘 다 없으면 오류가 난다.
join('Good')