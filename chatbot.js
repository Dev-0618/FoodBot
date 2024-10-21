const chatbox = document.getElementById('chatbox');

// Add more recipes
const recipes = {
    "butter chicken": {
        desc: "Butter Chicken is a rich and creamy dish, with a spiced tomato and butter sauce.",
        recipe: "Ingredients: Chicken, butter, tomato puree, cream, spices. Instructions: Cook the chicken in butter, then add the tomato puree, cream, and spices. Let it simmer.",
        link: "https://www.youtube.com/watch?v=example1"
    },
    "masala dosa": {
        desc: "Masala Dosa is a crispy pancake made from rice and lentils, filled with spicy mashed potatoes.",
        recipe: "Ingredients: Rice, lentils, potatoes, mustard seeds, spices. Instructions: Soak and blend rice and lentils, cook as pancakes, prepare a potato filling and wrap it.",
        link: "https://www.youtube.com/watch?v=example2"
    },
    "pani puri": {
        desc: "Pani Puri is a popular Indian street food consisting of crispy hollow puris filled with spicy tangy water and mashed potatoes.",
        recipe: "Ingredients: Puri, potatoes, tamarind, mint, spices. Instructions: Prepare spicy water, fill puris with potatoes and tamarind water, serve immediately.",
        link: "https://www.youtube.com/watch?v=example3"
    },
    "biryani": {
        desc: "Biryani is a flavorful rice dish made with aromatic spices, meat or vegetables, and yogurt.",
        recipe: "Ingredients: Basmati rice, chicken or vegetables, yogurt, spices. Instructions: Marinate chicken, cook rice with spices, layer chicken and rice, and cook until aromatic.",
        link: "https://www.youtube.com/watch?v=example4"
    },
    "gulab jamun": {
        desc: "Gulab Jamun are deep-fried balls soaked in a sweet sugar syrup, flavored with cardamom and rose water.",
        recipe: "Ingredients: Khoya, sugar, cardamom, rose water. Instructions: Form khoya into balls, deep-fry until golden, soak in warm sugar syrup.",
        link: "https://www.youtube.com/watch?v=example5"
    },
    "rajma chawal": {
        desc: "Rajma Chawal is a comforting dish of kidney beans cooked in a spiced tomato gravy, served with rice.",
        recipe: "Ingredients: Kidney beans, tomatoes, onions, spices. Instructions: Cook kidney beans in a tomato-based gravy, and serve with steamed rice.",
        link: "https://www.youtube.com/watch?v=example6"
    },
    "palak paneer": {
        desc: "Palak Paneer is a vegetarian dish made of paneer (Indian cottage cheese) in a thick paste made from puréed spinach and seasoned with garlic, garam masala, and other spices.",
        recipe: "Ingredients: Paneer, spinach, garlic, garam masala, cream. Instructions: Blanch and puree spinach, cook paneer, then simmer in spices and cream.",
        link: "https://www.youtube.com/watch?v=example7"
    },
    "kheer": {
        desc: "Kheer is a traditional Indian sweet dish made of milk, rice, and sugar, flavored with cardamom and garnished with nuts.",
        recipe: "Ingredients: Rice, milk, sugar, cardamom, nuts. Instructions: Cook rice in milk, add sugar and cardamom, then garnish with nuts.",
        link: "https://www.youtube.com/watch?v=example8"
    },
    "chole bhature": {
        desc: "Chole Bhature is a popular North Indian dish made of spicy chickpeas (Chole) served with deep-fried bread (Bhature).",
        recipe: "Ingredients: Chickpeas, onions, tomatoes, spices, flour. Instructions: Cook chickpeas in a spicy gravy, and serve with deep-fried bread.",
        link: "https://www.youtube.com/watch?v=example9"
    },
    "vada pav": {
        desc: "Vada Pav is a popular Indian street food consisting of a spicy potato fritter placed between a bread bun, served with chutney.",
        recipe: "Ingredients: Potatoes, spices, bread bun, chutney. Instructions: Make spicy potato fritters, place in bread bun, and serve with chutney.",
        link: "https://www.youtube.com/watch?v=example10"
    }
    // Add more recipes here
};

// "help" command that lists available recipes
function getHelp() {
    let availableRecipes = Object.keys(recipes).join(", ");
    return `You can ask about any of these recipes: ${availableRecipes}. For example, type 'butter chicken' or 'biryani' to get the recipe.`;
}

// Function to handle user input and responses
function getResponse() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    let userHtml = `<div class="user"><img src="imgs/userIcon.png" alt="user icon"><p>${userInput}</p></div>`;
    chatbox.innerHTML += userHtml;
    
    // "help" command to list available recipes
    if (userInput === "help") {
        let botHtml = `<div class="bot"><img src="imgs/botIcon.png" alt="bot icon"><p>${getHelp()}</p></div>`;
        chatbox.innerHTML += botHtml;
    } else if (recipes[userInput]) {
        let botHtml = `
            <div class="bot">
                <img src="imgs/botIcon.png" alt="bot icon">
                <p><strong>Description:</strong> ${recipes[userInput].desc}</p>
                <p><strong>Recipe:</strong> ${recipes[userInput].recipe}</p>
                <p><a href="${recipes[userInput].link}" target="_blank">Watch Recipe Video</a></p>
            </div>`;
        chatbox.innerHTML += botHtml;
    } else {
        let botHtml = `<div class="bot"><img src="imgs/botIcon.png" alt="bot icon"><p>Sorry, I don't have that recipe yet. Type 'help' to see available recipes.</p></div>`;
        chatbox.innerHTML += botHtml;
    }
    
    document.getElementById('userInput').value = ""; // clear input
    chatbox.scrollTop = chatbox.scrollHeight; // scroll to bottom
}
