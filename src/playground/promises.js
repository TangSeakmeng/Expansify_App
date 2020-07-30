const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('something went wrong');
        resolve({
            name: 'LopsidedAxis',
            age: 19
        });
    }, 2000);
});

promise.then(({ name, age }) => {
    console.log(name);
}).catch((error) => {
    console.log(error);
});

promise.then(({ name, age }) => {
    console.log(name);
}, (error) => {
    console.log(error);
});

promise.then((data) => {
    console.log('1', data)
    return data;
}).then((data) => {
    console.log('2', data)
}).catch((error) => {
    console.log(error);
});

promise.then((data) => {
    console.log('1', data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my nested promise!');
        }, 2000);
    })
}).then((data) => {
    console.log('2', data)
}).catch((error) => {
    console.log(error);
});