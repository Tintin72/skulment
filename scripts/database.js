function login(email, password, callback) {
  const { Client, query: q } = require("faunadb");
  const dotenv = require("dotenv");

  dotenv.config();
  try {
    const client = new Client({
      secrret: process.env.FAUNA_SERVER_SECRET,
    });
    const user = q.Get(q.Match(q.Index("users_by_email"), email));
    const verify = q.Login(user.ref, { password: password });

    return callback(null, {
      user_id: user.ref,
      email: user.email,
    });
  } catch (error) {
    callback(error);
  }
}

function printCredentials(err, data) {
  if (err) {
    throw new Error("Nothing to show");
  } else {
    return data;
  }
}

login("kinaronjenga96@gmail.com", "Test1234", printCredentials);
