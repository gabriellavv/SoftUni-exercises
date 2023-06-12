function loadingBar(percents) {

 //   if(percents === 0){
 //       console.log("0% [..........]");
 //       console.log("Still loading...");
 //   } else if(percents === 10) {
 //       console.log("10% [%.........]");
 //       console.log("Still loading...");
 //   } else if(percents === 20) {
 //       console.log("20% [%%........]");
 //       console.log("Still loading...");
 //   } else if(percents === 30) {
 //       console.log("30% [%%%.......]");
 //       console.log("Still loading...");
 //   } else if(percents === 40) {
 //       console.log("40% [%%%%......]");
 //       console.log("Still loading...");
 //   } else if(percents === 50) {
 //       console.log("50% [%%%%%.....]");
 //       console.log("Still loading...");
 //   } else if(percents === 60) {
 //       console.log("60% [%%%%%%....]");
 //       console.log("Still loading...");
 //   } else if(percents === 70) {
 //       console.log("70% [%%%%%%%...]");
 //       console.log("Still loading...");
 //   } else if(percents === 80) {
 //       console.log("80% [%%%%%%%%..]");
 //       console.log("Still loading...");
 //   } else if(percents === 90) {
 //       console.log("90% [%%%%%%%%%.]");
 //       console.log("Still loading...");
 //   } else if(percents === 100) {
 //       console.log("100% Complete!");
 //       console.log("[%%%%%%%%%%]");
 //   }

 let percentageString = "%".repeat(percents / 10);
 let dotsString = ".".repeat((100 - percents) / 10);

 if (percents === 100) {
    console.log("100% Complete!");
    console.log(`[${percentageString}]`);
 } else {
    console.log(`${percents}% [${percentageString}${dotsString}]`);
    console.log("Still loading...");
 }
}

loadingBar(30);