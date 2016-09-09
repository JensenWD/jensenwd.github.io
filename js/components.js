new Vue ({
    el: '#img-rotate',
    data: {
        n: 1,
        i: 1,
        photo_vip: 'img/proj_descrp.png',
        photo_handy: 'img/handy_home.png',
        photo_arr: [
            ['img/proj_descrp.png',
                'img/proj_overview.png',
                'img/proj_ipad.png',
                'img/resume_imac.png'],
            ['img/handy_home.png',
            'img/handy_services.png'],
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
        }
    }
})




