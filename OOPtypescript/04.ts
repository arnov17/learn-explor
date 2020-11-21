// Method return type
class burung {
    private kaki : number = 2;

    getKaki() {
        return this.kaki
    }

    terbang() : void { // type void : type yang tidak mengembalikan apa2, tidak boleh ada 
        console.log('terbang')
    }

    async makan() : Promise<number>{
        return 32
    }
}

// abstract class
// class yang masih belum jelas / umum lah
abstract class mamalia {
    name : string;
    constructor(name : string) {
        this.name = name;
    }
}