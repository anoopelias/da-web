const crypto = require("crypto");
const hash = crypto.createHash("sha256");
const input = process.argv[2];
console.log(input);

hash.update(input);
crypto.randomBytes(16, (err, salt) => {
  hash.update(salt);
  console.log("hash", hash.digest("hex"));
  console.log("salt", salt.toString("hex"));
});


