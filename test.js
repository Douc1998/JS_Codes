let a = {
    name: 'dou',
    friends: {
        friend1: 'jack',
        friend2: 'john'
    },
}

const {name, friends} = a;
let b = {...friends, name};

console.log(b)