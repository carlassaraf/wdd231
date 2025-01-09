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

// Add hamburger menu event
document.querySelector("#hamburger").addEventListener("click", () => {
    // When clicked, toggle visibility on menu
    document.querySelector(".navigation").classList.toggle("visible");
    // Change icon on menu
    document.querySelector("#hamburger").classList.toggle("close");
});

// Credits calculator
const requiredCredits = courses.reduce((total, course) => total + course.credits, 0);
const fulfilledCredits = courses.reduce((total, course) => {   
    // Check whether the course is completed 
    if(course.completed) { total += course.credits; }
    return total;
}, 0);
const unfulfilledCredits = requiredCredits - fulfilledCredits;

document.querySelector("#credits-required").innerText = requiredCredits;
document.querySelector("#credits-fulfilled").innerText = fulfilledCredits;
document.querySelector("#credits-unfulfilled").innerText = unfulfilledCredits;