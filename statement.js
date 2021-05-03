let printTxt = document.getElementById("print");
let calculate = document.getElementById("calculate");

let main = document.getElementById("table").style.visibility = "hidden";

let values = localStorage.getItem("values");
// retrive from local storage.

if (values == null) {
    valuesobj = [];
}
else {
    valuesobj = JSON.parse(values);
}
// condition to check whether it has some data or not.

let html = "";
// declaring html

valuesobj.forEach(function (element, index) {
    html += `   <tr class="find">
    <td>${index + 1}</td>
    <td>${element.Date}</td>
    <td>${element.Title}</td>
    <td>${element.Category}</td>
    <td>${element.Amount}</td>
    <td> <button class="btn btn-primary mx-3 my-2" id="${index}" onclick="del(this.id)">Delete </button></td>
</tr>`;
});
let see = document.getElementById("see");
let nothing = document.getElementById("nothing");
// getting target table

if (valuesobj.length != 0) {
    nothing.innerHTML = "";

    see.innerHTML = html;
    let main1 = document.getElementById("table").style.visibility = "visible";
    // setting html of target table
}

else {
    nothing.innerHTML = "<p>Nothing to show</p>";
    // set html=some message;
}

function del(index) {
    let values = localStorage.getItem("values");
    if (values == null) {
        valuesobj = [];
    }
    else {
        valuesobj = JSON.parse(values);
    }
    let confirmation = confirm("Do you want to delete the row?");
    if (confirmation) {

        valuesobj.splice(index, 1);
        // delting in array
        localStorage.setItem("values", JSON.stringify(valuesobj));
        // updating local storage 
        window.location.reload();
        // showing values
    }
}



// function to print
printTxt.addEventListener("click", function () {
    let temp = document.body.innerHTML;
    // save the org data in varible

    let table = document.getElementById("table").innerHTML;
    // getting target

    document.body.innerHTML = table;
    window.print();
    // printing
    document.body.innerHTML = temp;
    // making  things normal 
});

// function to calculate
calculate.addEventListener("click", function () {
    let total_income = 0;
    let total_expense = 0;
    let values = localStorage.getItem("values");
    // retrive from local storage.

    if (values == null) {
        valuesobj = [];
    }
    else {
        valuesobj = JSON.parse(values);
    }
    valuesobj.forEach(function (element) {
        let name = element.Category;
        let x = parseInt(element.Amount);
        if (name=="expense") {
            total_expense += x;

        }
        else{
            total_income += x;
        }
        
        
    });
    alert("Your Income is: "+total_income+" Your Expense is: "+total_expense);
});