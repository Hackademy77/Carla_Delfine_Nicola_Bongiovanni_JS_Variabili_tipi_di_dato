let totalCats = 44;
let catRow = 6;

let row = totalCats / catRow;
let catRest = totalCats % catRow;
let newRow = catRow - catRest;

console.log(`Ci sono ${row} file di gatti e ne mancano ${newRow} per una nuova fila, con un avanzo di ${catRest}`);

