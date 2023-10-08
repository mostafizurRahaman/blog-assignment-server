const { getBlogsServices } = require("../services/blog.services");

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
