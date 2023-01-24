let miSet = new Set();

do {
   let actividad = prompt("indique su actividad preferida");
   miSet.add(actividad);
}
while (miSet.size<5);
console.log(Array.from(miSet.keys()).sort().join());