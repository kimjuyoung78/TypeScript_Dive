

let a = 'Hello'
a = 123 //'number' 형식은 'string' 형식에 할당할 수 없습니다.
a = true //'boolean' 형식은 'string' 형식에 할당할 수 없습니다.
function join(a: string, b: string=''):string{
    return a + b
}
join('Hello','World')
join('Good')