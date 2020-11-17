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