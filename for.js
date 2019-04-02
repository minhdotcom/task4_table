let block = "<table border = '1' width = '300' cellspacing = '0' cellpading = '3'>";
for (i = 1; i <= 10; i++){
    block = block + "<tr>";
    for (j = 1; j <= 10; j++){
        block = block + "<td>" + i*j + "</td>";
    }
    block = block + "</tr>";
}
block = block + "</table>";
document.write(block + '<br>');