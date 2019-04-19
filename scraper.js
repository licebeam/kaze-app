// use puppeteer

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://iknow.jp/courses/594780');
  const items = await page.$$eval('.item', cues => cues.map((item, i) => {
    const kanji = item.querySelector('.cue').innerHTML
    const kana = item.querySelector('p[class=text] > .transliteration') ? item.querySelector('p[class=text] > .transliteration').textContent : 'null'
    const eng = item.querySelector('.response').textContent
    const sen = item.querySelector('.sentence-text') ? item.querySelector('.sentence-text').textContent : 'null'
    return { kan: kanji, tran: kana.replace(/[\])}[{(]/g, ''), english: eng, sentences: sen.replace(/[\])}[{(]/g, ''), id: i + 1 }
  }));
  console.log(items);
  await browser.close();
})();