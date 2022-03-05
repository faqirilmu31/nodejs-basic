const {EventEmitter} = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

// buat variabel myEmitter yang merupakan instance dari EventEmitter
const myEmitter = new EventEmitter();


// tentukan birtdayEventListener sebagai aksi ketika event 'birthday' dibangkitkan pada myEmitter
myEmitter.on('birthday', birthdayEventListener);


// bangkitkan event 'birthday' pada myEmitter dengan method emit() dan beri nilai argumen listener dgn nama Anda
myEmitter.emit('birthday', 'Reni Setyaningsih');
