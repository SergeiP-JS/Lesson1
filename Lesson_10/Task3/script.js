"use strict";

let orderList = [];


let container = document.getElementById('orderContainer');

let table = document.createElement("TABLE");




let f_3 = (arr) => {
 return new Promise((resolve, reject) => {
	let xhr = new XMLHttpRequest();
	let url = new URL('http://45.67.59.109:2001/order/pay');
	url.searchParams.set("id", arr.id,true);
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
	xhr.timeout = 10000;
	xhr.send(JSON.stringify({
                                id: arr.id
                            }));
	xhr.onload = () => {
		if (xhr.status != 200) {
			 reject(alert(`Ошибка ${xhr.status}: ${xhr.statusText}`));
			} else {
				resolve(alert(xhr.response));
			}
	 };
	});
	
}
let f_2 = (arr) => {
	return new Promise((resolve, reject) => {

		let url = new URL('http://45.67.59.109:2001/order');
		let xhr = new XMLHttpRequest();
		url.searchParams.set("id", arr.id);
		xhr.open('GET', url);
		xhr.timeout = 10000;
		xhr.send();
		let flag=false;
		xhr.onload = function() {
								if (xhr.status != 200) {
								       reject(alert(`Ошибка ${xhr.status}: ${xhr.statusText}`));
								    } else {  
										resolve(flag=true);
										if (flag){
											let answer = JSON.parse(xhr.response);
											console.log(answer);
											
											let showinfo = document.getElementById('t');
											let tempcontainer = document.getElementById('orderContainer');
											
											showinfo.innerText = 
											`Информация о продукте:
											Название = ${arr.name}
											Описание = ${arr.description}
											Производитель = ${arr.manufacturer}
											Стоимость: = ${arr.amount} ${arr.currency}\n`;
											
											tempcontainer.style.display = 'none';
											showinfo.style.display = 'block';
											let button_home = document.createElement('button');
											button_home.textContent = "Назад";
											button_home.addEventListener("click", function buttonClick() {
												tempcontainer.style.display = 'block';
												showinfo.style.display = 'none';
											});
											showinfo.append(button_home);
											
											let button_pay = document.createElement('button');
											button_pay.textContent = "Купить";
											button_pay.addEventListener("click", function buttonClick() {
												

												f_3(arr);

											});
											showinfo.append(button_pay);
										}
											
								}
							};
	
	});
}
let create = (arr) => {
	
  let tr = document.createElement('tr');
  
  for (let key in arr) { 
		let td = document.createElement('td');
		td.innerHTML = arr[key] + " ";
        if (key === "name") {
			
			td.addEventListener("click", function aclick() {
                    f_2(arr);
                });
			
            
          }
            tr.append(td);
        }
  
  
  table.append(tr);  
  
  let but_del = document.createElement('button');
  but_del.textContent = "Удалить";
  but_del.addEventListener("click", function buttonClick() {
        tr.remove();
    });
	
  tr.append(but_del);
};

let add = (arr) => {
	
  let tr = document.createElement('tr');
  for (let key in arr) {
	  
	 let td = document.createElement('td');
	 let input = document.createElement('input');
     input.id = key;
	 
     if (key == 'cost' || key == 'size' || key == 'weight') {
            input.type = "number";
        }
        else {
            input.type = "text";
        }
		
     td.append(input);
	 tr.append(td);
  }
  
  table.append(tr);
  
  
  let but_add = document.createElement('button');
  but_add.textContent = "Добавить";
  but_add.addEventListener("click", function buttonClick() {
		
	let product_0 = Object.assign({}, arr);
	for (let key in arr){
		 if (document.getElementById(key).value){
			 product_0[key] = document.getElementById(key).value;
			 }
		 }
	tr.remove();
	create(product_0);
	add(arr);
		
    });
  tr.append(but_add);
};








let f_1 = () => {
	return new Promise((resolve, reject) => {

		let xhr = new XMLHttpRequest();
		let url = new URL('http://45.67.59.109:2001/orders');
		xhr.open('GET', url);
		xhr.timeout = 10000; // в миллисекундах (10 сек)
		xhr.send();
		let flag=false;
		xhr.onload = () => {
			if (xhr.status != 200) {
				reject(alert(`Ошибка ${xhr.status}: ${xhr.statusText}`));
		    } else {
				resolve(flag=true);
				if (flag){
				orderList = JSON.parse(xhr.response);
				for (let index in orderList) {
					create(orderList[index]);
				}
				container.append(table);
				table.setAttribute("border", "2")
				container.append(table);
				let product = Object.assign({}, orderList[0]);
						
				for (let key in orderList[0]) {
					product[key]="...";
				}
			add(product);
		}
		    }
		  };
		
			
		xhr.onprogress = (ev) => {
		    console.warn(`Получено ${ev.loaded} из ${ev.total} байт`);
		  };
	});
}
f_1().then(f_2()).then(f_3());
