document.getElementById('task-button').addEventListener('click',function(){

    // get time 
const tasktime = document.getElementById('add-time-field');
const totalTime = tasktime.value;

// set time 
const settaskTime = document.getElementById('add-time');
settaskTime.innerText = totalTime;

})


document.getElementById('task-button').addEventListener('click',function(){

    // get work
const task = document.getElementById('add-task-field');
const totalTask = task.value;

// set work
const settask = document.getElementById('add-work');
settask.innerText = totalTask;

})