describe("The Matching days exercise", function () {
    describe("the getFirstDay function", function () {
        it("should return 6 for Saturday with date 2020/02/15", function () {
            var gettingDay = HighlightDay();
            var day = "2020/02/15";
            assert.deepEqual(gettingDay.getDay(day), 6);
        });
        it("should return 3 for Wednesday with date 2020/04/29", function () {
            var gettingDay = HighlightDay();
            var day = "2020/04/29";
            assert.deepEqual(gettingDay.getDay(day), 3);
        });
        it("should return 0 for Sunday with date 2020/06/21", function () {
            var gettingDay = HighlightDay();
            var day = "2020/06/21";
            assert.deepEqual(gettingDay.getDay(day), 0);
        });
        it("should return 1 for Monday with date 2017/01/16", function () {
            var gettingDay = HighlightDay();
            var day = "2017/01/16";
            assert.deepEqual(gettingDay.getDay(day), 1);
        });
        it("should return 5 for Friday with date 2017/11/24", function () {
            var gettingDay = HighlightDay();
            var day = "2017/11/24";
            assert.deepEqual(gettingDay.getDay(day), 5);
        });
        it("should return 4 for Thursday with date 2017/09/21", function () {
            var gettingDay = HighlightDay();
            var day = "2017/09/21";
            assert.deepEqual(gettingDay.getDay(day), 4);
        });
    });
});