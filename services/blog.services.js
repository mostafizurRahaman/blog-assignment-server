const _ = require("lodash");
const { loadBlogs } = require("../utils/loadblogs");

//  Analysis Controller :
module.exports.getBlogsServices = async () => {
   const blogs = await loadBlogs();
   // console.log(blogs);

   const totalNumberOfBlogs = blogs.length;

   const logiestTitleBlog = _.maxBy(blogs, (blog) => blog.title.length);
   const containsPrivacy = _.filter(blogs, (blog) =>
      _.includes(_.toLower(blog.title), "privacy")
   );
   const uniqueTitleBlogs = _.uniqBy(blogs, (blog) =>
      _.toLower(blog.title)
   ).map((blog) => blog.title);
   return {
      totalNumberOfBlogs,
      logiestTitleBlog,
      containsPrivacy,
      uniqueTitleBlogs,
   };
};

// search Controller :
module.exports.getBlogSearchService = async (query) => {
   console.log(query);
   const blogs = await loadBlogs();
   const matchedBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
   );
   return matchedBlogs;
};
