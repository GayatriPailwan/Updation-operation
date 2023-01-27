
var toDoArr=[];
function saveToDo(){
    var value=document.getElementById('data').value;
    toDoArr.push(value);
    localStorage.setItem("todos",toDoArr.toString());
    fetchToDo();

}
function fetchToDo(){
    var str= localStorage.getItem("todos");
    if(str!=null){
        toDoArr= str.split(",");

    }

    var htmlString=`
            <tr>
                <th> Sr NO.</th>  
                <th> Title</th>  
                <th> Actions</th>  
            
            
            </tr>
            `;

            var counter=0;

            toDoArr.forEach((element) => {

                counter++;
                htmlString += `
                        <tr>
                            <td>${counter}</td>
                            <td>${element}</td>
                            <td>
                                <button class= "btn btn-outline-warning" onclick="editToDo(${counter-1})"> Edit </button>
                                <button class= "btn btn-outline-danger" onclick="deleteTodo(${counter-1})"> Delete </button>        
                                
                            </td>

                        </tr>
                
                `
            })
            document.getElementById('todo').innerHTML=htmlString;



}

function editToDo(index){
    var newValue=prompt("Do you really want to change this value?",toDoArr[index] );
    if(newValue!=""){
        toDoArr[index]=newValue;
        localStorage.setItem("todos",toDoArr.toString());
        fetchToDo();
    }
}
function deleteTodo(index){
    toDoArr.splice(index,1);
    localStorage.setItem("todos",toDoArr.toString());
    fetchToDo();


}