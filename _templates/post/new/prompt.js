// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "slug",
    message: "post slug:",
  },
  {
    type: "input",
    name: "title",
    message: "post title:",
  },
  {
    type: "input",
    name: "blurb",
    message: "write a short blurb describing this post.",
  },
  {
    type: "list",
    name: "tags",
    message: "tags:",
  },
]
