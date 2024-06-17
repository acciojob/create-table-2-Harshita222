function createTable() {
    let btn = document.getElementById('myTable');
    btn.addEventListener("click", function() {
        let pt1 = prompt("input number of rows");
        let pt2 = prompt("Input number of columns");
        let table = document.getElementById('myTable');
        for(let i = 0; i < pt1; i++) {
            let row = table.insertRow(i);
            for(let j = 0; j < pt2; j++) {
                let cell = row.insertCell(j);
                cell.innerHTML = `Row-${i} Column-${j}`;
            }
        }
    });
}