// Current year
const date = new Date();
document.querySelector("#currentyear").innerText = date.getFullYear();

// Last modified
document.querySelector("#lastModified").innerText = document.lastModified;

// Dynamic rendering of courses

const container = document.querySelector("#courses");

// Create a new element for each course

courses.forEach(course => {

    const div = document.createElement("div");
    div.setAttribute("class", "course");
    div.innerText = `${course.subject} ${course.number}`;
    if(course.completed) {
        div.classList.add("completed");
    }

    container.append(div);
});