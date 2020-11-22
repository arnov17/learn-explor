// interface

interface androidPhone {
    name : string;
    menu() : void;
    home() : void;
    back() : void;
}

class Samsung implements androidPhone {
    name: string;
    constructor(name : string) {
        this.name = name;
    }
    menu(): void {
        console.log('menu tapped')
    }
    home(): void {
        console.log('home tapped')
    }
    back(): void {
        console.log('back tapped')
    }
    
}

class Asus implements androidPhone {
    name: string;
    constructor(name : string) {
        this.name = name;
    }
    menu(): void {
        console.log('menu tapped')
    }
    home(): void {
        console.log('home tapped')
    }
    back(): void {
        console.log('back tapped')
    }
}

class GameA {
    private phone : androidPhone

    constructor( phone : androidPhone) {
        this.phone = phone;
    }

    back() {
        console.log('kembali ke menu utama back')
    }

    menu() {
        this.phone.menu() // global native bawaan dari android phone
    }
    home() {
        this.phone.home()// sama seperti menu
    }
}

const samsung = new Samsung('Tipe A');

const game = new GameA(samsung) // class game membutuhkan param yg interface nya androidphone yakni samsung
game.back()
game.home()
game.menu()

// ----------------

interface Applephone {
    home() : void;
}

class Iphone implements Applephone {
    name : string;
    constructor(name : string) {
        this.name = name
    }
    home(): void {
        console.log('muncul global menu')
    }
}

const iphone = new Iphone('iphone SE');
// const game2 = new GameA(Iphone) //  error karena gameA hanya bisa di android


/* Interface optional property*/
interface Teacher {
    name : string;
    age : number;
    phone ?: number; // optional property
}

let guru : Teacher = {name : 'ani', age : 26} // property phone bisa tidak terisi krn optional

/*interface read only */
interface Student {
    readonly name :string;
    readonly age : number;
}
let student : Student = {name : 'arnov', age : 26}

// student.name = 'reza' // akan eror kan immutable / tidak bisa diubah / bersifat konstant, hanya bisa di declar pertama kali

/*interface inheritance */
interface Transporation {
    name : string;
    wheels : number;
}

interface Icar extends Transporation {
    doors : number;
}

class Civic implements Icar {
    name : string = 'Civic';
    wheels : number = 4
    doors :number = 2;
}

/*interface extends class */ 
class Animal {
    name :string
    constructor(name :string) {
        this.name = name
    }
}

interface IShark extends Animal {
    swim () : void;
}

class Shark implements IShark {
    name :string
    constructor(name :string) {
        this.name = name
    }
    swim() : void {
        console.log('berenang')
    }
}