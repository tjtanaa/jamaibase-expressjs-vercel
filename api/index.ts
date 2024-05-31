const express = require("express");
const jamaibase = require("jamaibase");

const jamai = new jamaibase.JamAI({
    baseURL: "https://api.jamaibase.com",
    apiKey: "jamai_sk_eeb00c6b81664d4fde5de89dca0d6fa312fdad4a294f1219",
    projectId: "proj_2fc065ff9882f38201e6bde2"
});

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));


app.get("/list-tables", (req, res) => {
    const response = await jamai.addRow({
        table_type: "action",
        data: [
            {
                Country: "Germany"
            },
            {
                Country: "USA"
            },
            {
                Country: "Malaysia"
            },
            {
                Country: "UK"
            },
            {
                Country: "Chile"
            },
            {
                Country: "Bhutan"
            },
            {
                Country: "France"
            }
        ],
        table_id: "CountryCapital",
        reindex: true,
        concurrent: true
    });
  
    const listRowResponse = await jamai.listRows({
        table_type: "action",
        table_id: "CountryCapital"
    });
    res.send(JSON.stringify(listRowResponse));

}
    


);


app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;