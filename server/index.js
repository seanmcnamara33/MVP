const {getClimbsForOneBoulder, getReviewsForOneClimb, getReviewsForAllClimbs, getMessagesForAllClimbs, postToMessages} = require('../database/index.js');
const express = require('express')
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/boulders/:sectorName', async (req, res) => {
  let boulders = await getClimbsForOneBoulder(req.params.sectorName);
  let allReviews = await getReviewsForAllClimbs(boulders[0].sector_id);
  let allMessages = await getMessagesForAllClimbs(boulders[0].sector_id);
  var totalRatings = {};
  var totalReviews = {};
  var reviewTags = {};
  var seen = [];
  for (var i = 0; i < allReviews.length; i++) {
    var reviewData = {
      review_id: allReviews[i].review_id,
      author: allReviews[i].author,
      rating: allReviews[i].rating,
      date: allReviews[i].date,
      tags: [],
      message: allReviews[i].body
    }
    if (!seen.includes(allReviews[i].review_id) && !totalRatings[allReviews[i].name] && !totalReviews[allReviews[i].name]) {
      totalRatings[allReviews[i].name] = [allReviews[i].rating];
      totalReviews[allReviews[i].name] = [reviewData];
      seen.push(allReviews[i].review_id);
    } else if (!seen.includes(allReviews[i].review_id) && totalRatings[allReviews[i].name] && totalReviews[allReviews[i].name] && reviewTags[allReviews[i].review_id]) {
      totalRatings[allReviews[i].name].push(allReviews[i].rating);
      totalReviews[allReviews[i].name].push(reviewData);
      seen.push(allReviews[i].review_id);
    }
    if (!reviewTags[allReviews[i].review_id]) {
      reviewTags[allReviews[i].review_id] = [allReviews[i].tag];
    } else {
      reviewTags[allReviews[i].review_id].push(allReviews[i].tag);
    }
  }

  for (var review in totalReviews) {
    for (var k = 0; k < totalReviews[review].length; k++) {
      totalReviews[review][k].tags = reviewTags[totalReviews[review][k].review_id];
    }
  };

  var totalMessages = {};
  for (var x = 0; x < allMessages.length; x++) {
    var messageData = {
      author: allMessages[x].author,
      message: allMessages[x].message,
      date: allMessages[x].date,
      tags: ['short']
    }
    if (!totalMessages[allMessages[x].boulder_name]) {
      totalMessages[allMessages[x].boulder_name] = [messageData]
    } else {
      totalMessages[allMessages[x].boulder_name].push(messageData);
    }
  }

  var allBoulderData = [];
  for (var j = 0; j < boulders.length; j++) {
    var boulderData = {
      name: boulders[j].name,
      grade: Number(boulders[j].grade.slice(1)),
      type: boulders[j].type,
      fa: boulders[j].fa,
      description: boulders[j].description,
      ratings: totalRatings[boulders[j].name] || [],
      reviews: totalReviews[boulders[j].name] || [],
      photos:['//images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1103&q=80]', './jerremy.jpg'],
      messages: totalMessages[boulders[j].name] || [],
      sector: boulders[j].sector
    }
    allBoulderData.push(boulderData);
  }

  res.send(allBoulderData);
})

app.post('/reviews', (req, res) => {

})

app.post('/messages', async (req, res) => {
  await postToMessages(req.body)
  res.sendStatus(201);
})


app.listen(3001, (req, res) => {
  console.log(`Listening on port 3001`);
})