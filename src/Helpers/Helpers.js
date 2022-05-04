const averageRating = (reviews) => {
  var total = 0;
  for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
  }
  return (total/reviews.length)
}

module.exports.averageRating = averageRating;