const jsonpath = require('jsonpath');
global.jsonpath = jsonpath;
global.window = {};
const fs = require('fs');
const { Observable, from } = require('rxjs');
const { map, filter, flatMap, take, toArray } = require('rxjs/operators');
const fetch = require('node-fetch');
require('./projects/squeeze/cluster.js');

const headers = {
    'Cookie': '_wix_browser_sess=3282d257-965c-4e2e-b754-c651afbcd0e4; _wixCIDX=b2869fc8-2806-449c-b6aa-32a839619ad8; _ga=GA1.2.1307031216.1527164863; _pxvid=ddd95b10-5f4d-11e8-8365-5b3ab99341bc; wixLanguage=en; _wixUIDX=1059636595|3920483c-f15b-49c2-ba4c-be40892942fc; userType=REGISTERED; __utmc=213780160; __utmz=213780160.1528189981.1.1.utmcsr=etextilecommunications.com|utmccn=(referral)|utmcmd=referral|utmcct=/; TS01c69ed0=01f0e93131f6e49c626e7bdc3e2eacec7ff22cc4c3947d6f6fb320c6a497b4fbd56ea418320c43a204f9800a5171e63895c61a40f7; _wixAB3=67817#1|68051#2|68761#1|68751#1|64041#2|67605#2|68671#1|49001#1; TS015217d5=01f0e9313101348bff5160c89c8023c9203510606118a5b17625ecd5295e6f6b021da196cb64043efb380bcc84f32dd120de99008d; XSRF-TOKEN=1530189374|obhn08tGIgk4; _wixAB3|c2e88721-8190-4098-b900-ed4e58a1072f=39711#1|1951#1|35471#1|19503#1|25191#1|72081#2|71861#2|33161#1|69905#1|69870#1; __utma=213780160.1307031216.1527164863.1528189981.1530521458.2; __utma=213780160.1307031216.1527164863.1528189981.1530521458.2; __utmc=213780160; __utmz=213780160.1528189981.1.1.utmcsr=etextilecommunications.com|utmccn=(referral)|utmcmd=referral|utmcct=/; _wixAB3|e3911867-ab24-4258-a7e4-56af7a3489d8=56221#2|39711#2|19503#1|57681#1|33161#2; _wixAB3|3920483c-f15b-49c2-ba4c-be40892942fc=69718#1|70171#3|67519#1|71551#2|39711#1|69965#2|68313#2|69552#2|71071#2|72081#2|71021#2|40881#2|68111#2|33161#1|69905#1|71381#2|68370#2|71181#1; _wixAB3|d7e46b5a-dc74-42a5-aeb2-6ec3470856b0=56221#2|39711#2|1951#2|51951#1|19503#1|25191#1|57681#1|33161#1; _wixAB3|e79323cf-3992-42d0-8ad0-a8ac4f46b1c6=71551#2|69598#1|72441#2|56221#1|39711#1|51951#2|69552#1|70008#1|72291#2|71861#1|57681#1|33161#2|70009#1|69905#1|69870#1; fs_uid=www.fullstory.com`1zuo`5734793703849984:5668753656250368`3920483c-f15b-49c2-ba4c-be40892942fc`; wixSession2=JWT.eyJraWQiOiJrdU42YlJQRCIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1widXNlckd1aWRcIjpcIjM5MjA0ODNjLWYxNWItNDljMi1iYTRjLWJlNDA4OTI5NDJmY1wiLFwidXNlck5hbWVcIjpcInNoYWlieTRcIixcImNvbG9yc1wiOnt9LFwidWNkXCI6XCIyMDE4LTA1LTI0VDEyOjI4OjM2LjAwMCswMDAwXCIsXCJ3eHNcIjpmYWxzZSxcImV3eGRcIjp0cnVlLFwicm1iXCI6dHJ1ZSxcImx2bGRcIjpcIjIwMTgtMDctMDJUMTQ6MzU6MjMuMzQ5KzAwMDBcIixcImxhdGhcIjpcIjIwMTgtMDUtMjRUMTI6Mjg6MzYuNDk4KzAwMDBcIixcInd4ZXhwXCI6XCIyMDE4LTA3LTEzVDEyOjI4OjM2LjQ5OCswMDAwXCJ9IiwiaWF0IjoxNTMwNTQyMTIzLCJleHAiOjE1MzE0ODQ5MTZ9.PKBq6LzCqU1lVkFishmjWfk-yw8HOaCC_98X8sv9vOMIvm6IHf0qZDjaT3NxPecbLfpUeCRF39AU_sg18hP9PAi5Wk6cD35kGcvA8xDaQUkRG8PFl9TA_qphQUS4_2L79LAag_Wh4UjA2jRMSpGi9aVawFGPZVq6TjhzZdbDSXnWKt5Nw4FvOiY_wGiMHzrhEIgtdmeOh5jC3b2nSgsD9Rlzhcjl5y4aHnGaekXQI2WQQpHo7UHnppJW-QeWEOJ2b0xqw1cIdEce1i5ncXX3Pw4kZhzhZT4wDHgiFg44fUvoUOiodZmhh4PFJitBjwGHfxu-wMEdN-6MrXw-sr4QNA; wixClient=shaiby4||NOT_VERIFIED_OPT_IN|0|1530542123355|1531484916355|3920483c-f15b-49c2-ba4c-be40892942fc|{}; TS01f7f45c=01f0e9313148cd85f7360d45f9a576fa71c5a9c9991c1ef018f7cbf57b11173a17af761b2606c64457bf692a57649826baf4be1a03'
}
const sites_data = `True	200	http://stemox.wixsite.com/event-dj-steve-sun	e79323cf-3992-42d0-8ad0-a8ac4f46b1c6	11/4/2015 11:24:27 PM	3/8/2018 12:54:37 AM
True	200	http://summarealty.wixsite.com/homevues	cb4e51c4-8ce6-452b-9786-432ca8162e13	3/30/2016 1:40:38 PM	4/8/2018 9:17:56 PM
True	200	http://travelwithme5.wixsite.com/triptips	52addacd-75ff-4bfd-9e9a-a95684967f16	8/28/2015 2:10:50 PM	5/1/2018 3:44:33 PM
True	200	http://tsutomuinoue.wixsite.com/weijapan	fab1a4b1-90d4-4a07-98cb-c5080eb00e36	2/23/2015 7:15:47 AM	12/18/2015 6:09:45 AM
True	200	http://vagueiro1.wixsite.com/holyguacamoleny	d481b54c-20be-41ce-ab0a-382a5721b750	6/19/2017 4:00:06 PM	5/16/2018 8:34:22 PM
True	200	http://vlad6065.wixsite.com/bucatariionline	997a887b-cff6-4b73-bfe4-b39508f35f40	11/9/2016 4:35:24 PM	2/20/2018 7:22:16 PM
True	200	http://webventuraplaza.wixsite.com/ccvpc	ffb0287e-e782-4d09-96a1-27eaef59d6d4	3/16/2015 7:54:28 PM	5/16/2018 4:09:06 PM
`;

const sites = sites_data.split('\n').map(l=>l.match(/:\/\/([^\t]*)/)).filter(x=>x).map(x=>x[1]); //.slice(0,1);
from(sites).pipe(
    flatMap(url=>fetch('http://'+url)), 
    flatMap(x=>x.text()),
    map(x=>''+x),
    map(x=>({
        siteId: x.match(/"siteId":"([^\"]*)/)[1],
        metaSiteId: x.match(/"metaSiteId":"([^\"]*)/)[1]
    })),
    map(({siteId,metaSiteId})=>`https://editor.wix.com/html/editor/web/renderer/render/document/${siteId}?isEdited=true&isSantaEditor=true&dsOrigin=Editor1.4&lang=en&metaSiteId=${metaSiteId}&disableSave=true`),
    flatMap(url=>
        fetch(url,{headers})), 
    flatMap(x=>x.text()),
    map(x=>''+x),
    map(x=>{ 
        const rendererModel = x.substring( x.indexOf('var rendererModel =')+'var rendererModel ='.length, x.indexOf(' var documentServicesHeadless = false;')).trim().slice(0,-1);
        const startSiteAsJson = x.indexOf('var siteAsJson =')+'var siteAsJson ='.length;
        const siteAsJson = x.substring( startSiteAsJson, x.indexOf('</script>',startSiteAsJson)).trim().slice(0,-1);
        const cluster = new pageClustering(JSON.parse(siteAsJson),JSON.parse(rendererModel));
        const clusters = cluster.init();
        return cluster.notSupportedComps();
    }),
)
    .subscribe(item=> console.log(item))