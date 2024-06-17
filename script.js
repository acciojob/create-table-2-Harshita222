function createTable() {
    // Prompt the user for the number of rows
    const numRows = parseInt(prompt('Input number of rows'), 10);
    // Prompt the user for the number of columns
    const numCols = parseInt(prompt('Input number of columns'), 10);

    // Check if the inputs are valid numbers
    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        alert('Please enter valid positive numbers for rows and columns.');
        return;
    }

    // Get the table element by its ID
    const table = document.getElementById('myTable');

    // Clear any existing content in the table
    table.innerHTML = '';

    // Loop to create rows
    for (let i = 0; i < numRows; i++) {
        // Create a new row element
        const row = document.createElement('tr');

        // Loop to create columns for the current row
        for (let j = 0; j < numCols; j++) {
            // Create a new cell element
            const cell = document.createElement('td');
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
            // Append the cell to the current row
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }
}
