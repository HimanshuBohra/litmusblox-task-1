const fs = require('fs'); 
const csv = require('csv-parser');
fixed_cost = [];
status = [];
priority = [];
deadline = [];
actual_hrs = [];
var cost = 0;
var actual = 0;
const regex = /$/g;
fs.createReadStream('data.csv')
.pipe(csv())
.on('data', function(data){
    try {
        status.push(data['STATUS']);
        priority.push(data['PRIORITY']);
        deadline.push(data['DEADLINE']);
        fixed_cost.push(data['FIXED COST']);
        actual_hrs.push(data['ACTUAL HRS']);         
        cost+=Number(data['FIXED COST'].replace(/[^0-9.-]+/g,""))
        actual+=parseInt(data['ACTUAL HRS'])
    }
    catch(err) {
        //error handler
    }
})
.on('end',function(){
    console.log("Total Fixed Cost : "+cost);
    console.log("Sum of Actual Hours : "+actual);
    console.table(status);
    console.table(priority);
    console.table(deadline);
    console.table(fixed_cost);
    console.table(actual_hrs);
});  