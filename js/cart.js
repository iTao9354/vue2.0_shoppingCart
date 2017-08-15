/*
* @Author: Administrator
* @Date:   2017-08-15 22:22:51
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-15 23:31:54
*/
new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue!'
    },
    filters: {

    },
    mounted: function() {
        this.cartView();
    },
    methods: {
        cartView: function() {
            this.$http.get('../data/cartData.json', {'id':123}).then(function(res) {

            })
        }
    }
});