//접근 제어자(Access Modifiers)
// public(생략 가능)
// protected
// private

class Animal {
    public name: string
    public sound: string
    constructor(name: string, sound: string) {
        this.name = name
        this.sound = sound
    }
}

class Dog extends Animal {
    public color: string
    constructor(name: string, sound: string, color: string) {
        super(name, sound)
        this.color = color
    }
    speak() {
        return this.sound
    }
    getColor() {
        return this.color
    }
}

const dog = new Dog('흰둥이', '멍멍!', 'white')
dog.speak()    // '멍멍!'
dog.getColor() // 'white'
dog.name       // '흰둥이'
dog.sound      // '멍멍!'
dog.color      // 'white'