const http = require('http');
const express = require('express');

const app = express();

app.use(express.json());

const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

app.post('/sms', (req, res) => {
    const {phoneNumber} = req.body;
    client.verify.services.create({friendlyName: '코드를 입력해주세요'})
        .then(service => {
            client.verify.services(service.sid)
                .verifications
                .create({locale: 'ko', to: `+82${phoneNumber}`, channel: 'sms'})
                .then(verification => res.json({payload: verification}));
        });
});

app.post('/sms/verify', (req, res) => {
    const {code, serviceSid, phoneNumber} = req.body;
    client.verify.services(serviceSid)
        .verificationChecks
        .create({to: `${phoneNumber}`, code: code})
        .then(verification_check => {
            if(verification_check.status === 'approved') {
                res.json({success: true})
            } else {
                res.json({success: false})
            }
        });
});

http.createServer(app).listen(4000, () => {
    console.log(`Express server listening on port ${4000}`);
});