const axios = require("axios");

module.exports.loadBlogs = async () => {
   try {
      const data = await axios.get(
         `https://intent-kit-16.hasura.app/api/rest/blogs`,
         {
            headers: {
               "x-hasura-admin-secret":
                  "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
            },
         }
      );
      return data.data.blogs;
   } catch (err) {
      throw new Error("Data can't fetched successfully");
   }
};
