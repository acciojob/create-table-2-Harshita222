document.getElementById('createTableButton').addEventListener('click', createTable);

function createTable() {
    // Get the number of rows and columns from the user
    const numRows = parseInt(prompt('Input number of rows'), 10);
    const numCols = parseInt(prompt('Input number of columns'), 10);

    // Get the table element
    const table = document.getElementById('myTable');

    // Clear any existing table content
    table.innerHTML = '';

    // Create the rows and columns
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}
