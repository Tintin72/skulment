const request = require("request");

const options = {
  method: "POST",
  url: "https://dev-q-opzer1.us.auth0.com/oauth/token",
  headers: { "content-type": "application/json" },
  body: '{"client_id":"dxDbZgdT3ArI5KAZUUPdFM4SLLosO4jS","client_secret":"rdFCSd_EdaJEYQRWamgjT4eA4_DkoI0AZKtQekUdyFL26jH_1jZiKJqGp7DUZq1I","audience":"https://db.fauna.com/db/yt8upupgcyncy","grant_type":"client_credentials"}',
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
