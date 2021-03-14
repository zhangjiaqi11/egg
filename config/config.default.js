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
  const path = require('path');
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610859141618_7004';

  // add your middleware config here
  config.middleware = [ 'login' ];
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'mytest',
    password: '12345678',
    username: 'root',
  };
  config.cors = {
    // origin: 'http://localhost:52330',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.security = {
    csrf: {
      enable: false,
    },

    // csrf: {
    //   headerName: 'x-csrf-token', // 自定义请求头,前端调用时开启header加入'x-csrf-token': getCookie("csrfToken")
    // },
  };
  config.logger = {
    level: 'INFO',
    dir: path.join(__dirname, '../logs/prod/app'), // 保存路径为工程路径下`logs/prod/app`
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
