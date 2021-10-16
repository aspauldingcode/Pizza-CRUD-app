
var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["customerName"] = document.getElementById("customerName").value;
    formData["size"] = document.getElementById("size").value;
    formData["sauce"] = document.getElementById("sauce").value;
    formData["meatToppings"] = document.getElementById("meatToppings").value;
    formData["vegToppings"] = document.getElementById("vegToppings").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("pizzaList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.customerName;
    var cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.size;
    var cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.sauce;
    var cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.meatToppings;
    var cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.vegToppings;
    var cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('customerName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('size').value = selectedRow.cells[1].innerHTML;
    document.getElementById('sauce').value = selectedRow.cells[2].innerHTML;
    document.getElementById('meatToppings').value = selectedRow.cells[3].innerHTML;
    document.getElementById('vegToppings').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.customerName;
    selectedRow.cells[1].innerHTML = formData.size;
    selectedRow.cells[2].innerHTML = formData.sauce;
    selectedRow.cells[3].innerHTML = formData.meatToppings;
    selectedRow.cells[4].innerHTML = formData.vegToppings;
}

//Delete the data
function onDelete(td) {
    if (confirm('Remove Pizza?')) {
        row = td.parentElement.parentElement;
        document.getElementById('pizzaList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm() {
    document.getElementById('customerName').value = '';
    document.getElementById('size').value = 'Please Select';
    document.getElementById('sauce').value = 'Please Select';
    document.getElementById('meatToppings').value = 'Please Select';
    document.getElementById('vegToppings').value = 'Please Select';
}
