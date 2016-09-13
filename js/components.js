//Gallery templates
// <template id="gallery">
// </template>
Vue.component('gallery-right', {
    template: '#gallery-right',
    props: ['func-call', 
    'photo-src']
  })

Vue.component('gallery-left', {
    template: '#gallery-left',
    props: ['func-call', 
    'photo-src']
  })




// Photos component
new Vue ({
    el: '#img-rotate',
    data: {
        n: 1,
        i: 1,
        m: 1,
        photo_vip: 'img/proj_descrp.png',
        photo_handy: 'img/handy_home.png',
        photo_portfolio: 'img/portfolio_laptop.png',
        photo_arr: [
            ['img/proj_descrp.png',
            'img/proj_overview.png',
            'img/proj_ipad.png',
            'img/resume_imac.png'],
            ['img/handy_home.png',
            'img/handy_services.png'],
            ['img/portfolio_laptop.png',
            'img/portfolio_ipad.png',
            'img/portfolio_phone.png'],
        ],
    },
    methods: {
        rot_vip: function () {
            if (this.n > this.photo_arr[0].length - 1)
                this.n = 0
            return this.photo_vip = this.photo_arr[0][this.n++]
        },
        rot_handy: function () {
            if (this.i > this.photo_arr[1].length - 1)
                this.i = 0
            return this.photo_handy = this.photo_arr[1][this.i++]
        },
        rot_portfolio: function () {
            if (this.m > this.photo_arr[2].length - 1)
                this.m = 0
            return this.photo_portfolio = this.photo_arr[2][this.m++]
        }
    }
})




