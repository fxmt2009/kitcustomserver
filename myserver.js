

import {handler} from './build/handler.js';
import express from 'express';

const app = express();

app.get("/", (req, res)=>{

    console.log("====server index====")
    res.end("homeok")
})

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
    res.json({"letsgo":"server is here in healthcheck"});
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.get("/expresskit", (req, res)=>{

    res.json({"expresskit" : "expresskit is saying hi"})
})

app.listen(3000, () => {
    console.log('listening on port 3000');
});