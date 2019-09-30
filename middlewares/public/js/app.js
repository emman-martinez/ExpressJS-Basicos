'use strict'

const h1 = document.querySelector("#title");
const h1String = 'Javascript & Express';

setTimeout(() => {
    h1.innerHTML = h1String;
}, 3000);