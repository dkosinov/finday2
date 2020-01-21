Vue.component('headerComp', {
    data(){
        return {
            // isUploadFormShow: false,
            // partners: null,
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
                <div class="logo">
                    <a href="http://myfinday.online/" class="logo">
                        <div class="logo__text">
                            <div class="logo__text_1">myFinday</div><div class="logo__text_2">|счета</div>
                        </div>
                    </a>
                </div>
                <search-comp></search-comp>
                
<!--                <div class="upload-menu__item"-->
<!--                    @click="handlerShowUploadForm"-->
<!--                    title="Загрузите документы">-->
<!--                    <div class="upload__icon"><i class="fas fa-cloud-upload-alt fa-2x"></i></div>                -->
<!--                </div>-->


            </header>`
});