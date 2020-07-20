function HighlightDay() {


    function getttingDayOne(day1) {
        var date1 = new Date(day1)
        var weekdays = [{
            day: "Sunday",
        },
        {
            day: "Monday",
         },
        {
            day: "Tuesday",
        },
        {
            day: "Wednesday",
        },
        {
            day: "Thursday",
        },
        {
            day: "Friday",
        },
        {
            day: "Saturday",
        }
        ];
        for (var i = 0; i < weekdays.length; i++) {
            console.log(weekdays[date1.getDay()])
            return weekdays[date1.getDay()];
        }
    }
    function getttingDayTwo(day2) {
        var date2 = new Date(day2)
        var weekdays = [{
            day: "Sunday",
            // style : "color"
        },
        {
            day: "Monday",

        },
        {
            day: "Tuesday",

        },
        {
            day: "Wednesday",

        },
        {
            day: "Thursday",

        },
        {
            day: "Friday",

        },
        {
            day: "Saturday",

        }
        ];
        for (var i = 0; i < weekdays.length; i++) {
            console.log(weekdays[date2.getDay()])
            return weekdays[date2.getDay()];
        }
    }
    // function getFirstDay(day1) {
    //     var date1 = new Date(day1)
    //     var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     for (var i = 0; i < weekDays.length; i++) {
    //         console.log(weekDays[date1.getDay()]);
    //         return weekDays[date1.getDay()];
    //     }
    // }
    // function getSecondDay(day2) {
    //     var date2 = new Date(day2);
    //     var weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     for (var i = 0; i < weekDays.length; i++) {
    //         console.log(weekDays[date2.getDay()]);
    //         return weekDays[date2.getDay()];
    //     }
    // }
    return {
        getttingDayOne,
        getttingDayTwo
        // getFirstDay,
        // getSecondDay,
    }
}