function logger(arg) {
    console.log (arg)
}

function caller(arg, cb) {
setTimeout(()=> cb(arg), 1000)
}
//menerima callback

function add1(arg, cb) {
let ret = arg + '_1'
setTimeout(()=> cb(ret), 1000)
}
//hello_1

function add2(arg, cb) {
let ret = arg + '_2'
setTimeout(()=> cb(ret), 1000)
}
// //hello_1_2

// caller (
//     'hello',
//     (retC)=> add1(
//         retC,
//         (ret1) => add2(
//             ret1,
//             logger
//         )
//     )
// )


function callerPromise(arg) {
    return new Promise(
        resolve => caller(arg, resolve)
    )
}

function add1Promise(arg) {
    return new Promise(
        resolve => add1(arg, resolve)
    )
}

function add2Promise(arg){
    return new Promise(
        resolve => add2(arg, resolve)
    )
}
//callerPormise('hello')
//     .then(add1Promise)
//     .then(add2Promise)
//     .then(logger)

async function callerAsync(){
    const a = await callerPromise('hello')
    const b = await add1Promise(a)
    const c = await add2Promise(b)
    await logger(c)
}

callerAsync()