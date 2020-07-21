function HighlightDay() {
    
    function getDay(day) {
        var date = new Date(day)
        var weekDays = [0, 1, 2, 3, 4, 5, 6];
        for (var i = 0; i < weekDays.length; i++) {
            console.log(date.getDay());
            return date.getDay();
        }
    }
   return {
        getDay
    }
}