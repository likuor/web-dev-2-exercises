// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
<<<<<<< HEAD
  const taskObj = {
    title: title,
    description: description,
    completed: false,
    markCompleted: function () {
      return (taskObj.completed = true);
    },
    logState: function () {
      return console.log(
=======
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function () {
      task.complete = true;
    },
    logTaskState: function () {
      console.log(
>>>>>>> c63b61e49609615821e86337b3944e228c968aac
        `${this.title} has${this.complete ? ' ' : ' not '}been completed`
      );
    },
  };
<<<<<<< HEAD

  return taskObj;
}

=======
  return task;
  // taskTitles.push(title);
  // taskComplete.push(false);
}

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   const title = task.title;
//   const complete = task.complete;
//   console.log(`${title} has${complete ? ' ' : ' not '}been completed`);
// }

// DRIVER CODE BELOW

>>>>>>> c63b61e49609615821e86337b3944e228c968aac
const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];
<<<<<<< HEAD
console.log(tasks);

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
=======

task2.logTaskState(); // Clean Cat Litter has not been completed
console.log('complete task', task2.completeTask());
task2.logTaskState(); // Clean Cat Litter has been completed

console.log(tasks);

// function Person(name) {
//   this.name = name;
// }

// const person1 = new Person('Arthur'); // {name:'Arthur'}
>>>>>>> c63b61e49609615821e86337b3944e228c968aac
