const clashApi = require("clash-of-clans-api");
require("dotenv").config();

let client = clashApi({
    token: process.env.TOKEN
})

/**
 * @class
 * @classdesc Class qui contient toutes les fonctions disponible pour utiliser clash-tracker
 */

class API {

    /**
     * Fonction qui permet de trouver les informations à propos d'un joueur demander
     * @param { String } tag
     * @return { Promise }
     */

    async showPlayerInfo(tag) {
        try {
            let playerInfo = await client.playerByTag(tag);
            console.log(playerInfo);
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * Fonction qui permet de trouver les informations à propos d'un clan demander
     * @param { String } tag
     * @return { Promise }
     */

    // async showClanByTag(tag) {
    //     try {
    //         let clanInfo = await client.clanByTag();
    //         console.log(clanInfo);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
}

// Exportation de la class API pour la re utiliser
module.exports = API;