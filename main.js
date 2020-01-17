const pope = {
    name: "Francis",
    age: 83,
    hasTallHat: true,
    baseballCards: [],
    bless: function(blessee) {
        console.log(`I bless you, ${blessee}.`)
    },

    // "this" refers the pope object so this.age accesses the age property on pope, 
    // ++ increments his age by 1
    celebrateBirthday: function() {
        console.log(`Yay!`);
        this.age++;
    },
    addCard: function(card) {
        console.log(`Adding ${card} to collection`);
        this.baseballCards.push(card);
    },
    displayCards: function() {
        console.log("Look at my cards y'all!")
        for(let i=0; i<this.baseballCards.length; i++) {
            console.log(this.baseballCards[i]);
        }
    }
};


const tellMeAboutThePope = function() {
console.log(`The pope is named ${pope.name}. He is ${pope.age} years old`);
}

// tellMeAboutThePope();
// pope.bless("Bryan");
// //when we call the celebrateBirthday function it increments age by 1
// pope.celebrateBirthday();
// tellMeAboutThePope();

pope.displayCards();
pope.addCard("Mookie Wilson")
pope.addCard("Bill M")

pope.displayCards();
pope.addCard("Babe Ruth")
pope.addCard("Mickey Mantle");

pope.displayCards();