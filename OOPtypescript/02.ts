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
    nama : string;
    kaki : number;
    
    constructor(nama : string, kaki : number){
        this.nama = nama;
        this.kaki = kaki;
    }
}
// superconsructor pada katak mengharuskan terdapatnya constructor dari parants
// yg constructor pada parant terdapat param 
class Katak extends Hewan3 {
    beracun : boolean;
    constructor(nama : string, kaki : number, beracun : boolean) {
        super(nama, kaki) // ini menjalankan constrctr pada parents
        this.beracun = beracun
    } 
}

const amfibi = new Katak('fogy', 2, true);
console.log(amfibi) // Katak { nama: 'fogy', kaki: 4, beracun: true }


// method overriding
// inheritance pada class parents-child yang memiliki method yang sama
// ketika di execute,terpaggil method pada class child

