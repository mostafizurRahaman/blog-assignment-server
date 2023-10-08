const {
   getBlogsServices,
   getBlogSearchService,
} = require("../services/blog.services");

module.exports.getBlogs = async (req, res, next) => {
   try {
      const data = await getBlogsServices();
      res.status(200).send({
         data,
      });
   } catch (err) {
      next(err);
   }
};

module.exports.searchBlogByQuery = async (req, res, next) => {
   try {
      const { query } = req.query;
      const blogs = await getBlogSearchService(query);
      if (!blogs.length) {
         return res.status(400).send({
            status: "failed",
            message: `couldn't found any items with ${query} keyword`,
         });
      }
      res.status(200).send({
         status: "success",
         message: `successfully found blogs with ${query} keyword`,
         totalBlogs: blogs.length,
         data: blogs,
      });
   } catch (err) {
      next(err);
   }
};
