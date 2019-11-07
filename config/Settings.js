const SERVICE_ACCT_ID = 'cgsync-jvc@cgsync-258317.iam.gserviceaccount.com';
const key = require('cgsync-jvc-b76d5d6a4ec6.json').private_key;
const TIMEZONE = 'UTC+09:00';
const CALENDAR_ID = {
	'primary': 'v7rfdj4jjmgilpg2bhblbhf840@group.calendar.google.com',
};

module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.key = key;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;
