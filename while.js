let x = 1;
let y = 1;
let block = "<table border = '1' width = '300 '>";
while (x <= 10){
    block = block + '<tr>';
    while (y <= 10){
        block = block + '<td>' + x * y + '</td>';
        y = y + 1;
    }
    block = block + '</tr>';
    y = 1;
    x = x +1;
}
block = block + '<table>';
document.write(block);