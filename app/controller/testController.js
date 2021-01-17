'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async testSql() {
    const { ctx } = this;
    await ctx.service.testService.testSql();
  }
}

module.exports = TestController;
