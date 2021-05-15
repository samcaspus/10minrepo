
const {chromium, firefox, webkit } = require('playwright');


(

    async () =>{
        let links = ['https://youtu.be/178hMKR4_-0','https://youtu.be/178hMKR4_-0']


        for(let link of links){
            console.log(link)
        
        const browser1 = await chromium.launch({headless: false});
        const browser2 = await firefox.launch({headless: false});
        const browser3 = await webkit.launch({headless: false});
        const browser4 = await chromium.launch({headless: false, channel: 'chrome'});
        const browser5 = await chromium.launch({headless: false, channel: 'msedge'});



//        const browser5 = await webkit.launch({headless: false});



        const page1 = await browser1.newPage()
        const page2 = await browser2.newPage()
        const page3 = await browser3.newPage()
        const page4 = await browser4.newPage()
        const page5 = await browser5.newPage()


        await page1.goto(link)
        await page2.goto(link)
        await page3.goto(link)
        await page4.goto(link)
        await page5.goto(link)



        let duration1 = await page1.evaluate(()=>{

            let semiDuration = document.querySelector('[class="ytp-time-duration"]').innerHTML;
            try{
            document.querySelector('[aria-label="Play (k)"]').click()
            }catch(e){
                console.log(e);
            }

            return semiDuration
        });
        let duration2 = await page2.evaluate(()=>{

            let semiDuration = document.querySelector('[class="ytp-time-duration"]').innerHTML;
            try{
            document.querySelector('[aria-label="Play (k)"]').click()
            }catch(e){
                console.log(e);
            }

            return semiDuration
        });
       let duration3 = await page3.evaluate(()=>{

            let semiDuration = document.querySelector('[class="ytp-time-duration"]').innerHTML;
            try{
            document.querySelector('[aria-label="Play (k)"]').click()
            }catch(e){
                console.log(e);
            }
            return semiDuration
        });
        let duration4 = await page4.evaluate(()=>{

            let semiDuration = document.querySelector('[class="ytp-time-duration"]').innerHTML;
            try{
            document.querySelector('[aria-label="Play (k)"]').click()
            }catch(e){
                console.log(e);
            }
            return semiDuration
        });
   let duration5 = await page5.evaluate(()=>{

            let semiDuration = document.querySelector('[class="ytp-time-duration"]').innerHTML;
            try{
            document.querySelector('[aria-label="Play (k)"]').click()
            }catch(e){
                console.log(e);
            }
            return semiDuration
        });




        console.log(`waiting for chromium ${parseInt(duration1.split(":")[0])} min`);
        console.log(`waiting for firefox ${parseInt(duration2.split(":")[0])} min`);
        console.log(`waiting for webkit ${parseInt(duration3.split(":")[0])} min`);
        console.log(`waiting for chrome ${parseInt(duration4.split(":")[0])} min`);
        console.log(`waiting for edge ${parseInt(duration5.split(":")[0])} min`);


        await page1.waitForTimeout(parseInt(duration1.split(":")[0])*60000)
        await page2.waitForTimeout(parseInt(duration2.split(":")[0])*60000)
        await page3.waitForTimeout(parseInt(duration2.split(":")[0])*60000)
        await page4.waitForTimeout(parseInt(duration2.split(":")[0])*60000)
        await page5.waitForTimeout(parseInt(duration2.split(":")[0])*60000)

        await browser1.close()
        await browser2.close()
        await browser3.close()
        await browser4.close()
        await browser5.close()

       
    }
}
)();