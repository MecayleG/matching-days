describe("The Matching days exercise", function () {
    describe("the getFirstDay function", function () {
        it("should return Saturday for date 2020/02/15", function () {
            var getDay = HighlightDay();
            var day = "2020/02/15";
            var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            assert.deepEqual(getDay.getFirstDay(day, week), "Saturday");
        });
        it("should return Wednesday for date 2020/04/29", function () {
            var getDay = HighlightDay();
            var day = "2020/04/29";
            var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            assert.deepEqual(getDay.getFirstDay(day, week), "Wednesday");
        });
        it("should return Sunday for date 2020/06/21", function () {
            var getDay = HighlightDay();
            var day = "2020/06/21";
            var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            assert.deepEqual(getDay.getFirstDay(day, week), "Sunday");
        });
    });
    describe("the getSecondDay function", function () {
        it("should return Monday for date 2017/01/16", function () {
            var getDay = HighlightDay();
            var day2 = "2017/01/16";
            var week2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            assert.deepEqual(getDay.getSecondDay(day2, week2), "Monday");
        });
        it("should return Friday for date 2017/11/24", function () {
            var getDay = HighlightDay();
            var day2 = "2017/11/24";
            var week2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            assert.deepEqual(getDay.getSecondDay(day2, week2), "Friday");
        });
        it("should return Thursday for date 2017/09/21", function () {
            var getDay = HighlightDay();
            var day2 = "2017/09/21";
            var week2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            assert.deepEqual(getDay.getSecondDay(day2, week2), "Thursday");
        });
    });
});