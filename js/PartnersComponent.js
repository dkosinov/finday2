Vue.component('partnersComp', {
    data() {
        return {
            tableData: [{
                id: '5032292612',
                name: 'Филиал АО "Мособлгаз" "Подольскмежрайгаз"',
                billsToPayNumber: 5,
                billsToPaySum: 1250423.06,
                lastPayDate: '2019-12-26',
                comment: 'Есть неоплаченные счета за ноябрь 2019',
                everyDayPayment: true,
                bills: [{
                    id: 1,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [
                        {content: 'Получен счёт', type:'primary ', date:'2019-11-01', sum:100251.23},
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000},
                        {content: 'Подано исковое заявление', type:'info', date:'2019-12-10', sum:50251.23},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23},
                        {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000},
                        {content: 'Обязательный платёж', type:'danger', date:'2020-01-10', sum:50000}
                    ],
                }, {
                    id: 2,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23},
                        {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000},
                        {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}
                    ],
                }, {
                    id: 3,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23},
                        {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000},
                        {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}
                    ],
                }]
            }, {
                id: '5036010996',
                name: 'МРИ ФНС России N5 по Московской области',
                billsToPayNumber: 3,
                billsToPaySum: 522000.17,
                lastPayDate: '2019-12-30',
                comment: 'Есть требование срок оплаты до 25.01.2020',
                everyDayPayment: true,
                bills: [{
                    id: 1,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23},
                        {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000},
                        {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}
                    ],
                }, {
                    id: 2,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000},
                        {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000},
                        {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}
                    ],
                }, {
                    id: 3,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [
                        {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23},
                        {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000},
                        {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}
                    ],
                }]
            }, {
                id: '5896010996',
                name: 'ООО "Колокольчик"',
                billsToPayNumber: 10,
                billsToPaySum: 22522000.17,
                lastPayDate: '2019-05-30',
                comment: 'Не платить, есть проблемы с товаром',
                everyDayPayment: false,
                bills: [{
                    id: 1,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000},
                        {content: 'Обязательный платёж', type:'danger', date:'2020-1-10', sum:50000}
                    ],
                }, {
                    id: 2,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [],
                }, {
                    id: 3,
                    sum: 100251.23,
                    debt: 45251.23,
                    events: [
                        {content: 'Оплата', type:'success', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-15', sum:50000},
                        {content: 'Дедлайн', type:'warning', date:'2019-11-30', sum:50251.23},
                        {content: 'Оплата', type:'success', date:'2019-11-10', sum:5000},
                    ],
                }]
            }, {
                id: '5898880996',
                name: 'ООО "Ромашка"',
                billsToPayNumber: 3,
                billsToPaySum: 12000.17,
                lastPayDate: '2019-04-30',
                comment: '',
                everyDayPayment: false,
                bills: []
            }],
            search: '',
            isPartnerFormVisible: false,
            isBillFormVisible: false,
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
        handleBillAdd(partnerData){
            console.log(partnerData);
            this.$refs.bill.bills = partnerData.bills;
            this.isBillFormVisible = true;
        }
    },
    template: `<div>
                <el-table
                    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <h4>{{ props.row.comment }}</h4>
                            <h2>{{ props.row.name }}</h2>
                            <div class="container-flex-row">
                                <h1>Счета к оплате</h1>
                                <el-button
                                    size="medium"
                                    type="primary"
                                    @click="handleBillAdd(props.row)">
                                    Добавить счёт
                                </el-button>
                            </div>
                            <el-partner-bills
                                :partner-data="props.row">
                            </el-partner-bills>
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
<!--                    <el-table-column-->
<!--                      label="Счетов к оплате"-->
<!--                      header-align="center"-->
<!--                      prop="billsToPayNumber"-->
<!--                      width="85"-->
<!--                      align="right">-->
<!--                    </el-table-column>-->
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
                          type="primary"
                          @click="handlePayment(scope.$index, scope.row)">Изменить</el-button>
                        <el-button
                          size="medium"
                          type="success"
                          @click="handlePayAllBills(scope.$index, scope.row)">Оплатить</el-button>
                      </template>
                    </el-table-column>
                </el-table>
                <el-partner-form ref="partner"></el-partner-form>
                <el-bill-form ref="bill"></el-bill-form>
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
    props: ['partnerData'],
    data(){
        return {

        }
    },
    template: `<div>
                 <el-table
                   :data="partnerData.bills"
                   style="width: 100%">
                   <el-table-column type="expand">
                     <template slot-scope="props">
                        <el-bill-events
                            :bill-data="props.row">
                        </el-bill-events>
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
                 </el-table>
                 <div class="dnd-container">
                    Перетащите сюда файлы со счетами или нажмите для загрузки новых счетов
                 </div>
              </div>`
});

Vue.component('elBillEvents',{
    props: ['billData'],
    template: `<div class="block">
                   <el-timeline>
                     <el-timeline-item
                       v-for="(event, index) in billData.events"
                       :key="index"
                       :type="event.type"
                       :timestamp="event.date">
                       {{event.content}} сумма: {{event.sum}}
                     </el-timeline-item>
                   </el-timeline>
               </div>`
});

Vue.component('elBillForm',{
    data() {
        return {
            bills: [],
            emptyBillData: {
                id: 0,
                sum: 0.00,
                debt: 0.00,
                comment: '',
                events: [
                    {content: 'Получен счёт', type:'primary ', date:'', sum:0.00},
                    {content: 'Дедлайн оплаты', type:'warning', date:'', sum:0.00},
                ],
            },
            billData: {
                id: 0,
                sum: 0.00,
                debt: 0.00,
                comment: '',
                events: [
                    {content: 'Получен счёт', type:'primary ', date:'', sum:0.00},
                    {content: 'Дедлайн оплаты', type:'warning', date:'', sum:0.00},
                ],
            },
        }
    },
    // created: function () {
    //     for (let key in this.emptyBillData) {
    //         this.billData[key] = this.emptyBillData[key];
    //     }
    //     console.log(this.billData);
    // },
    methods: {
        onSubmit() {
            this.bills.push(this.billData);
            // this.billData = {};
            for (let key in this.emptyBillData) {
                this.billData[key] = this.emptyBillData[key];
            }
            console.log('submit!');
            this.$parent.isBillFormVisible = false;
        },
    },
    template: `<el-drawer
              :visible.sync="$parent.isBillFormVisible"
              size="50%">
                    <div style="padding: 20px">
                       <el-form ref="billData" :model="billData">
                            <el-form-item label="Номер"">
                               <el-input v-model="billData.id" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="Сумма">
                               <el-input v-model="billData.sum"></el-input>
                            </el-form-item>
                            <el-form-item label="Долг">
                               <el-input v-model="billData.debt"></el-input>
                            </el-form-item>
                            <el-form-item label="Комментарий">
                               <el-input type="textarea" v-model="billData.comment"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="onSubmit">Сохранить</el-button>
                              <el-button>Отмена</el-button>
                            </el-form-item>
                       </el-form>
                    </div>
            </el-drawer>`
});

