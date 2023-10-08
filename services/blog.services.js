const axios = require("axios");
const _ = require("lodash");

module.exports.getBlogsServices = async () => {
   const data = await axios.get(
      `https://intent-kit-16.hasura.app/api/rest/blogs`,
      {
         headers: {
            "x-hasura-admin-secret":
               "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
         },
      }
   );
   const blogs = data.data.blogs;
   // console.log(blogs);

   const totalNumberOfBlogs = blogs.length;

   const logiestTitleBlog = _.maxBy(blogs, (blog) => blog.title.length);
   const containsPrivacy = _.filter(blogs, (blog) =>
      _.includes(_.toLower(blog.title), "privacy")
   );
   const uniqueTitleBlogs = _.uniqBy(blogs, (blog) => _.toLower(blog.title)).map(blog => blog.title);
   return {
      totalNumberOfBlogs,
      logiestTitleBlog,
      containsPrivacy,
      uniqueTitleBlogs,
   };
};
