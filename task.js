// TASK MANAGER

let toDos = true;
let userEntry;
let taskEntry;
      
userEntry = prompt(`TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manageer
`
);
while (toDos){
     while (true) {
           if  (userEntry.toUpperCase() === `CLOSE`){
            alert(`Thank you for using Task Manager.`);
            // toDos = false;
            break;
       }
     
      else if (userEntry.toUpperCase() === `TASKS`)
            alert(`Charge MacBook`,`Master JavaScript`);
      
      else if (userEntry.toUpperCase() === `NEW`)
            prompt(`Enter your new task below.`);

      else  (userEntry.toUpperCase() === `REMOVE`)
            prompt(`Which task to you wish to remove?`);
            break;      
      }    
              break;
}


  