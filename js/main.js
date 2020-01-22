const app = new Vue({
    el: '#app',
    data: function() {
        return {
            visible: false,
        }
    },

    methods: {
        getFinData (data) {
            if (!parseInt(data)){
                return data;
            }
            if ((data > 999) || (data < -999)) {
                let moneyStr = data.toFixed(2);
                let moneyArr = moneyStr.split('').reverse();
                // console.log(moneyArr);
                // throw 'stop';
                let index = 3;
                while (moneyArr.length > index + 3) {
                    moneyArr.splice(index + 3, 0, ' ');
                    index += 4;
                }
                return moneyArr.reverse().join('');

            } else {
                return data.toFixed(2);
            }
        },
        getEventData(data){
            return `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`;
        },
        sortObjsArrByNumberProp(arr, prop){
            return arr.sort((a, b) => {
                return (a[prop] - b[prop]);
            })
        },
        // sortedEventsByDate(events) {
        //     if (events.length) {
        //         function compare(a, b) {
        //             console.log(`a.date = ${a.date}`);
        //             console.log(`b.date = ${b.date}`);
        //             if (a.date < b.date)
        //                 return -1;
        //             if (a.date > b.date)
        //                 return 1;
        //             return 0;
        //         }
        //         return events.sort(compare);
        //     }
        // },

        notifySuccessMessage(msg){
            this.$message({
                showClose: true,
                type: 'success',
                message: msg,
            });
        },
        notifyWarningMessage(msg){
            this.$message({
                showClose: true,
                type: 'warning',
                message: msg,
            });
        },
        notifyErrorMessage(msg){
            this.$message({
                showClose: true,
                type: 'error',
                message: msg,
            });
        },
        getRatingHTML(rating) {
            let ratingHTML = '';
            const maxRating = 5;
            for (var j = 0; j < maxRating; j++) {
                if (j < rating) {
                    ratingHTML += '<div class="stars__star stars__star_active"><i class="fas fa-star"></i></div>\n'
                    //если пустые звёздочки должны отображатьса, то раскоментить (НЕ РАБОТАЕТ!!!)
                } else {
                    ratingHTML += '<div class="stars__star"><i class="fas fa-star"></i></div>\n'
                }
            }
            return ratingHTML;
        },
    }
});