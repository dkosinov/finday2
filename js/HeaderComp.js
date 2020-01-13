Vue.component('headerComp', {
    data(){
        return {
            isUploadFormShow: false,
            partners: null,
        }
    },
    created: function () {
    },
    methods: {
        handlerShowUploadForm(){
            console.log('upload form');
            this.partners = this.$root.$refs.partners.partnersData;
            this.isUploadFormShow = true;
        },
    },
    template: `<header class="header-container">
                <a href="#" class="logo">
                    <span class="logo__text_1">MY</span><span class="logo__text_2">FIN</span><span class="logo__text_3">DAY</span>                    
                </a>
                <div class="upload-menu__item"
                    @click="handlerShowUploadForm">
                    <div class="upload__icon"><i class="fas fa-cloud-upload-alt fa-2x"></i></div>                
                </div>
                <upload-dnd-comp
                   :partnersData="partners">
                </upload-dnd-comp> 

            </header>`
});