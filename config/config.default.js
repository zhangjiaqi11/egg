/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610859141618_7004';

  // add your middleware config here
  config.middleware = [];
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'mytest',
    password: '12345678',
    username: 'root',
  };
  config.security = {
    csrf: {
      enable: false,
    },
    // csrf: {
    //   headerName: 'x-csrf-token', // 自定义请求头,前端调用时开启header加入'x-csrf-token': getCookie("csrfToken")
    // },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
