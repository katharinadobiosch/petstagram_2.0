if (process.env.NODE_ENV === "production") {
    module.exports = require("./prod");
} else {
    module.exports = require("./dev");
}

// module.exports = {
//     MONGOURI:
//         "mongodb+srv://kathi:tUsyNB0GAEFl7BqQ@petstagram.8enphzf.mongodb.net/?retryWrites=true&w=majority&appName=petstagram",
// };
