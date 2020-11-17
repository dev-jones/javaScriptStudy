const woody = {
    riding : true
}

woody.riding    // true

const buzz = {
    flying : true
}

const woody = Object.create(buzz);
// 우디가 날 수 있게 되었다!
woody.flying;   // true

for(let i in woody) {
    console.log('${i}를 발견');
};
// flying 발견

function Foo() {}
Foo.prototype

const f = new Foo();
Object.getPrototypeOf(f) === Foo.prototype; // true