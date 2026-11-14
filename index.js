const axios = require("axios");

axios.get("https://ozarktechwebdev.com/api/jokes.json").then((response) => {
    console.log(response.data);
});
