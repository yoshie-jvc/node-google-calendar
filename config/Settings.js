// Sample CalendarAPI settings
const SERVICE_ACCT_ID = 'cgsync@cgsync-258309.iam.gserviceaccount.com';
const KEYFILE = 'cgsync-258309-d4190c87a69f.json';				//path to pem key
const TIMEZONE = 'UTC+09:00';
const CALENDAR_ID = {
	'primary': 'jvc.nimoda@gmail.com',
	'calendar-1': 'v7rfdj4jjmgilpg2bhblbhf840@group.calendar.google.com',
};

module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.key = key;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;

// Example for using json keys
// var key = require('./googleapi-key.json').private_key;
// module.exports.key = key;

