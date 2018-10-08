const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();

app.get("/", (req, res) => {
  res.json(null);
});

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("The Robots are coming! Head for the hills!");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

http.createServer(app).listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
