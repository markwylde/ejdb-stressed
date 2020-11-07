const { EJDB2 } = require('ejdb2_node');
 
async function run() {
  const db = await EJDB2.open('./example.db');
  // const q = db.createQuery(`/[[* = :?] = "Sam"] or (/[[* = :?] != "Sam"] and /[lastName = "Black"]) | /{firstName,lastName}`, 'messages');
  //   q.setString(0, 'firstName')
  //   q.setString(1, 'firstName')

  // const q = db.createQuery(`/[* = :?]`, 'messages');
  //   q.setString(0, 'firstName')

  // const q = db.createQuery(`/firstName`, 'messages');
  // const q = db.createQuery(`/[lastName = "Black"] | /{firstName,lastName} | limit 10 skip 100 desc /firstName`, 'messages');
  const q = db.createQuery(`/[lastName = "Black"]`, 'messages');

  for await (const doc of q.stream()) {
    console.log(`Found ${doc}`);
  }

  // const records = await q.list()
  // console.log(records)
 
  await db.close();
}
 
run();

// a = {
//   query: [
//     'firstName'
//   ],
//   order: ['desc(firstName)')
// }