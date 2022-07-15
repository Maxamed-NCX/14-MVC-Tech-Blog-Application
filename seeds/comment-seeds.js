const { Comment } = require("../models");

const commentData = [
  {
    user_id: 4,
    post_id: 4,
    comment_text: "Wow, amazing platform!",
  },
  {
    user_id: 5,
    post_id: 3,
    comment_text: "Very useful site!",
  },
  {
    user_id: 1,
    post_id: 5,
    comment_text: "This is awesome!",
  },
  {
    user_id: 3,
    post_id: 5,
    comment_text: "We just reached a 500 subscribers! Great!",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Way to Go! kudos to anyone who have contributed",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "This is Amazing!",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "This is new!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "much need blog!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
