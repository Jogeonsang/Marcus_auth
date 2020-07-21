import * as express from 'express';
import * as http from 'http';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

console.log(process.env.TWILIO_SID);
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

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

http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Express server listening on port ${process.env.PORT}`);
});