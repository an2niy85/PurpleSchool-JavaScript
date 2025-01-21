const positionLat = 10;
const positionLong = 10;
const addressLat = 20;
const addressLong = 20;

const result = ((addressLat - positionLat)**2 + (addressLong - positionLong)**2)**(1/2);
console.log(`Расстояние от текущей точки до точки назначения равно ${result.toFixed(2)}`);