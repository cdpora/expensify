const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        // resolve('1--This is my resolved data')
        // resolve('2--This is my resolved data')
        resolve({
            name: 'Ilie',
            age: 26
        })
        //reject('wrong111111111111111111')
    }, 5000)
    
})
console.log('before promise.then')

promise.then((data)=> {
    console.log('1 -- ',data)
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve({
                name: 'Ilie',
                age: 26
            })
        }, 5000)  
    })
}).then((data)=>{
    console.log('2--', data)
}).catch((error)=>{
    console.log('errror', error)
})


console.log('after promise.then')