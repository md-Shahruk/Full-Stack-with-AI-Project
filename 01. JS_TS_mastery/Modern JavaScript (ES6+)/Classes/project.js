// Mini Project — Task Manager
/*
 first: class Task
      - title
      - completed
      - complete()
 second: class TaskManager
      - addTask()
      - removeTask()
      - completeTask()
      - listTasks()
*/

class Task{
    constructor(title){
        this.title = title;
        this.completed = false;

    }

    complete(){
        this.completed = true;
    }
}

class TaskManager{
    constructor(){
        this.tasks = [];
    }

    addTask(title){
        const task = new Task(title);
        this.tasks.push(task);
    }

    removeTask(index){
        return this.tasks.splice(index, 1);
    }

    completeTask(index){
     return this.tasks[index].complete();
    }

    listTask(){
        this.tasks.forEach((task , index)=>{
            const status = task.completed ? "completed" : "incomplete";
             console.log(`${index + 1}. ${task.title} [${status}]`);
        });
    }
}


const mn = new TaskManager();
mn.addTask("Learn OOP");
mn.addTask("Learn Js");
mn.addTask("Complete project");

mn.listTask();

mn.completeTask(2);
mn.listTask();

console.log("_____Remove Task______");
mn.removeTask(2);
mn.listTask();
