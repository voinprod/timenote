// Режим разработки
const environment = process.env.NODE_ENV || 'development';
// Переменная окружения
const config = require('../../knexfile')[environment];
// Экспортируем настройки
module.exports = require('knex')(config);
