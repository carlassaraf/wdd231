// JSON url
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
// Container element
const cards = document.querySelector("#cards");

/**
 * Gets the Prophets data as a JSON from the Fetch API
 * @returns Promise
 */
async function getProphetData() {

    try {
        // Wait for fetch resolution
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTML error: ${response.status}`);
        }

        // Wait for response data to become JSON
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(`Could not get Prophets data: ${error}`);
    }
}

/**
 * Displays the prophets in the page
 * @param {Array} prophets Array of prophets
 */
const displayProphets = (prophets) => {
    // Iterate through every prophet in the JSON data
    prophets.forEach(prophet => {

        const card = document.createElement("section");
        card.setAttribute("class", "card");

        const fullName = document.createElement("h2");
        fullName.innerText = `${prophet.name} ${prophet.lastname}`;

        const birth = document.createElement("p");
        birth.innerText = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

        const death = document.createElement("p");
        death.innerText = `Died: ${prophet.death}`;
        
        const portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${fullName.innerText} - ${numberToOrdinal(prophet.order)} Latter-day President`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        
        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(death);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

/**
 * Gets the number as an ordinal string
 * @param {Number} number number to convert to ordinal string 
 * @returns number as ordinal string
 */
function numberToOrdinal(number) {
    // Get the first digit
    let j = number % 10;
    // Get the first and second digits
    let k = number % 100;
    // Every number ending with 1 except 11
    if (j === 1 && k !== 11) {
        return number + "st";
    }
    // Every number ending with 2 except 12
    if (j === 2 && k !== 12) {
        return number + "nd";
    }
    // Every number ending with 3 except 13
    if (j === 3 && k !== 13) {
        return number + "rd";
    }
    // All the others
    return number + "th";
};

getProphetData().then(data => displayProphets(data.prophets));