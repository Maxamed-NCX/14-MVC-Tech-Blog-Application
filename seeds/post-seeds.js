const { Post } = require("../models");

const postData = [
  {
    title: "Password Generator!",
    post_content:
      "Randomly generated passwords that contains Uppercase, Lowercase, Numbers and Special Characters allowing for greater security in securing sensitive data. This password generator some basic HTML and CSS to make up the structure content. The JavaScript allows the program function behavors to generate the random password after required criteria data is inputed by users. There are a series of prompts for password selection and prefernce. A unique and specific password should in character length of 8-128 characters containing Uppercase, Lowercase, Numbers and Special Characters as mention. A display alret will appear with each prompt to validate after selection to make sure requirements are met.",
    user_id: 3,
  },
  {
    title: "Code Quiz!",
    post_content:
      "TTo create a JavaScript a Multiple Choice quiz and utilitizing all the functions in combination for this coding challenge.",
    user_id: 1,
  },
  {
    title: "Weather Dashboard!",
    post_content:
      "To create a Weather Dashboard that fetches from a weather API and displays the current day's Temperature, Wind Speed and Humidity level and UV index scale. In addition, diplays a a 5-Day forcast below with those data fetched for the next 5 days.",
    user_id: 2,
  },
  {
    title: " ReadME Generator",
    post_content:
      "A ReadME Generator that helps users with adding finishing touches to you projects.",
    user_id: 5,
  },
  {
    title: "Tech Blog!",
    post_content:
      "Where you can publish articles, blog posts, plus thoughts and opinions",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
