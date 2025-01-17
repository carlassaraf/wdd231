/**
 * Gets data from JSON file
 * @returns Promise
 */
async function getJSON() {
    // URL for JSON file
    const url = "https://carlassaraf.github.io/wdd231/chamber/data/members.json"
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
        console.error(`Could not get directory data: ${error}`);
    }
}

// Container
const main = document.querySelector("main");
// Display directory info from JSON
getJSON().then(directory => {

    directory.forEach(member => {

        const card = document.createElement("div");
        card.setAttribute("class", "card");
    
        const img = document.createElement("img");
        img.setAttribute("src", member.icon_file);
        img.setAttribute("alt", member.name);
    
        const address = document.createElement("p");
        address.setAttribute("class", "address");
        address.innerText = member.address;
    
        const number = document.createElement("p");
        number.setAttribute("class", "number");
        number.innerText = member.phone_number;
    
        const p = document.createElement("p");
        const web = document.createElement("a");
        web.setAttribute("id", "web");
        web.innerText = member.website_url;
    
        p.append(web);
        card.append(img, address, number, p);
        main.append(card);
    
    });
});