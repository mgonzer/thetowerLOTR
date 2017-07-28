const knex = require('./knex')

module.exports = {
  getMenu: function(){
    return knex('menu')
  },
  getOne: function(id){
    return knex('menu').where('id', id).first()
  },
  deleteOne: function(id){
    return knex('menu').where('id', id).del()
  },
  createOne: function(item){
    return knex('menu').insert(item).returning('*')
  }
}
