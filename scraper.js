const rp = require('request-promise');
const cheerio = require('cheerio');

const url = 'https://iknow.jp/courses/566921'
rp(url).then(
  (data) => {
    // console.log(data)
    const newData = cheerio.load(data);
    // console.log(newData.html())
    scrape(newData)
  }
).catch((err) => {
  console.log('There was an error scraping data: ', err)
})

function scrape(data) {
  console.log('running')
  cheerio('.items', data).each(() => {
    console.log('item: ')
    console.log(cheerio(this));
  });
}