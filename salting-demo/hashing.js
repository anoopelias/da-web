const crypto = require("crypto");
const hash = crypto.createHash("sha256");
const input = process.argv[2];
console.log(input);

hash.update(input);
console.log(hash.digest("hex"));
