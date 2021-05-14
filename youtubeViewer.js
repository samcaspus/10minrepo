
const {chromium} = require('playwright');
let time = 1;


(
    async () =>{
        const browser = await chromium.launch({headless: false});
        const page = await browser.newPage()

        await page.goto('https://youtu.be/178hMKR4_-0')
        await page.evaluate(()=>{
            try{
            document.querySelector('[aria-label="Play (k)"]').click()
            }catch(e){
                console.log(e);
            }
        })
        
        setTimeout(()=>{
            browser.close()
            
        },(time*60000))
    }
)();