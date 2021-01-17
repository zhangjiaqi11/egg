'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async testSql() {
    const { ctx } = this;
    const { name, age } = ctx.request.body;
    try {
      await ctx.model.Test.create({ name, age });
      const res = await ctx.app.model.Test.findAll({ attributes: [ 'id', 'name', 'age', 'created_at', 'updated_at' ] });
      ctx.body = {
        status: 200,
        errmsg: 'success',
        data: res,
      };

    } catch (error) {
      console.log(error);
      ctx.body = {
        status: 400,
        errmsg: JSON.stringify(error),
      };

    }
  }
}
module.exports = UserService;
