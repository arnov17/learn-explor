// Class 
class Car {

}

const honda = new Car();
const ford = new  Car();

console.log(typeof honda); // --> object
console.log(typeof Car); // --> function


// constrcutor
class Car2 {
    constructor() {
        console.log('constuctor akan dipanggil pertama kali');
    }
}
const car2 = new Car2();

// property & method

class Hewan {
    // propery
    nama : string = '';
    kaki : number = 0;
    mamalia : boolean = true;

    //method
    bernafas() {
        console.log(`${this.nama} sedang bernafas `);
    }

}

const hewan = new Hewan();
console.log(hewan) // Hewan { nama: '', kaki: 0, mamalia: true }

//manipulasi property
hewan.nama = 'kucing';
hewan.kaki = 4;
hewan.bernafas()

console.log(hewan); // Hewan { nama: 'kucing', kaki: 4, mamalia: true }

class Motor {
    model : string;
    wheel : number;
    constructor(model : string, wheel :number) {
        this.model = model;
        this.wheel = wheel;
    }
}

const yamaha = new Motor('yamaha', 2)
console.log(yamaha) // Motor { model: 'honda', wheel: 2 }
//-------------------
// cara yang sama,lebih singkat
class Motor2 {
    constructor(public model :string, public wheel : number) {

    }
} 
const suzuki = new Motor2('suzuki', 2)
console.log(suzuki) // Motor2 { model: 'suzuki', wheel: 2 }