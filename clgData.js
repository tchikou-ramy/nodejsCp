const fs = require("fs");

fs.readFile("C:/Users/LENOVO/Desktop/React/nodejs/welcome.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    }
);