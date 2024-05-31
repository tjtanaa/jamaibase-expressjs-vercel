const express = require("express");
import JamAI from "jamaibase";

const jamai = new JamAI({
    baseURL: process.env["BASEURL"]!,
    apiKey: process.env["JAMAI_APIKEY"]!,
    projectId: process.env["PROJECT_ID"]!
});

const app = express();

app.get("/", (req: any, res: any) => res.send("Express on Vercel"));


app.get("/list-tables", async (req: any, res: any) => {
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