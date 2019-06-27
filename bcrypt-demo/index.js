const bcrypt = require("bcrypt");
const saltRounds = 1;
const password = "Expecto Patronum";

bcrypt.hash(password, 0, (err, hash) => {
  console.log("hash", hash);

  bcrypt.compare(password, hash, (err, res) => {
    console.log("matching", res);
  });

  const anotherPassword = "Expelliarmus";
  bcrypt.compare(anotherPassword, hash, (err, res) => {
    console.log("not-matching", res);
  });
});
