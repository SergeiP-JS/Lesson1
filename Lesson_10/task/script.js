"use strict";

let f_1 = () => {
    return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let url = new URL('http://45.67.59.109:2001/orders');
            xhr.open('GET', url);
            xhr.send();
            xhr.onload = () => {
				if (xhr.status != 200) {
					//Ошибка
                    reject (alert(`Ошибка ${xhr.status}: ${xhr.statusText}`));
                } else {
				//Данные
                    resolve(alert(xhr.response));

                }
            };
    })
}

let f_2 = () => {
    return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let url = new URL('http://45.67.59.109:2001/order');
            url.searchParams.set("id", "order1");
            xhr.open('GET', url);
            xhr.send();
            xhr.onload = function() {
                if (xhr.status != 200) {
					//Ошибка
                    reject (alert(`Ошибка ${xhr.status}: ${xhr.statusText}`));
                } else {
				//Данные
                    resolve(alert(xhr.response));

                }
            };
    })
}

let f_3 = () => {
    return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let url = new URL('http://45.67.59.109:2001/order/pay');
            url.searchParams.set("id", "order2");
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.send();
            xhr.onload = function() {
              if (xhr.status != 200) {
					//Ошибка
                    reject (alert(`Ошибка ${xhr.status}: ${xhr.statusText}`));
                } else {
				//Данные
                    resolve(alert(xhr.response));

                }
            };
    })
}

f_1().then(f_2()).then(f_3()).catch(alert("Ошибка"));