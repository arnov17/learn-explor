/* Dependecy injection */

class Store {
    private name : string = 'Store A';
    private profit : number = 10000

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }
}

class Store2 {
    private name : string = 'Store A';
    private profit : number = 120000

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }
}

class FashionProduct {
    private store : Store;
    private name : string;
    private price : number;
    constructor(name : string, price : number) {
        this.name = name;
        this.price = price;

        this.store = new Store()
    }
    sell() : void {
            console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class TechProduct {
    private store : Store;
    private name : string;
    private price : number;
    constructor(name : string, price : number) {
        this.name = name;
        this.price = price;

        this.store = new Store()
    }
    sell() : void {
            console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const sepatu = new FashionProduct('Sepatu Nike', 529000);
sepatu.sell()

//--------------------
// dinamis class

interface Istore {
    name : string;
    profit : number;
    getProfit() : number;
}

class TokoBagus implements Istore{
    name : string = 'Toko Bagus';
    profit : number = 10000

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }
}

class TokoLegend {
    name : string = 'Toko legend';
    profit : number = 12000

    getName() : string {
        return this.name;
    }

    getProfit() : number {
        return this.profit;
    }
}

class HijabProduct {
    private store : Istore;
    private name : string;
    private price : number;
    constructor(store : Istore, name : string, price : number) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() : void {
            console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

class SportProduct {
    private store : Istore;
    private name : string;
    private price : number;
    constructor(store : Istore, name : string, price : number) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() : void {
            console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`)
    }
}

const tokoBagus = new TokoBagus();
const tokoLegend = new TokoLegend();

const bajuHijab = new HijabProduct(tokoBagus, 'baju gamis', 210000);
const bajuRunning = new SportProduct(tokoLegend, 'baju running', 320000);

console.log(bajuHijab)
console.log(bajuRunning)

console.log(bajuHijab.sell())
console.log(bajuRunning.sell())