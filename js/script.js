'use strict';

const inputEur = document.querySelector('#eur'),
      inputUsd = document.querySelector('#usd');

inputEur.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //собирает настройки для будущего запроса, method get or post, url where to send requests, async, login, pass
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');// http headers, what we send
    request.send(); //body - data what is sended to server
    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response); //parse to simple js obj which we can use
            inputUsd.value = (+inputEur.value * data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Smth wrong';
        }
    }); //event shows the status of the request in the current moment readyState
    //status //200 ok//400+ errors //what to do with the answer
    //statusText //text description of the answer
    //response //answer from backend-developer
    //readyState //current state of the request //0 unsent //1 opened //2 headersreceived //3 loading //4 done

});