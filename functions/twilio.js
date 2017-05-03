const twilio = require('twilio');
// twilio nodejs client is used, not a http request
const accountSid = 'AC5111fee9ed01c526cb37baefdf57b8cf';
const authToken = '06fff3c283c3ad839481236ffdb477a5';

module.exports = new twilio.Twilio(accountSid, authToken);
