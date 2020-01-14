Vue.component('PartnerComp', {
    props: ['partner'],
    data(){
        return {
            isPartnerFormVisible: false,
        }
    },
    computed: {
        partnerShortName: function () {
            return this.partner.name1.slice(0,20);
        }
    },
    methods: {
        handleShowPartnerForm(){
            this.isPartnerFormVisible = true;
        },
    },
    template: `<div class="partner-container">
                <div class="partner__tips-block">
                    <div class="partner-actions-block">
                        <div class="icon-block"
                            @click="handleShowPartnerForm()">
                            <i class="el-icon-edit"></i>
                        </div>
                        <div class="icon-block"><i class="el-icon-share"></i></div>
                        <div class="icon-block"><i class="el-icon-delete"></i></div>
                    </div>
                    <bills-comp
                        :bills="partner.bills"></bills-comp>
                </div>
                <div class="partner-block" 
                    :title="partner.name2"
                    dragable="true">
                    {{partnerShortName}}
                </div>
                <div class="product-mini__stars stars"
                    v-html="$root.getRatingHTML(partner.rating)">
                </div>
                <partner-form-el
                    ref="partner"
                    :partner="partner">
                </partner-form-el>
             </div>`
});

Vue.component('PartnerFormEl', {
    props: ['partner'],
    data() {
        return {
            loading: false,
            timer: null,
        };
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleClose(done) {
            if (this.loading) {
                return;
            }
            this.$confirm('Do you want to submit?')
                .then(_ => {
                    this.loading = true;
                    this.timer = setTimeout(() => {
                        this.onSubmit();
                        done();
                        // animation takes time
                        setTimeout(() => {
                            this.loading = false;
                        }, 400);
                    }, 2000);
                })
                .catch(_ => {});
        },
        cancelForm() {
            this.loading = false;
            this.$parent.isPartnerFormVisible = false;
            clearTimeout(this.timer);
        },
    },
    template: `<el-drawer
                :visible.sync="$parent.isPartnerFormVisible"
                size="50%"
                custom-class="demo-drawer"
                    ref="drawer">                
                  <div class="partner-info-container">
                        <el-form :model="partner">
                              <h3>{{partner.name2}}</h3>
                              <el-form-item label="ИНН"">
                                  <el-input v-model="partner.id" autocomplete="off"></el-input>
                              </el-form-item>
                              <el-form-item label="Краткое наименование">
                                  <el-input v-model="partner.name1"></el-input>
                              </el-form-item>
                              <el-form-item label="Включить в ежедневный план">
                                  <el-switch v-model="partner.everyDayPayment"></el-switch>
                              </el-form-item>
                              <el-form-item label="Приоритет">
                                  <el-rate v-model="partner.rating"></el-rate>
                              </el-form-item>                              
                              <el-form-item label="Примечания">
                                  <el-input type="textarea" v-model="partner.comment"></el-input>
                              </el-form-item>
                        </el-form>
                        <div class="demo-drawer__footer">
                            <el-button type="primary"
                                 @click="$refs.drawer.closeDrawer()"
                                 :loading="loading">
                                     {{ loading ? 'Сохраняю ...' : 'Сохранить' }}</el-button>
                            <el-button @click="cancelForm">Отмена</el-button>                
                        </div>
                    </div>
            </el-drawer>`
});