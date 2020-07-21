const date1 = document.querySelector(".date1");
const date2 = document.querySelector(".date2");
const sunday = document.querySelector(".sun");
const monday = document.querySelector(".mon");
const tuesday = document.querySelector(".tue");
const wednesday = document.querySelector(".wed");
const thursday = document.querySelector(".thur");
const friday = document.querySelector(".fri");
const saturday = document.querySelector(".sat");

var toGetDay = HighlightDay();

function myFunction() {
    var weekday = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
    var dateOne = toGetDay.getDay(date1.value);
    var dateTwo = toGetDay.getDay(date2.value);
    if (weekday[dateOne] === weekday[dateTwo]) {
        weekday[dateOne].classList.add("same")
    }
    weekday[dateOne].classList.add("col1")
    weekday[dateTwo].classList.add("col2")
    setTimeout(function () {
        weekday[dateOne].classList.remove("same");
        weekday[dateOne].classList.remove("col1");
        weekday[dateTwo].classList.remove("col2")
    }, 4000);
};

date1.addEventListener("change", myFunction);
date2.addEventListener("change", myFunction);