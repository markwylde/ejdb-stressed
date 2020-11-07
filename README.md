#ejdb-stressed
Stress test the ejdb database by filling it with lots of data and querying it.

## Installation
```bash
git clone https://github.com/markwylde/ejdb-stressed.git
cd ejdb-stressed
npm install
```

## Running
> The code in the seeder and query files are very small, so you should be able to easily edit them to suit your test.

Seed the data into the example.db:
```bash
node lib/seeder
```

Then query the database:
```bash
node lib/query
```