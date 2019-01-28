const knex = require('./connection');

module.exports = {
    saveItem(item, uuid) {
        return knex('item').insert({
            text: item.text,
            pwd: item.pwd,
            url: uuid,
        }).then(data => data);
    },
    getItem(item) {
        return knex('item')
            .select('*')
            .where('url', item.url).first()
            .then(result => result['text']);
    },
    delItem(item){
        return knex('item').where('url', item).del();
    }
}

