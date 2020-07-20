const date1 = document.querySelector(".date1");
const date2 = document.querySelector(".date2");
// const sunday = document.querySelector(".sun");
// const monday = document.querySelector(".mon");
// const tuesday = document.querySelector(".tue");
// const wednesday = document.querySelector(".wed");
// const thursday = document.querySelector(".thur");
// const friday = document.querySelector(".fri");
// const saturday = document.querySelector(".sat");
var template = document.querySelector(".template").innerHTML;
var list = document.querySelector(".days");
var compilation = Handlebars.compile(template);




var toGetDay = HighlightDay();

function myFunction() {
    var dateOne = {
        day : toGetDay.getttingDayOne(date1.value)
    }
    list.innerHTML = compilation(dateOne);
    console.log(list.innerHTML = compilation(dateOne))
    var dateTwo = {
        day : toGetDay.getttingDayTwo(date2.value)
    }
    console.log(list.innerHTML = compilation(dateTwo))
    list.innerHTML = compilation(dateTwo);
    
        
    // var weekday = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
    // var dateOne = toGetDay.getFirstDay(date1.value);
    // var dateTwo = toGetDay.getSecondDay(date2.value);
    // for(var i=0; i<weekday.length; i++){
    //     var each = weekday;
    //     console.log(weekday)
    //     if(dateOne === weekday){
    //         weekday.classList.add("col1");
    //     }
    // }
    // if(dateOne === "Sunday"){
    //     sunday.classList.add("col1");
    // }
    // if (dateOne === dateTwo) {
    //     dateOne.classList.add("same")
    // }
    // dateOne.classList.add("col1");
    // dateTwo.classList.add("col2");
    // setTimeout(function () {
    //     dateOne.classList.remove("same");
    //     dateOne.classList.remove("col1");
    //     dateTwo.classList.remove("col2")
    // }, 4000);
}

date1.addEventListener("change", myFunction);
date2.addEventListener("change", myFunction);