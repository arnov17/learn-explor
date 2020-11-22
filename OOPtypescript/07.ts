/* Generics */
function getData (value :any) {
    return value
}

const data = getData(12233);
console.log(data)
// kelemahan type any, tidak diketahui type data apa, dan tidak bisa mengunakan method seperti .toString, .length, dll

function getInput <T>(value : T) : T{
    return value
}
const string = getInput<string>('test');
console.log(string.length);

const num = getInput<number>(1234);
console.log(num.toFixed(2));
// mengunkana generics pada case diatas, function menjadi dinamis

/*Generics Interface */

interface Generics<T> {
    propsA : T
}
function genericsFunction <T>(value : T) : Generics<T> {
    let data : Generics<T> = {
        propsA : value
    }
    return data
}

console.log(genericsFunction<string>('generic string'));
console.log(genericsFunction<number>(1993));
console.log(genericsFunction<boolean>(true))

/*Generics Types */

type GenericsTypes<T> = T;

function genericsTypeFunction <T>(value : T) : GenericsTypes<T> {
    return value
}
console.log(genericsTypeFunction<string>('generic string'));
console.log(genericsTypeFunction<number>(1993));
console.log(genericsTypeFunction<boolean>(true))

// generic interface lebih ke object, generic type cenderung ke variable

/*Generics class */

interface GenericsClass<T> {
    propA : T;
    methodA() : T;
};

class genClass<T> implements GenericsClass<T> {
    propA: T;
    constructor(propsA : T) {
        this.propA = propsA;
    }
    methodA() : T {
        return this.propA
    }
    
}

const GenericsClassA = new genClass<number>(123);
console.log(GenericsClassA.methodA());