const { Pool, Client } = require('pg');

const pool = new Pool({
  host: "127.0.0.1",
  user: "postgres",
  port: 5432,
  password: "password",
  database: "boulders"
})

const getClimbsForOneBoulder = async (sectorName) => {
  // console.log(sectorName);
  try {
    let client = await pool.connect();
    let boulders = await client.query(
      `SELECT boulders.name as name, grade, type, fa, description, sectors.name as sector, sectors.id as sector_id, areas.name as area FROM boulders
      INNER JOIN sectors ON boulders.sector_id = sectors.id
      INNER JOIN areas ON boulders.area_id = areas.id
      WHERE '${sectorName}' = sectors.name`
      );
    await client.release();
    return boulders.rows;
  } catch(err) {
    console.log(err);
  }
}

const getReviewsForOneClimb = async (boulderId) => {
  try {
    let client = await pool.connect();
    let reviews = await client.query(
      `SELECT boulders.name as name, reviews.id as review_id, tags.name as tag, rating, date, body, author FROM boulders
       INNER JOIN reviews ON reviews.product_id = ${boulderId}
       INNER JOIN tags ON reviews.id = review_id
       WHERE ${boulderId} = boulders.id`
    );
    await client.release();
    return reviews.rows;
  } catch(err) {
    console.log(err)
  }
}

const getReviewsForAllClimbs = async (sectorId) => {
  try {
    let client = await pool.connect();
    let reviews = await client.query(
      `SELECT boulders.name as name, reviews.id as review_id, tags.name as tag, rating, date, body, author FROM boulders
       INNER JOIN reviews ON reviews.product_id = boulders.id
       INNER JOIN tags ON reviews.id = review_id
       WHERE ${sectorId} = boulders.sector_id`
    );
    await client.release();
    return reviews.rows;
  } catch(err) {
    console.log(err);
  }
}

const getMessagesForAllClimbs = async (sectorId) => {
  try {
    let client = await pool.connect();
    let messages = await client.query(
      `SELECT message, author, date, boulders.name as boulder_name FROM messages
       INNER JOIN boulders ON boulders.id = messages.boulder_id
       WHERE messages.sector_id = ${sectorId}`
    );
    await client.release();
    return messages.rows;
  } catch(err) {
    console.log(err);
  }
};

const postToMessages = async (message) => {
  console.log(message);
  try {
    let client = await pool.connect();
    let boulderId = await client.query(
      `SELECT id, sector_id, area_id FROM boulders WHERE boulders.name = '${message.boulder}'`
    );
    await client.query(
      `INSERT INTO messages (author, message, date, boulder_id, sector_id) VALUES ('${message.author}', '${message.message}', ${message.date}, ${boulderId.rows[0].id}, ${boulderId.rows[0].sector_id})`
    );
  } catch(err) {
    console.log(err);
  }
};

module.exports.getClimbsForOneBoulder = getClimbsForOneBoulder;
module.exports.getReviewsForOneClimb = getReviewsForOneClimb;
module.exports.getReviewsForAllClimbs = getReviewsForAllClimbs;
module.exports.getMessagesForAllClimbs = getMessagesForAllClimbs;
module.exports.postToMessages = postToMessages;