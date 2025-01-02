// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "slug",
    message: "What should the slug be?",
  },
  {
    type: "input",
    name: "title",
    message: "What should the post's title be?",
  },
  {
    type: "input",
    name: "blurb",
    message: "Write a short blurb describing this post.",
  },
  {
    type: "list",
    name: "next",
    message: "Any related posts? List their slugs here.",
  },
  {
    type: "list",
    name: "tags",
    message: "What categories is this post about?",
  },
]
