const express = require('express');
const moment = require('moment');

const {getPrice} = require('./getPrice');

const app = express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.status(200).send({
        message: 'Welcome to the API'
    });
});

app.get('/prices', async (req,res)=>{
    
   try{
    const price1 = await getPrice(`https://www.flipkart.com/rajpura-brio-high-back-revolving-chair-headrest-push-mechanism-black-fabric-mesh-net-office-executive/p/itmeymzegtveabw5?pid=OSCEYFGHPKYQNBHY&lid=LSTOSCEYFGHPKYQNBHYFPIHOL&marketplace=FLIPKART&srno=b_1_8&otracker=hp_reco_Discounts%2Bfor%2BYou_2_15.dealCard.OMU_Discounts%2Bfor%2BYou_cid%3AS_F_N_wwe_y7b_foc__d_20-100__eaf_eas_ALL%3Bnid%3Awwe_y7b_foc_%3Bet%3AS%3Beid%3Awwe_y7b_foc_%3Bmp%3AF%3Bct%3Ad%3B_11&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fdiscount_Discounts%2Bfor%2BYou_DESKTOP_HORIZONTAL_dealCard_cc_2_NA_view-all_11&fm=organic&iid=ffcaa097-1078-4a44-bc09-b1d83ea982a2.OSCEYFGHPKYQNBHY.SEARCH&ppt=browse&ppn=browse&ssid=4qm3cu1n740000001591780243736`);
    const price2 = await getPrice(`https://www.flipkart.com/vj-interior-fabric-office-visitor-chair/p/itmew74dp6fkpaeq?pid=OSCEW6ZMHMB6YMEM&lid=LSTOSCEW6ZMHMB6YMEMKEIRLD&marketplace=FLIPKART&srno=b_1_3&otracker=hp_reco_Discounts%2Bfor%2BYou_2_15.dealCard.OMU_Discounts%2Bfor%2BYou_cid%3AS_F_N_wwe_y7b_foc__d_20-100__eaf_eas_ALL%3Bnid%3Awwe_y7b_foc_%3Bet%3AS%3Beid%3Awwe_y7b_foc_%3Bmp%3AF%3Bct%3Ad%3B_11&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fdiscount_Discounts%2Bfor%2BYou_DESKTOP_HORIZONTAL_dealCard_cc_2_NA_view-all_11&fm=organic&iid=ffcaa097-1078-4a44-bc09-b1d83ea982a2.OSCEW6ZMHMB6YMEM.SEARCH&ppt=browse&ppn=browse&ssid=4qm3cu1n740000001591780243736`);
    const price3 = await getPrice(`https://www.flipkart.com/rajpura-voom-medium-back-revolving-chair-centre-tilt-mechanism-black-fabric-red-mesh-net-office-executive/p/itmf468uybq46hef?pid=OSCEYFGPP7FSADWC&lid=LSTOSCEYFGPP7FSADWC53QJVT&marketplace=FLIPKART&srno=b_1_4&otracker=hp_reco_Discounts%2Bfor%2BYou_2_15.dealCard.OMU_Discounts%2Bfor%2BYou_cid%3AS_F_N_wwe_y7b_foc__d_20-100__eaf_eas_ALL%3Bnid%3Awwe_y7b_foc_%3Bet%3AS%3Beid%3Awwe_y7b_foc_%3Bmp%3AF%3Bct%3Ad%3B_11&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fdiscount_Discounts%2Bfor%2BYou_DESKTOP_HORIZONTAL_dealCard_cc_2_NA_view-all_11&fm=organic&iid=ffcaa097-1078-4a44-bc09-b1d83ea982a2.OSCEYFGPP7FSADWC.SEARCH&ppt=browse&ppn=browse&ssid=4qm3cu1n740000001591780243736`);
    const price4 = await getPrice(`https://www.flipkart.com/dzyn-furnitures-linen-office-executive-chair/p/itmexwyu6wgskcqr?pid=OSCEXTPVJNGGNNQM&lid=LSTOSCEXTPVJNGGNNQMWSJDEQ&marketplace=FLIPKART`);
    await res.status(200).send({
        date: moment().format('DD, MMMM YYYY'),
        time: moment().format('HH:mm'),
        bigChairWithNeckRest: price1,
        vjChair: price2,
        uglyChair:price3,
        twoChairs:price4
    });
   }
   catch(e){
       await res.status(400).send({message:'Something\'s gone wrong'})
   }
});
app.listen(port,()=>{
    console.log(`Running on ${port}`);
});

