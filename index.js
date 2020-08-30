const interVal1 = 5000
const interVal2 = 1000
var app = new Vue({
    el: '#app',
    data: {
        dat: [
            {name : 'fine'},
            {name : 'cloudy'},
            {name : 'rainy'}
        ],
        idx: 0,
        isShow: false
    },
    mounted: function() {
        this.appear()
    },
    methods: {
        appear: function() {
            this.isShow = true
            setTimeout(() => this.disappear(), interVal1);
        },
        disappear: function() {
            this.idx++
            this.idx = (this.idx >= this.dat.length) ? 0 : this.idx 
            this.isShow = false
            setTimeout(() => this.appear(), interVal2);
        }
    }
})