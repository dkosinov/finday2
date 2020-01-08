const app = new Vue({
    el: '#app',
    data: function() {
        return {
            visible: false,
        }
    },
    methods: {
        getEventData(data){
            return `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`;
        }
    }
});