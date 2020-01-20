Vue.component('bills-comp',{
    props: ['bills'],
    data(){
        return {
            isPartnerBillsInfoVisible: false,
        }
    },
    filters: {

    },
    methods: {
        handleShowPartnerBills(partner){
            this.isPartnerBillsVisible = true;
        },
        handleEditPartnerForm(bill){
            // this.$refs.partner.partnerData = partner;
            this.isBillFormVisible = true;
        },
        billsDebtNumber(bills){
            let notPaidBillsNumber = this.debtBills(bills).length;
            console.log(notPaidBillsNumber);
            return notPaidBillsNumber;
        },
        findPaymentEvents(events){
            return events.filter(event => {
                return (event.name === 'payment')
            });
        },
        billPaymentsSum(bill){
            let paymentSum = this.findPaymentEvents(bill.events).reduce((accum, curr)=>{
                return accum + curr.sum;
            }, 0);
            return paymentSum;
        },
        findStartEvents(events){
            return events.filter(event => {
                return (event.name === 'start')
            });
        },
        findBillStartEvent(events){
            let billStartEvent = {};
            let startEvs = this.findStartEvents(events);
            if (startEvs.length === 0) {
                //если стартовых событий Нет сообщим об этом
                this.$root.notifyWarningMessage('Стартовое событие отсутсвует!');
                billStartEvent = {sum:0};
            } else if (startEvs.length > 1) {
                //если стартовых событий несколько сообщим об этом и возвратим последнее
                this.$root.notifyWarningMessage(`Стартовых событий несколько: ${startEvs.length}`);
                billStartEvent = startEvs[startEvs.length-1];
            } else {
                billStartEvent = startEvs[startEvs.length-1];
                console.log(billStartEvent);
            }
            return billStartEvent;
        },
        billDebtSum(bill){
            //Находим стартовое событие с суммой долга
            let billSum = this.findBillStartEvent(bill.events).sum;
            console.log(`К оплате по счёту: ${billSum}`);

            //Находим cумму платежей по счёту
            let paidSum = this.billPaymentsSum(bill);
            console.log(`Оплачено по счёту ${paidSum}`);

            let notPaidSum = billSum - paidSum;
            if (notPaidSum < 0){
                this.$root.notifyWarningMessage(`Остаток к оплате по счёту меньше 0: ${notPaidSum}`);
            }
            return notPaidSum;
        },
        billsDebNum_Sum(bills){
            return [bills.length, bills.reduce((accum, curr)=>{
                return accum + this.billDebtSum(curr);
            }, 0)];
        }
    },
    template: `<div class="partner__bills-block">
                <div class="bills-block__tag"
                    title="Информация о неоплаченных счетах"
                    @click="isPartnerBillsInfoVisible=!isPartnerBillsInfoVisible">
                    {{billsDebNum_Sum(bills)[0]}} : {{$root.getFinData(billsDebNum_Sum(bills)[1])}}
                </div>
                <div class="bills-block__items"
                    v-if="isPartnerBillsInfoVisible">
                    <bill-el
                        v-for="(bill, index) of bills" 
                        :bill="bill"
                        :key="index">
                    </bill-el>
                </div>
            </div>`
});

Vue.component('billEl', {
    props: ['bill'],
    data(){
        return {
            isBillInfoVisible: false,
            isBillFormVisible: false,
        }
    },
    methods: {
        handleShowBillForm(){
            this.isBillFormVisible = true;
        },
    },
    template: `<div draggable="true"
                    class="bill-container">
                    <div class="bill-info__title"
                       :title="bill.comment"
                       @click="isBillInfoVisible=!isBillInfoVisible">
                        <i class="far fa-file"></i>
                        {{$root.getFinData($parent.billDebtSum(bill))}} : {{bill.events[1].date}}
                    </div>
                    <div v-if="isBillInfoVisible">
                       <bill-info-el
                           :bill="bill">
                       </bill-info-el>
                    </div>
                    <bill-form-el
                       :bill="bill">
                    </bill-form-el>             
            </div>`
});

Vue.component('billInfoEl', {
    props: ['bill'],
    data(){
        return {
            isBillEventsVisible: false,
            count: 0,
        }
    },
    template: `<div class="bill__info-container">
                {{bill.id}}<br>
                {{bill.events.length}}<br>
                <div class="events-block">
                    <el-button class="events__btn"
                        icon="el-icon-date"
                        size="medium"
                        type="primary"
                        @click="isBillEventsVisible=!isBillEventsVisible"
                        title="Показать/скрыть события">
                        События
                    </el-button>                  
                    <div v-if="isBillEventsVisible"
                        class="events__content">
                        <bill-events-comp
                           :bill-events="bill.events">
                        </bill-events-comp>                
                     </div>  
                </div>            
            </div>`
});

Vue.component('billFormEl',{
    props: ['bill'],
    data() {
        return {
            bills: [],
            emptyBill: {
                id: null,
                sum: null,
                debt: 0.00,
                comment: '',
                events: [
                    {content: 'Получен счёт', type:'primary ', date:'', sum:0.00},
                    {content: 'Дедлайн оплаты', type:'warning', date:'', sum:0.00},
                ],
            },
            newBill: {
                id: null,
                sum: null,
                debt: 0.00,
                comment: '',
                events: [
                    {content: 'Получен счёт', type:'primary ', date:'', sum:0.00},
                    {content: 'Дедлайн оплаты', type:'warning', date:'', sum:0.00},
                ],
            },
            loading: false,
            timer: null,
            isBillEventsVisible: false,
        }
    },

    methods: {
        // handlerShowBillEvents(){
        //     console.log('События');
        //     this.isBillEventsVisible = true;
        // },
        onSubmit() {
            let newBill = Object.assign({},this.newBill);
            // newBill.events[0].date = new Date();
            newBill.events[0].date = this.$root.getEventData(new Date());
            newBill.events[0].sum = newBill.sum;
            newBill.events[1].date = this.$root.getEventData(newBill.events[1].date);
            // newBill.events[1].date.toString(newBill.events[1].date);
            newBill.events[1].sum = newBill.sum;
            console.log(newBill);
            this.bills.push(newBill);
            // this.newBill = {};
            for (let key in this.emptyBill) {
                this.newBill[key] = this.emptyBill[key];
            }
            console.log('submit!');
            this.$parent.isBillFormVisible = false;
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
            this.$parent.isBillFormVisible = false;
            clearTimeout(this.timer);
        }
    },
    template: `<el-drawer
              :visible.sync="$parent.isBillFormVisible"
              size="50%"
              custom-class="demo-drawer"
              ref="drawer">
                    <div style="padding: 20px" class="demo-drawer__content">
                       <el-form :model="bill">
                            <el-form-item label="Номер счёта">
                               <el-input v-model="bill.id" autocomplete="off" placeholder="Номер счёта"></el-input>
                            </el-form-item>
                            <el-form-item label="Сумма">
                               <el-input v-model="bill.events[0].sum" autocomplete="off" placeholder="0"></el-input>
                            </el-form-item>
                            <el-form-item label="Дата оплаты по сроку">
                                 <div class="block">
<!--                                  <span class="demonstration"></span>-->
                                  <el-date-picker
                                    v-model="bill.events[1].date"
                                    type="date"
                                    placeholder="Виберите дату">
                                  </el-date-picker>
                                </div>
                            </el-form-item>
                            <el-form-item label="Долг">
                               <el-input :value="$parent.$parent.billDebtSum(bill)"
                                    :disabled="true"></el-input>
                            </el-form-item>
                            <el-form-item label="Комментарий">
                               <el-input type="textarea" v-model="bill.comment"></el-input>
                            </el-form-item>
                            <el-form-item>
                            </el-form-item>
                       </el-form>
<!--                       <button @click="handlerShowBillEvents">События</button>-->
                       <div class="demo-drawer__footer">
                           <el-button type="primary"
                                @click="$refs.drawer.closeDrawer()"
                                :loading="loading">
                                    {{ loading ? 'Сохраняю ...' : 'Сохранить' }}</el-button>
<!--                           <el-button type="primary" @click="onSubmit">Сохранить</el-button>-->
                           <el-button @click="cancelForm">Отмена</el-button>
                       </div>
                    </div>
            </el-drawer>`
});
