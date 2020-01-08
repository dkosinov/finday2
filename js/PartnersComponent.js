Vue.component('partnersComp', {
    data() {
        return {
            tableData: [
                {id: '5032292612', name: 'Филиал АО "Мособлгаз" "Подольскмежрайгаз"', billsToPayNumber: 5, billsToPaySum: 1250423.06, lastPayDate: '2019-12-26', comment: 'Есть неоплаченные счета за ноябрь 2019', everyDayPayment: true, bills: [{
                    id: 1, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [
                        {content: 'Получен счёт', type:'primary ', date:'2019-11-01', sum:100251.23}, {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000}, {content: 'Подано исковое заявление', type:'info', date:'2019-12-10', sum:50251.23}, {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23}, {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000}, {content: 'Обязательный платёж', type:'danger', date:'2020-01-10', sum:50000}],}, {
                    id: 2, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23}, {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000}, {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}],}, {
                    id: 3, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23}, {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000}, {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}],}]
                },
                {id: '5036010996', name: 'МРИ ФНС России N5 по Московской области', billsToPayNumber: 3, billsToPaySum: 522000.17, lastPayDate: '2019-12-30', comment: 'Есть требование срок оплаты до 25.01.2020', everyDayPayment: true, bills: [{
                    id: 1, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23}, {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000}, {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}],}, {
                    id: 2, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000}, {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000}, {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}],}, {
                    id: 3, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [
                        {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23}, {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000}, {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}],}]
                },
                {id: '5896010996', name: 'ООО "Колокольчик"', billsToPayNumber: 10, billsToPaySum: 22522000.17, lastPayDate: '2019-05-30', comment: 'Не платить, есть проблемы с товаром', everyDayPayment: false, bills: [{
                    id: 1, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000}, {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}],}, {
                    id: 2, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [],}, {
                    id: 3, sum: 100251.23, debt: 45251.23, comment: 'Это комментарий к счёту', events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000}, {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23}, {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000},],}]
                },
                {id: '5898880996', name: 'ООО "Ромашка"', billsToPayNumber: 3, billsToPaySum: 12000.17, lastPayDate: '2019-04-30', comment: '', everyDayPayment: false, bills: []
                }
            ],
            search: '',
            isPartnerFormVisible: false,
        }
    },
    methods: {
        handlePayAllBills(index, row) {
            console.log(index, row);
        },
        handlePayment(index, row) {
            this.$refs.partner.partnerData = row;
            this.isPartnerFormVisible = true;
            console.log(index, row);
        },
    },
    template: `<div>
                <div
                    v-for="(partner, index) in tableData">
                    <el-partner
                        :partner="partner"></el-partner>
                </div>

                <el-table
                    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <div class="container-partner-info">
                                <h2>{{ props.row.name }}</h2>
                                <h4>{{ props.row.comment }}</h4>
                                <el-partner-bills
                                    :partner-bills="props.row.bills">
                                </el-partner-bills>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                      label="ИНН"
                      prop="id"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      label="Наименование"
                      prop="name"
                      show-overflow-tooltip
                      width="200">
                    </el-table-column>
                    <el-table-column
                      label="Сумма долга"
                      prop="billsToPaySum"
                      header-align="center"
                      width="150"
                      align="right">
                    </el-table-column>
                    <el-table-column
                      label="Дата последней оплаты"
                      prop="lastPayDate"
                      header-align="center"
                      width="110"
                      align="center">
                    </el-table-column>
                    <el-table-column
                      label="Комментарий"
                      prop="comment"
                      width="100"
                      show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                      align="right">
                      <template slot="header" slot-scope="scope">
                        <el-input
                          v-model="search"
                          size="mini"
                          placeholder="Введите для поиска по наименованию"/>
                      </template>
                      <template slot-scope="scope">
                        <el-button
                          size="medium"
                          type="info"
                          @click="handlePayment(scope.$index, scope.row)">Изменить</el-button>
                        <el-button
                          size="medium"
                          type="success"
                          @click="handlePayAllBills(scope.$index, scope.row)">Оплатить</el-button>
                      </template>
                    </el-table-column>
                </el-table>
                <el-partner-form ref="partner"></el-partner-form>
            </div>`
});

Vue.component('elPartner', {
   props: ['partner'],
   template: `<div>
                <el-badge
                   :value="partner.billsToPaySum" class="item">
                    <el-button>{{partner.name}}</el-button>
                </el-badge>
              </div>`
});

Vue.component('elPartnerForm', {
    data() {
        return {
            partnerData: {},
            activeName: 'first'
        };
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleTabClick(tab, event) {
            console.log(tab, event);
        }
    },
    template: `<el-drawer
              :visible.sync="$parent.isPartnerFormVisible"
              size="50%">
                <el-tabs type="card" @tab-click="handleTabClick">
                  <el-tab-pane label="Инфо">
                    <div style="padding: 20px">
                      <el-form ref="partnerData" :model="partnerData">
                        <el-form-item label="ИНН"">
                        <el-input v-model="partnerData.id" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="Наименование">
                        <el-input v-model="partnerData.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Включить в ежедневный план">
                        <el-switch v-model="partnerData.everyDayPayment"></el-switch>
                        </el-form-item>
                        <el-form-item label="Примечания">
                        <el-input type="textarea" v-model="partnerData.comment"></el-input>
                        </el-form-item>
                      </el-form>
                  </div>
                  </el-tab-pane>
                  <el-tab-pane label="Счета">Bills</el-tab-pane>
                </el-tabs>
                <div>
                   <el-button type="primary" @click="onSubmit">Сохранить</el-button>
                   <el-button>Отмена</el-button>
                </div>
            </el-drawer>`
});

Vue.component('elPartnerBills',{
    props: ['partnerBills'],
    data(){
        return {
            isBillFormVisible: false,
        }
    },
    methods: {
        handleBillAdd(){
            console.log('add bill');
            // this.$refs.bill.bills = partnerData.bills;
            this.isBillFormVisible = true;
        },
    },
    template: `<div>
                 <el-bill-form 
                    ref="bill"
                    :bills="partnerBills">
                 </el-bill-form>
                 <div class="container-flex-row">
                     <h2>Счета к оплате</h2>
                     <el-button
                         icon="el-icon-document"
                         size="medium"
                         type="primary"
                         @click="handleBillAdd()">
                         Добавить
                     </el-button>
                 </div>                 
                 <el-table
                   :data="partnerBills"
                   style="width: 100%">
                   <el-table-column type="expand">
                     <template slot-scope="props">
                        <div class="container-flex-row">
                            <el-bill-events
                                :bill-events="props.row.events">
                            </el-bill-events>
                            <el-bills-files></el-bills-files>
                        </div>

                     </template>
                   </el-table-column>
                   <el-table-column
                     label="Номер счёта"
                     prop="id">
                   </el-table-column>
                   <el-table-column
                     label="Сумма к оплате"
                     prop="sum">
                   </el-table-column>
                   <el-table-column
                     label="Долг по счёту"
                     prop="debt">
                   </el-table-column>
                   <el-table-column
                     label="Комментарий"
                     prop="comment">
                   </el-table-column>
                 </el-table>
              </div>`
});

Vue.component('elBillEvents',{
    props: ['billEvents'],
    data(){
        return {
            isEventFormVisible: false,
        }
    },
    methods: {
        handleEventAdd(){
            console.log('add event');
            this.isEventFormVisible = true;
        },
    },
    template: `<div class="block">
                   <el-event-form
                        :events="billEvents">
                   </el-event-form>
                   <div class="container-flex-row">
                       <h3>Cобытия</h3>
                       <el-button
                           icon="el-icon-date"
                           size="medium"
                           type="primary"
                           @click="handleEventAdd()">
                           Добавить
                       </el-button>
                   </div> 
                   <el-timeline>
                     <el-timeline-item
                       v-for="(event, index) in billEvents"
                       :key="index"
                       :type="event.type"
                       :timestamp="event.date">
                            {{event.content}}
                            <el-tag :type="event.type">{{event.sum}}</el-tag>
                     </el-timeline-item>
                   </el-timeline>
               </div>`
});

Vue.component('elBillForm',{
    props: ['bills'],
    data() {
        return {
            // bills: [],
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
        }
    },

    methods: {
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
    },
    template: `<el-drawer
              :visible.sync="$parent.isBillFormVisible"
              size="50%">
                    <div style="padding: 20px">
                       <el-form ref="newBill" :model="newBill">
                            <el-form-item label="Номер счёта">
                               <el-input v-model="newBill.id" autocomplete="off" placeholder="Номер счёта"></el-input>
                            </el-form-item>
                            <el-form-item label="Сумма">
                               <el-input v-model="newBill.sum" autocomplete="off" placeholder="0"></el-input>
                            </el-form-item>
                            <el-form-item label="Дата оплаты по сроку">
                                 <div class="block">
<!--                                  <span class="demonstration"></span>-->
                                  <el-date-picker
                                    v-model="newBill.events[1].date"
                                    type="date"
                                    placeholder="Виберите дату">
                                  </el-date-picker>
                                </div>
                            </el-form-item>
                            <el-form-item label="Долг">
                               <el-input v-model="newBill.debt" :disabled="true"></el-input>
                            </el-form-item>
                            <el-form-item label="Комментарий">
                               <el-input type="textarea" v-model="newBill.comment"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="onSubmit">Сохранить</el-button>
                              <el-button>Отмена</el-button>
                            </el-form-item>
                       </el-form>
                    </div>
            </el-drawer>`
});

Vue.component('elEventForm',{
    props: ['events'],
    data() {
        return {
            emptyEvent: {
                content: 'Оплата',
                type:'success',
                date:'',
                sum:null},
            newEvent: {
                content: 'Оплата',
                type:'success',
                date:'',
                sum:null},
            eventsTemplates: [
                    {content: 'Получен счёт', type:'primary', date:'', sum:0.00},
                    {content: 'Дедлайн оплаты', type:'warning', date:'', sum:0.00},
                ],
        }
    },

    methods: {
        onSubmit() {
            let newEvent = Object.assign({},this.newEvent);
            newEvent.date = this.$root.getEventData(newEvent.date);
            console.log(newEvent);
            this.events.push(newEvent);
            for (let key in this.emptyEvent) {
                this.newEvent[key] = this.emptyEvent[key];
            }
            console.log('submit!');
            this.$parent.isEventFormVisible = false;
        },
    },
    template: `<el-drawer
              :visible.sync="$parent.isEventFormVisible"
              size="50%">
                    <div style="padding: 20px">
                       <el-form ref="newEvent" :model="newEvent">
                            <el-form-item label="Название события">
                               <el-input v-model="newEvent.content" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="Сумма">
                               <el-input v-model="newEvent.sum" autocomplete="off" placeholder="0"></el-input>
                            </el-form-item>
                            <el-form-item label="Дата">
                                 <div class="block">
                                  <el-date-picker
                                    v-model="newEvent.date"
                                    type="date"
                                    placeholder="Виберите дату">
                                  </el-date-picker>
                                </div>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="onSubmit">Сохранить</el-button>
                              <el-button>Отмена</el-button>
                            </el-form-item>
                       </el-form>
                    </div>
            </el-drawer>`
});

Vue.component('elBillsFiles',{
    methods: {
        handleFileAdd(){
            console.log('add file')
        }
    },
    template: `<div>
                <div class="container-flex-row">
                     <h3>Документы</h3>
                     <el-button
                         icon="el-icon-paperclip"
                         size="medium"
                         type="primary"
                         @click="handleFileAdd()">
                         Добавить
                     </el-button>
                 </div>                 
                <el-bills-drop></el-bills-drop>
            </div>`
});

Vue.component('elBillsDrop',{
    data(){
        return {
            fileList: [],
        }
    },
    methods: {
        handlePreview() {
            console.log('handlePreview');
        },
        handleRemove() {
            console.log('handleRemove');
        },
    },
    template: `<div>
                 <el-upload
                   class="upload-demo"
                   drag
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :file-list="fileList"
                   multiple>
                   <i class="el-icon-upload"></i>
                   <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                   <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
                 </el-upload>
<!--                    Перетащите сюда файлы со счетами или другие документы для оплаты-->
               </div>`
});