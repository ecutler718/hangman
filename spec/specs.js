describe('generateWord', function() {
    it("returns a random word", function() {
      expect(generatedWord()).to.be.a('string');
   });
});

describe('randWord', function() {
    it("returns a random word", function() {
      expect(randWord()).to.be.a('string');
   });
});

describe('underscore', function() {
    it("displays underscores for the number letters in string", function() {
      var testWord = "cow";
      expect(underscore(testWord)).to.eql("___");
    })
})

describe('wordCheck', function() {
  it("returns true bc the user letter is in the mystery word", function() {
    var testLetter = "a";
    var testMysteryWord = "supercalifrat";
    expect(wordCheck(testLetter, testMysteryWord)).to.eql(true);
  });

  it("returns false bc the user letter is NOT in the mystery word", function() {
    var testLetter = "a";
    var testMysteryWord = "togo";
    expect(wordCheck(testLetter, testMysteryWord)).to.eql(false);
  });
});

describe('gameOverCheck', function() {
  it("returns true if the the user guesses the word", function() {
    var testWord = "Cat";
    var testArray = "Cat";
    var testBody = 4;
    expect(gameOverCheck(testWord, testArray, testBody)).to.equal(true);
  })

  it("returns true if the the user guesses the word", function() {
    var testWord = "Cat";
    var testArray = "-at";
    var testBody = 7;
    expect(gameOverCheck(testWord, testArray, testBody)).to.equal(true);
  })

  it("returns false if the the game isn't over", function() {
    var testWord = "Cat";
    var testArray = "_at";
    var testBody = 4;
    expect(gameOverCheck(testWord, testArray, testBody)).to.equal(false);
  });
});

describe('messageCheck', function() {
  it("returns lose message if game is over from high bodycount", function() {
    var testBody = 6;
    expect(messageCheck(testBody)).to.equal("YOU LOSE!");
  });
});

// describe('user', function() {
//   it("takes users age", function() {
//     expect(user(12)).to.equal("pgOnly");
//   });
// });
//
// describe('Ticket', function() {
//   it("generates price from ticket object", function() {
//   var testTicket = new Ticket(13, "12.00", "Wizard of Oz Anniversary Show")
//     expect(testTicket.price()).to.equal(14);
//   });
// });
