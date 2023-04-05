require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const port = process.env.PORT || 3000;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twillio = require('twilio')(process.env.TWILLIO_ACCOUNT_SID, process.env.TWILLIO_AUTH_TOKEN);
twillio.messages.list({to: 'number'})
    .then(messages => {
      console.log(messages.length)
      messages.forEach(m => console.log(m.body))
      })
      .catch(err => console.log(err))
      app.use(bodyParser.urlencoded({ extended: false }));
      app.post('/sms', (req, res) => {
          const twiml = new MessagingResponse();
          twiml.message('The Robots are coming! Head for the hills!');
          res.writeHead(200, {'Content-Type': 'text/xml'});
          res.end(twiml.toString());
        });
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
        client.messages
          .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: 'number',
            to: 'number',
            twiml: '<Response><Message>Hello from your pals at Twilio!</Message></Response>'
            })
// Tutorial version 
