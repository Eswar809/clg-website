function getInputValue(){

let inputVal = document.getElementById("uid").value.trim(); // trim() removes extra spaces
let a = 1;

// Convert input to uppercase for case-insensitive comparison
inputVal = inputVal.toUpperCase();

if (inputVal == "23BQ5A544") {
    document.getElementById("demo").innerHTML = "NIKIL";
    document.getElementById("demo1").innerHTML = "100000";
}
else if (inputVal == "23BQ5A548" || inputVal == "23BQ5A54067") {
    document.getElementById("demo").innerHTML = "ESWARDEEVI";
    document.getElementById("demo1").innerHTML = "10000";
}
// Add more student IDs and details below
else if (inputVal == "23BQ5A550") {
    document.getElementById("demo").innerHTML = "RAHUL";
    document.getElementById("demo1").innerHTML = "95000";
}
else if (inputVal == "23BQ5A560") {
    document.getElementById("demo").innerHTML = "PRIYA";
    document.getElementById("demo1").innerHTML = "87000";
}
else if (inputVal == "23BQ5A570") {
    document.getElementById("demo").innerHTML = "VIKAS";
    document.getElementById("demo1").innerHTML = "76000";
}
else if (inputVal == "23BQ5A580") {
    document.getElementById("demo").innerHTML = "ANJALI";
    document.getElementById("demo1").innerHTML = "92000";
}
else if (inputVal == "23BQ5A590") {
    document.getElementById("demo").innerHTML = "SIDDARTH";
    document.getElementById("demo1").innerHTML = "88000";
}
else {
    document.getElementById("demo").innerHTML = "Not Found";
    document.getElementById("demo1").innerHTML = "—";
}
    
}

