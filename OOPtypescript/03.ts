class ProductA {
    private _price : number = 0;
    private _discount : number = 0.5;

    get price() {
        return this._price;
    }

    set price(value : number) {
        this._price = value - ( value * this._discount);
    }
}

const productA = new ProductA();
productA.price = 2000; // --> masuk kemethod set, update masuk keproperty, lalu method get u/dipanggi;
console.log(productA.price)

// with this model
// memasukan sebuah data kedalam property, melakukan validasti terlebih dahulu di method set


// static property & method
class Ayam {
    static kaki : number = 2;

    static jalan (){
        console.log(`Ayam berjalan dengan ${this.kaki} kaki`);
    } // ini bisa terpanggil karena static juga, sama bagian dari class Ayam atau satu dunia

    getKaki(){
        // console.log(`${this.kaki}`) --> error, karena kaki sudah menjadi object static pada class ayam, bukan propert
        console.log(Ayam.kaki)
    }
}
console.log(Ayam.jalan())

// static property bersifat global


const itik = new Ayam();
console.log(itik.getKaki()) // kaki nya 2

Ayam.kaki = 4;

console.log(itik.getKaki()) // menjadi 4