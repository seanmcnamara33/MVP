const averageRating = (ratings) => {
  var total = 0;
  for (var i = 0; i < ratings.length; i++) {
    total += ratings[i];
  }
  return (total/ratings.length)
}

module.exports.averageRating = averageRating;