'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Test = app.model.define('test', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: STRING(30),
      defaultValue: '',
    },
    age: {
      type: INTEGER,
    },
    created_at: DATE,
    updated_at: DATE,
  },
  {
    timestamps: true, // 自动维护时间戳 [ created_at、updated_at ]
    // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
    // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
  });
  Test.sync({
    alter: true,
  });
  return Test;
};
