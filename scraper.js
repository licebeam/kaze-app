// use puppeteer

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://iknow.jp/courses/566921');
  const items = await page.$$eval('.cue-response', cues => cues.map((item, i) => {
    const kanji = item.querySelector('.cue').innerHTML
    const kana = item.querySelector('p[class=text] > .transliteration') ? item.querySelector('p[class=text] > .transliteration').textContent : null
    const eng = item.querySelector('.response').textContent
    return { kan: kanji, tran: kana, english: eng, id: i }
  }));

  // const ebg = await page.$$eval('.cue', cues => cues.map((item, i) => {
  //   return { name: item.innerHTML, id: i }
  // }));
  console.log(items);
  await browser.close();
})();