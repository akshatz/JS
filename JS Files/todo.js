var  user_name, user, Todo12, ToDO, duedate, reminder, categories, isChecked;
//Add function
function newElement() {
  var description= document.getElementById("description").value;
  var reminder= document.getElementById("date").value;
  var duedate=document.getElementById("duedate").value;
  var categories=document.getElementById("categories").value;
  var todoObj = {
    "Description": description,
    "Reminder": reminder,
    "Due Date":duedate,
    "Categories":categories
 }
 //local storage
 user_name = sessionStorage.getItem("user"); //fetch data from session storage
 console.log(sessionStorage.getItem('user'))
      
      var Todo12 = JSON.parse(localStorage.getItem("userDetails"));
      
      for(var i = 0; i < Todo12.length; i++)
      {
     console.log(`IN for loop`);
        if(user_name == Todo12[i].Username)   // username found then break
        {
          Todo12[i].ToDO.push(todoObj);
          break;
        }
      }
       localStorage.setItem("userDetails",JSON.stringify(Todo12));
    }
//Display function  
    function display_element()
  {
    var Todo12 = JSON.parse(localStorage.getItem("userDetails"));
      //var is_public = document.getElementById("is_public").value;
      var table =document.createElement("table");
      var td = document.createElement("td");
      var checkbox =document.createElement("input");
      checkbox.type="checkbox";
      checkbox.id="id";
      checkbox.value="value";
      checkbox.name="checkbox";
      user_name = sessionStorage.getItem("user"); //fetch data from session storage
      for(var i = 0; i < Todo12.length; i++)
      {
        console.log(`IN for loop`);
        if(user_name == Todo12[i].Username)   // username found then break
        {
          console.log(Todo12[i]);
          break;
        }
      }
      
    for(var j= 0; j< Todo12[i].ToDO.length ;j++){

      var td1=document.createElement('td')
      var checkbox= document.createElement('input');
      checkbox.type = "checkbox"; 
      checkbox.id="check"
      td1.appendChild(checkbox);
      document.getElementById("todo_table").appendChild(td1);
  
      var description1 =document.createTextNode(Todo12[i].ToDO[j].Description);
      var td2 =document.createElement("td");
      td2.appendChild(description1);
      document.getElementById("todo_table").appendChild(td2);

      var td3 =document.createElement("td");
      var categories=document.createTextNode(Todo12[i].ToDO[j].Categories);
      td3.appendChild(categories);
      document.getElementById("todo_table").appendChild(td3);

      var td4 =document.createElement("td");
      var duedate =document.createTextNode(Todo12[i].ToDO[j].duedate);
      td4.appendChild(duedate);
      document.getElementById("todo_table").appendChild(td4);

      var td5 =document.createElement("td");
      var reminder =document.createTextNode(Todo12[i].ToDO[j].Reminder);
      td5.appendChild(reminder);
      document.getElementById("todo_table").appendChild(td5);
    }
  }
//Delete Function
  function onDelete(){
  var Todo12 = JSON.parse(localStorage.getItem("userDetails"));
  var checkbox =document.createElement("input");
  var todo_table =document.createElement("table");
  user_name = sessionStorage.getItem("user"); //fetch data from session storage
  // for(var i = 0; i < Todo12.length; i++)
  {
    // if(user_name == Todo12[13].Username)   // username found then break
  //   { 
      // break;
  //   }
  }
  // for(var j = Todo12[i].ToDO.length-1; j >= 0; j--){
    // document.getElementById("todo_table").appendChild(checkbox);
    // if(check.checked === true){
    //   console.log(check);
    //   checker+=1;
    //   table.deleteROw(i+1);
    //   Todo12[i].ToDO.splice(i,1);
    //   console.log(Todo12[i].ToDO.splice(i,1));
    //   localStorage.setItem("userDetails",JSON.stringify(Todo12));
    //   location.reload();
  }
// }

// if(check.checked === true){
  // ToDO.deleteRow(13);
  var i = Todo12.ToDO[13].checked;
  document.getElementById("todo_table").deleteRow(i);
  data = localStorage.getItem("Todo12");
  data.splice(i, 1)
// Todo12[13].ToDO[13].splice(13,1);
// console.log(Todo12[13].ToDO.splice(13,1));
localStorage.setItem("userDetails",JSON.stringify(Todo12));
  
    // var description1 =document.createTextNode(Todo12[i].ToDO[j].Description);
    // var td2 =document.createElement("td");
    // td2.appendChild(description1);
    // document.getElementById("todo_table").appendChild(td2);


    // var td3 =document.createElement("td");
    // var categories=document.createTextNode(Todo12[i].ToDO[j].Categories);
    // td3.appendChild(categories);
    // document.getElementById("todo_table").appendChild(td3);

    // var td4 =document.createElement("td");
    // var duedate =document.createTextNode(Todo12[i].ToDO[j].duedate);
    // td4.appendChild(duedate);
    // document.getElementById("todo_table").appendChild(td4);

    // var td5 =document.createElement("td");
    // var reminder =document.createTextNode(Todo12[i].ToDO[j].Reminder);
    // td5.appendChild(reminder);
    // document.getElementById("todo_table").appendChild(td5);
  
function onSubmit(){
  sessionStorage.clear();
  document.write("Your session Expired. Pls relogin to complete the transaction.");
  window.location="login.html";
}
function profile(){
  window.location='profile.html';
}