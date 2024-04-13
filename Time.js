

var arrayOfObjects = [
    { category: "Category 1", subCategory: "Sub-category A", duration: 30, task: "Task 1",id:1, },
    { category: "Category 2", subCategory: "Sub-category B", duration: 45, task: "Task 2",id:2,  },
    { category: "Category 1", subCategory: "Sub-category A", duration: 60, task: "Task 3",id:3,  },
    {
        category: "Work",
        subCategory: "Meetings",
        duration: "1 hour",
        task: "Team meeting",id:4, 
    },
    {
        category: "Personal",
        subCategory: "Fitness",
        duration: "45 minutes",
        task: "Morning jog",id:5, 
    },
    {
        category: "Study",
        subCategory: "Learning new language",
        duration: "30 minutes",
        task: "Practice vocabulary",id:6, 
    }
];

function ShowValue(category, subCategory, duration, task,i) {
    var table = document.getElementById('table-list');
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = category;
    cell2.innerHTML = subCategory;
    cell3.innerHTML = duration;
    cell4.innerHTML = task;
}


arrayOfObjects.forEach((d,i) => {
    ShowValue(d.category,
        d.subCategory,
        d.duration,
        d.task,
    i);
});

function update(i){
console.log(i)
}


var isRunning = false;
seconds = 0;
minutes = 0;
hours = 0;
interval = 0;

function starting() {
if (!isRunning) {
    interval = setInterval(() => {
        seconds += 1;
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
            if (minutes >= 60) {
                hours += 1;
                minutes = 0;
            }
        }
        isRunning = true;
        document.getElementById('startbtn').innerHTML = "Stop";
        var formatted = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        document.querySelector('.stopwatch').innerHTML = formatted;
    }, 1000)
} else {
    isRunning = false;
    clearInterval(interval);
    document.getElementById('startbtn').innerHTML = "Start";
}
}

console.log( document.querySelector('.stopwatch').innerHTML)
function resetting() {
clearInterval(interval);
seconds = 0;
minutes = 0;
hours = 0;
document.getElementById('startbtn').innerHTML = "Start";
var formatted = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
document.querySelector('.stopwatch').innerHTML = formatted;
}

document.addEventListener('submit',(d)=>{
    d.preventDefault();
    console.log("welcome")
    var CATEGORY = document.getElementById('input1').value;
    var SUB_CATEGORY = document.getElementById('input2').value;
    var DURATION =  document.querySelector('.stopwatch').innerHTML;
    var TASK = document.getElementById('input3').value; 
    console.log(CATEGORY,SUB_CATEGORY,DURATION,TASK)
    arrayOfObjects.push({CATEGORY,SUB_CATEGORY,DURATION,TASK});
    ShowValue(CATEGORY,SUB_CATEGORY,DURATION,TASK)
    console.log(CATEGORY,SUB_CATEGORY,DURATION,TASK)
    resetting()
    })

function remove(index){
    arrayOfObjects.slice(index,1);

    var table = document.getElementById('table-list');

    table.innerHTML = "";

    arrayOfObjects.forEach((d,i)=>{
        ShowValue(d.category,d.subCategory,
        d.duration,d.task,i)
    })
}