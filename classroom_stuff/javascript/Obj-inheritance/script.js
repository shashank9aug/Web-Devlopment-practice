let obj1 = {
    a: 10,
    b: 20, 
    c: 30
}

let obj2 = Object.create(obj1)
obj2.p = 'adg'
obj2.q = 'dgn'
obj2.r = 'dfn'

let obj3 = Object.create(obj2)

// obj3.__proto__ == obj2
// obj3.__proto__.__proto__ == obj1

/* these logic is following in case of only reading 
    in object inheritance but not in case of writing in object
*/    


/* 
    obj2.a -> it will try to find a in obj2
        -> if not found, 
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on... 
        -> till .__proto__ becomes null
*/

/*IMP
obj2.a
11
obj2
Object { p: "adg", q: "dgn", r: "dfn", a: 11 }

obj1
Object { a: 10, b: 20, c: 30 }

obj3
Object {  }

obj3.a++
10
obj3
Object { a: 11 }

​*/