const axios = require("axios");

axios.get("https://ozarktechwebdev.com/api/jokes.json").then((response) => {
    if (response.status === 200) {
        const jokes = response.data.jokes;
        const randomIndex = Math.floor(Math.random() * jokes.length);

        const joke = jokes[randomIndex];
        console.log(
            `Here's a developer joke for today:\n\nQ: ${joke.question}\nA: ${joke.answer}`,
        );
    } else {
        console.error("Could not fetch a joke. Try again later.");
    }
});
