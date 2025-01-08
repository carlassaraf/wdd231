// Current year
const date = new Date();
document.querySelector("#currentyear").innerText = date.getFullYear();

// Last modified
document.querySelector("#lastModified").innerText = document.lastModified;

// Shows all courses
displayCourses(courses);

// Click event for filters
document.querySelectorAll(".filter").forEach(filter => {

    filter.addEventListener("click", (e) => {
        // Get filter name
        const subject = e.target.innerText.toLowerCase();
        // If target is All, display all courses
        if(subject === "all") { displayCourses(courses); }
        else {
            // Filter by course subject
            const filtered = courses.filter(course => course.subject.toLowerCase() === subject);
            displayCourses(filtered);
        }

        // Set active class on clicked filter
        document.querySelectorAll(".filter").forEach(filter => filter.classList.remove("active"));
        e.target.classList.add("active");
    })
});

/**
 * Displays selected courses on the page
 * @param {Array} courses list of courses to display 
 */
function displayCourses(courses) {
    // Get container
    const container = document.querySelector("#courses");
    // Clear container
    container.innerHTML = "";
    // Display every course in array
    courses.forEach(course => {

        const div = document.createElement("div");
        div.setAttribute("class", "course");
        div.innerText = `${course.subject} ${course.number}`;
        if(course.completed) {
            div.classList.add("completed");
        }
    
        container.append(div);
    });
}