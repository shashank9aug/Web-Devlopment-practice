const lib1 = require('./lib1')

console.log('hello world')

//window is exist in browser but not in browser
if (typeof window !== 'undefined') {
    console.log('running in browser')
} else {
    console.log('running in node')
}

console.log(lib1)

lib1.sayHello('John')

setTimeout(() => {
    console.log(lib1)
}, 1000)

console.log(lib1)