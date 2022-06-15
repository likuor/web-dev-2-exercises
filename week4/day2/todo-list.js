// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const taskObj = {
    title: title,
    description: description,
    completed: false,
    markCompleted: function () {
      taskObj.completed = true;
    },
    logState: function () {
      return console.log(
        `${this.title} has${this.complete ? ' ' : ' not '}been completed`
      );
    },
  };
  return taskObj;
}

const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
