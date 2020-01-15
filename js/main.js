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
        notifySuccessMessage(msg){
            this.$notify.success({
                title: 'Success',
                message: msg,
                offset: 100,
            });
        },
        notifyWarningMessage(msg){
            this.$notify({
                title: 'Warning',
                message: msg,
                type: 'warning',
                offset: 100,
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