const puppeteer = require("puppeteer");
const getPrice = async url => {
  try {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();
    await page.goto(url);
    const body = await page.evaluate(() => {
      return document.querySelector("._1uv9Cb").textContent;
    });

    return parseInt(body.split("₹")[1].replace(/\,/g, ""));
    // const price = await parseInt(body.split('?')[1].replace(/\,/g,""));
    // await browser.close();
    // return price;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
    getPrice: getPrice
};

// getPrice(
//   `https://www.flipkart.com/rajpura-brio-high-back-revolving-chair-headrest-push-mechanism-black-fabric-mesh-net-office-executive/p/itmeymzegtveabw5?pid=OSCEYFGHPKYQNBHY&lid=LSTOSCEYFGHPKYQNBHYFPIHOL&marketplace=FLIPKART&srno=b_1_8&otracker=hp_reco_Discounts%2Bfor%2BYou_2_15.dealCard.OMU_Discounts%2Bfor%2BYou_cid%3AS_F_N_wwe_y7b_foc__d_20-100__eaf_eas_ALL%3Bnid%3Awwe_y7b_foc_%3Bet%3AS%3Beid%3Awwe_y7b_foc_%3Bmp%3AF%3Bct%3Ad%3B_11&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fdiscount_Discounts%2Bfor%2BYou_DESKTOP_HORIZONTAL_dealCard_cc_2_NA_view-all_11&fm=organic&iid=ffcaa097-1078-4a44-bc09-b1d83ea982a2.OSCEYFGHPKYQNBHY.SEARCH&ppt=browse&ppn=browse&ssid=4qm3cu1n740000001591780243736`
// )
//   .then(data => {
//     console.log(data, typeof data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
