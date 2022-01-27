// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

const weightOfSouvenir = 75;
const weightOfTrinket = 112;

let souvenirs = +prompt('Количество сувениров: ');
let trinkets = +prompt('Количество безделушек: ');

let result = weightOfSouvenir * souvenirs + weightOfBauble * trinkets;
console.log(`Общий вес посылки составляет: ${result}гр.`);
