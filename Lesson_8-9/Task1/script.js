"use strict";

let orderList = [
    {name:"Первый Вкус", description:"Молоко", cost:49, currency:"RU", size:10, weight:20, manufact_firm:"РосМол", production_date:"29.01.21"}, 
    {name:"Старомосковская", description:"Колбаса", cost:150, currency:"RU", size:50, weight:20, manufact_firm:"Глория", production_date:"25.01.21"},
    {name:"Чемпион", description:"Хлеб", cost:30, currency:"RU", size:30, weight:10, manufact_firm:"Пекарня", production_date:"29.01.21"}
];

let [product_1, product_2, product_3] = orderList;

let {
	name = "...",
	description = "...",
	cost = 0,
	currency = "...",
	size = 0,
	weight = 0,
	manufact_firm = "...",
	production_date = "00.00.0000"
} = product_1;

let container = document.getElementById('orderContainer');

let table = document.createElement("TABLE");

let create = (arr) => {
	
  let tr = document.createElement('tr');
  
  for (let key in arr) {
    let td = document.createElement('td');
      td.innerHTML = arr[key] + " ";
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

for (let index in orderList) {
  create(orderList[index]);
}


table.setAttribute("border", "2")
container.append(table);






