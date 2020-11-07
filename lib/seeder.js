const chance = new require('chance')();
const uuid = require('uuid').v4;
const { EJDB2 } = require('ejdb2_node');

async function run() {
  const db = await EJDB2.open('./example.db');

  await db.ensureStringIndex('messages', '/firstName', false);
  await db.ensureStringIndex('messages', '/lastName', false);
  
  let black = 0;
  async function batch (number) {
    for (var i = 0; i < number; i++) {
      const id = uuid();

      const lastName = chance.last();
      const record = JSON.stringify({
        id,
        firstName: chance.first(),
        lastName,
        email: chance.email(),
        content: chance.paragraph({ sentences: 1 })
      })

      if (lastName === 'Black') {
        black = black + 1
        console.log(black)
      }

      db.put('messages', record, function (error) {
        if (error) return console.log('Ooops!', error)
      })
    }

    setTimeout(() => batch(number));
  }
  batch(1000);
}

run();
