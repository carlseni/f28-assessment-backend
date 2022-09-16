module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["You're good enough!", "You're smart enough!", "Gosh darn it, people like you!"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}