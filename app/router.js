'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/test', controller.testController.index);
  router.post('/api/testSql', controller.testController.testSql);
};
