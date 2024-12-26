// 추상 클래스
abstract class AnimalA {
    abstract sound: string
    abstract color: string
    abstract speak(): string
    abstract getColor(): string
}

class Dog extends AnimalA {
    constructor(
        public sound: string,
        public color: string
    ) {
        super()
    }
    speak() { return this.sound }
    getColor() { return this.color }
}

const dog = new Dog('멍멍!', 'white')
dog.speak()    // '멍멍!'
dog.getColor() // 'white'