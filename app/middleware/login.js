'use strict';
module.exports = () => {

  return async function login(ctx, next) {
    await next();
    ctx.logger.info('req:', JSON.stringify(ctx.request), 'res:', JSON.stringify(ctx.response));

    if (ctx.response.status === 404) {
      ctx.body = { error: 'Not Found' };
    }

  };
};

