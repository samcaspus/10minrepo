
const {chromium, firefox, webkit } = require('playwright');

let index = 0;
let headless = true;
let runIndex = 0;


(

    async () =>{

        while(1==1){
try{
          let links = [	'https://www.youtube.com/watch?v=xSvO7_XPkBw',
			'https://www.youtube.com/watch?v=TlcRANmRIHo',
			'https://www.youtube.com/watch?v=0QG882Dbbjw',
			'https://www.youtube.com/watch?v=e5KL_Bp85rI',
			'https://youtu.be/0YS7_4OCnho'
			
		    ]
	 let n=links.length
	runIndex+=1;
	console.log("ran" , runIndex)
        
        const browser1 = await chromium.launch({headless: headless });
        const browser2 = await chromium.launch({headless: headless });
        const browser3 = await chromium.launch({headless: headless });
        const browser4 = await chromium.launch({headless: headless });
        const browser5 = await chromium.launch({headless: headless });


        const page1 = await browser1.newPage()
        const page2 = await browser2.newPage()
        const page3 = await browser3.newPage()
        const page4 = await browser4.newPage()
        const page5 = await browser5.newPage()


        await page1.goto(links[(runIndex)%n])
        await page2.goto(links[(runIndex+1)%n])
        await page3.goto(links[(runIndex+2)%n])
	await page4.goto(links[(runIndex+3)%n])
       	await page5.goto(links[(runIndex+4)%n])



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
	let maximumTime = Math.max(parseInt(duration1.split(":")[0]),parseInt(duration2.split(":")[0]),parseInt(duration3.split(":")[0]),parseInt(duration4.split(":")[0]),parseInt(duration5.split(":")[0]))
	console.log("maximum time is ",maximumTime,"min")
	console.log("browser log one")
        await page1.waitForTimeout(maximumTime*60000)
	await page5.waitForTimeout(1000)
	await browser1.close();
	await page5.waitForTimeout(1000)
	await browser2.close();
	await page5.waitForTimeout(1000)
	await browser3.close();
	await page5.waitForTimeout(1000)
	await browser4.close();
	await page5.waitForTimeout(1000)
	await browser5.close();
	console.log("All browsers closed");
       }catch(e){
	console.log(e)
	}
    }
}
    
)();