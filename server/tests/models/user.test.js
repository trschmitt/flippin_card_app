const db = require("../../models");
const User = db.user;
const Deck = db.deck;

describe("User Model", () => {
  describe("user:deck relationship", () => {

    afterEach(() => {
      return User.destroy({where: {}});
    });
    afterEach(() => {
      return Deck.destroy({where: {}});
    });

    it("has many decks", () => {
      return User.build({
        username: "test",
        email: "test@gmail.com",
        password: "password"
      }).then(user => {
        return Deck.build({
          title: "Flippin Test Title"
        }).save().then(deck => {
          User.findById(user.id, {include: {model: Deck} }).then((user) => {
            expect(user.decks).toBe(1);
          })
        });
      });
    });

  });
});
