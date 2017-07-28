
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE menu RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('menu').insert([
        {item_name: 'Beorn\'s Honey Nut Cake served with Bilbo\'s Orange Marmalade', item_description: 'A sweet way to start your hobbits off. Start light and simple to ease into the 14 hours of food.', url_image: 'http://media.npr.org/assets/img/2013/12/10/accomando-hobbit-6-e1eb677ad58f263ef898ac5aa02dad388b409341-s700-c85.jpg'},
        {item_name: 'Elven Lembas Bread', item_description:'One bite is meant to sustain a man for a day. Elves keep the recipe a secret but this is the real deal', url_image:'https://vomitingchicken.com/wp-content/uploads/2013/04/IMG_0913.jpg'},
        {item_name: 'Po-Tay-To Onion Soup', item_description:'Hearty potato and onion soup, will satisfy the hungriest of hobbits.', url_image: 'http://pumpsandiron.com/wp-content/uploads/2012/05/cheesy-potato-onion-soup-5.jpg'},

      ]);
    });
};
