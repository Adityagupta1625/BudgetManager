console.log("Welcome to this Budget manager site by pip_hacks");

let addbtn=document.getElementById("add");
let show=document.getElementById("show");
let printTxt=document.getElementById("print");
let calculate=document.getElementById("calculate");
// buttons

let date=document.getElementById("date");
let title=document.getElementById("title");
let amt=document.getElementById("amount");
let category=document.getElementById("check");

// input fields


let expense=document.getElementById("expense");
let income=document.getElementById("income");
// checkboxes

let main=document.getElementById("table").style.visibility="hidden";
// declaring table and other elem to show on show only

//  declaring elemnts and taking their ids.



// add event listner
addbtn.addEventListener("click",function(e){
    let nothing=document.getElementById("nothing");
    nothing.innerHTML="";
    let values=localStorage.getItem("values");
    // retrive from local storage.

    let myobj={
        Date:date.value,
        Title:title.value,
        Amount:amt.value,
        Category:category.value
    };
    // declaring my object to store values.

    if (values==null) {
        valuesobj=[];
    }
    else{
        valuesobj=JSON.parse(values);
    }
    // condition to check whether it has some data or not.

    valuesobj.push(myobj);
    // adding my object to array.

    localStorage.setItem("values",JSON.stringify(valuesobj));
    // updating local storage.

    date.value="";
    title.value="";
    amt.value="";
    category.value="";
    // if else to get values

 
    // again  making them null after storing.
});

// show event listner
// show.addEventListener("click",function(){
    
// });
function showValues(){
    console.log("showing");
    let values=localStorage.getItem("values");
    // retrive from local storage.

    if (values==null) {
        valuesobj=[];
    }
    else{
        valuesobj=JSON.parse(values);
    }
    // condition to check whether it has some data or not.

    let html="";
    // declaring html

    valuesobj.forEach(function(element,index) {
        html+=`   <tr class="find">
        <td>${index+1}</td>
        <td>${element.Date}</td>
        <td>${element.Title}</td>
        <td>${element.Category}</td>
        <td>${element.Amount}</td>
        <td> <button class="btn btn-primary mx-3 my-2" id="${index}" onclick="del(this.id)">Delete </button></td>
    </tr>`;    
    });
    let see=document.getElementById("see");
    let nothing=document.getElementById("nothing");
    // getting target table

    if (valuesobj.length!=0) {
        nothing.innerHTML="";
        
        see.innerHTML=html;
        let main1=document.getElementById("table").style.visibility= "visible";
        // setting html of target table
    }
 
    else{
        nothing.innerHTML="<p>Nothing to show</p>";
        // set html=some message;
    }
}

// delte function
function del(index){
    let values=localStorage.getItem("values");
    if (values==null) {
        valuesobj=[];
    }
    else{
        valuesobj=JSON.parse(values);
    }
    let confirmation=confirm("Do you want to delete the row?");
    if (confirmation) {
        
        valuesobj.splice(index,1);
        // delting in array
        localStorage.setItem("values",JSON.stringify(valuesobj));
        // updating local storage 
        window.location.reload();
        // showing values
    }
    }



// function to print
printTxt.addEventListener("click",function(){
    let temp=document.body.innerHTML;
    // save the org data in varible

    let table=document.getElementById("table").innerHTML;
    // getting target
    
    document.body.innerHTML=table;
    window.print();
    // printing
    document.body.innerHTML=temp;
    // making  things normal 
});

// function to calculate
calculate.addEventListener("click",function(){
    let total_income=0;
    let total_expense=0;
    let total_undefined=0;
    let values=localStorage.getItem("values");
    // retrive from local storage.

    if (values==null) {
        valuesobj=[];
    }
    else{
        valuesobj=JSON.parse(values);
    }
    let message=document.getElementById("message");
    valuesobj.forEach(function(element) {
        let name=element.Category;
       
        let x=parseInt(element.Amount);
        if (name.localeCompare("expense")){
            total_expense+=x;
    
        }
        else if(name.localeCompare("income")){
            total_income+=x;
        }
        else{
            total_undefined+=x;
        }
        
    });
    message.innerHTML=`<p>Your Budget for the period is as follow-<br>expenses are-${total_income}<br>income is-${total_expense}<br>undefined is-${total_undefined}</p>`
});
