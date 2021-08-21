const clashApi = require("clash-of-clans-api");
require("dotenv").config();

let client = clashApi({
    token: process.env.TOKEN
})

class API {
    async showPlayerInfo(tag) {
        try {
            let playerInfo = await client.playerByTag(tag);
            console.log(playerInfo);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = API;