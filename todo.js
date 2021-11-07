const list = {
    "make a bed": "Done",
    "write a post": "In Progress",
    "read a book": "To Do",
}

function changeTask(task, status) {
    list[task] = status;
}

function addTask(newtask) {
    list[newtask] = "To Do";
}

function deleteTask(task) {
    delete list[task];
}

function showList() {

    console.log("To Do:")

    for (let task in list) {
        if (list[task] === "To Do") {
            console.log(task)
        }
    }

    console.log("In Progress:")

    for (let task in list) {
        if (list[task] === "In Progress") {
            console.log(task)
        }
    }

    console.log("Done:")

    for (let task in list) {
        if (list[task] === "To Do") {
            console.log("-")
        }
    }

}

addTask("have a rest");
changeTask("have a rest", "Done");

showList();