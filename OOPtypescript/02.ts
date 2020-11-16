// inheritance
// pewarisan , menurunkan sifat, parents-child
class Hewan2 {
    nama : string = '';
    kaki : number = 0;
    
    bernafas() {
        console.log('bernafas');
    }
}

class Burung extends Hewan2 {
    warna : string = 'merah'
}

const elang = new Burung();
elang.nama = 'rick';
elang.kaki = 2;
elang.warna = 'brown';
console.log(elang)
elang.bernafas()


// super constructor
class Hewan3 {
    public nama : string;
    private kaki : number;
    protected mamalia : boolean;
    
    constructor(nama : string, kaki : number, mamalia : boolean){
        this.nama = nama;
        this.kaki = kaki;
    }
}
// superconsructor pada katak mengharuskan terdapatnya constructor dari parants
// yg constructor pada parant terdapat param 
class Katak extends Hewan3 {
    beracun : boolean;
    constructor(nama : string, kaki : number, mamalia : boolean, beracun : boolean) {
        super(nama, kaki, mamalia) // ini menjalankan constrctr pada parents
        this.beracun = beracun
    } 
}

class Cat extends Hewan3 {
    private paws : boolean
    constructor(nama : string, kaki : number, mamalia : boolean, paws : boolean) {
        super(nama, kaki, mamalia) // ini menjalankan constrctr pada parents
    }

    getCar () {
        console.log(this.paws + this.nama)
        // this.kaki --> kaki tidak bisa terpanggil 
    }
}

const amfibi = new Katak('fogy', 2, false, true);
console.log(amfibi) // Katak { nama: 'fogy', kaki: 4, beracun: true }


// method overriding
// inheritance pada class parents-child yang memiliki method yang sama
// ketika di execute,terpaggil method pada class child

// visibility
// public = property yang bisa digunakan dimana saja
// protected = yang bisa digunakan untuk class itu sendiri beserta keturunan nya
// private = hanya digunakan di class itu sendiri
