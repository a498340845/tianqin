; $(function ($, window, document, undefined) {
    func = function () {
        var formatThousands = function (number) {
            var result = '', counter = 0;
            if(!number){
                number = '0';
            }else{
                number = number.toString();
            }
            for (var i = number.length - 1; i >= 0; i--) {
                counter++;
                result = number.charAt(i) + result;
                if (!(counter % 3) && i !== 0) {
                    result = ',' + result;
                }
            }
            return result;
        };

        return {
            formatThousands: function (number) {
                return formatThousands(number);
            },
        }
    };
}(jQuery, window, document));


