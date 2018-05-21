const fs = require("fs");

// Specify json file source directory
const dir = process.argv[2];

fs.readdir(dir, processFiles);

function processFiles(error, list) {
    if (error) return console.error(error);
    // Filter .json files
    const ext = ".json";
    for (let i = 0; i < list.length; i++) {
        if (list[i].substr(list[i].length - ext.length, ext.length) == ext) {
            // console.log(list[i]);
            const fileContents = fs.readFileSync(
                dir + (!dir.endsWith("/") ? "/" : "") + list[i],
                "utf8"
            );
            const entry = JSON.parse(fileContents);
            fs.writeFile(`${dir + list[i]}.txt`, entry.text, err => {
                if (err) throw err;
            });
            const entryDate = new Date(entry.date_journal);
            // --date '2018-05-07 13:38:58'
            console.log(
                `dayone2 new -j Journey -z America/New_York --date='${entryDate
                    .toISOString()
                    .replace("T", " ")
                    .substr(0, 19)}' ${
                    entry.tags.length > 0 ? "--t " + entry.tags.join(" ") : ""
                } < ${dir + list[i]}.txt`
            );
        }
    }
}
