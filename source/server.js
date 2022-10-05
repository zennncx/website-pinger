const fetch = require("node-fetch");
const Links = [] // ["", "url", "url"]
const colors = require("colors") //styles

console.log("Please wait...".green)
if (Links.length < 1) {
    console.log("No links found.".red)
    return process.exit()
}
Links.forEach(async (url) => {
    setInterval(async () => {
        try {
            const response = await fetch(url);
            if (response.status == 200) {
                console.log(`Link :- ${url}・Status :- ${response.status}\n`.green);
            } else {
                console.log(`Link :- ${url}・Status :- ${response.status}\n`.yellow);
            }
        } catch (error) {
            console.log(`Link :- ${url}・Error :- ${error}\n`.red);
        }
    }, 10000);
})

require('http').createServer((req, res) => res.end('Server Started')).listen(2000)
