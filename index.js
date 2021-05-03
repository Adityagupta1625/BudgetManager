let addbtn = document.getElementById("add");
let show = document.getElementById("show");
// buttons

let date = document.getElementById("date");
let title = document.getElementById("title");
let amt = document.getElementById("amount");
let income = document.getElementById('income');
let expense = document.getElementById('expense');

addbtn.addEventListener("click", function (e) {
    // let nothing = document.getElementById("nothing");
    // nothing.innerHTML = "";
    
    let values = localStorage.getItem("values");
    // retrive from local storage.
    let category;
    
    if(income.checked){
        category="income";
    }
    else{
        category="expense";
    }
    let myobj = {
        Date: date.value,
        Title: title.value,
        Amount: amt.value,
        Category: category,
    };
    // declaring my object to store values.

    if (values == null) {
        valuesobj = [];
    }
    else {
        valuesobj = JSON.parse(values);
    }
    // condition to check whether it has some data or not.

    valuesobj.push(myobj);
    // adding my object to array.

    localStorage.setItem("values", JSON.stringify(valuesobj));
    // updating local storage.

    date.value = "";
    title.value = "";
    amt.vale = "";
   
    // if else to get values
    alert("Succesfully added transacrtion");

    // again  making them null after storing.
});