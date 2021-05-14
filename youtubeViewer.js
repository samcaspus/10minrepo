
const {chromium} = require('playwright');


(

    async () =>{
        let links = ['https://youtu.be/178hMKR4_-0','https://youtu.be/178hMKR4_-0']


        for(let link of links){
            console.log(link)
        
        const browser = await chromium.launch({headless: false});
        const page = await browser.newPage()

        await page.goto(link)
        let duration = await page.evaluate(()=>{

            let semiDuration = document.querySelector('[class="ytp-time-duration"]').innerHTML;
            try{
            document.querySelector('[aria-label="Play (k)"]').click()
            }catch(e){
                console.log(e);
            }

            return semiDuration
        });

        console.log(`waiting for ${parseInt(duration.split(":")[0])} min`);
        
        await page.waitForTimeout(parseInt(duration.split(":")[0])*60000)
        await browser.close()
            
       
    }
}
)();