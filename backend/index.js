const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const https = require("https");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// Create an HTTPS agent with rejectUnauthorized set to false
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put('https://api.chatengine.io/users',
            { username: username, secret: username, first_name: username },
            {
                headers: { "private-key": "cf38ebde-b89a-4c32-9555-385058c27907" },
                httpsAgent: httpsAgent, // Use the custom agent to ignore self-signed certificate issues
            }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        if (e.response) {
            return res.status(e.response.status).json(e.response.data);
        } else {
            console.error("Error without response object:", e);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});