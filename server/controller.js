let inspiration = require('./db.json')
let inspirationID = 5;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["To truely find yourself you should play hide and seek alone.", "You are not Illiterate.", "IF you eat something and no one see you eat it, it has no calories.", "Your problem just got bigger. Think, what have you done?", "No snowflake in an avalanche ever feels responsible."];

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },

    /////// inspiration

    getInspiration: (req, res) => {
            res.status(200).send(inspiration)
        }, 

    
    writeInspiration: (req, res) => {
        const {quote, source} = req.body;

        let newInspiration = {
            quote,
            source,
            id: inspirationID
        }
        console.log(newInspiration);
        inspiration.push(newInspiration)
        inspirationID++;
        res.status(200).send(inspiration)


    },

    deleteInspiration: (req, res) => {
        let index = inspiration.findIndex(elem => elem.id === +req.params.id)
        inspiration.splice(index, 1)
        res.status(200).end(inspiration)
    }
}
