Vue.component('partners', {
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
                    sum: 100251.23,
                    deadline: '2019-11-15',
                    payments: [{date:'2019-11-15', sum:50000}],
                    calendarPlan: [{date:'2019-11-15', sum:50251.23}]
                }, {
                    sum: 500000,
                    deadline: '2019-12-15',
                    payments: [{date:'2019-12-15', sum:100000},
                                {date:'2019-12-20', sum:100000},
                                    {date:'2019-12-15', sum:100000}],
                    calendarPlan: [{date:'2019-12-15', sum:200000}]
                }, {
                    sum: 500000,
                    deadline: '2020-01-15',
                    payments: [],
                    calendarPlan: []
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
                    sum: 100251.23,
                    deadline: '2019-11-15',
                    payments: [{date:'2019-11-15', sum:50000}],
                    calendarPlan: [{date:'2019-11-15', sum:50251.23}]
                }, {
                    sum: 500000,
                    deadline: '2019-12-15',
                    payments: [{date:'2019-12-15', sum:100000},
                        {date:'2019-12-20', sum:100000},
                        {date:'2019-12-15', sum:100000}],
                    calendarPlan: [{date:'2019-12-15', sum:200000}]
                }, {
                    sum: 500000,
                    deadline: '2020-01-15',
                    payments: [],
                    calendarPlan: []
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
                    sum: 100251.23,
                    deadline: '2019-11-15',
                    payments: [{date:'2019-11-15', sum:50000}],
                    calendarPlan: [{date:'2019-11-15', sum:50251.23}]
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
            isPartnerDataVisible: false,

        }
    },
    methods: {
        handlePayAllBills(index, row) {
            console.log(index, row);
        },
        handlePayment(index, row) {
            this.isPartnerDataVisible = true;
            this.$refs.partner.partnerData = row;
            console.log(index, row);
        }
    },
    template: `<div>
                <el-table
                    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                    <el-table-column
                      label="ИНН"
                      prop="id"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      label="Наименование"
                      prop="name"
                      show-overflow-tooltip
                      min-width="50">
                    </el-table-column>
                    <el-table-column
                      label="Счетов к оплате"
                      header-align="center"
                      prop="billsToPayNumber"
                      width="85"
                      align="right">
                    </el-table-column>
                    <el-table-column
                      label="Сумма к оплате"
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
                      width="200"
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
                          size="mini"
                          type="primary"
                          @click="handlePayment(scope.$index, scope.row)">Детали</el-button>
                        <el-button
                          size="mini"
                          type="success"
                          @click="handlePayAllBills(scope.$index, scope.row)">Оплатить</el-button>
                      </template>
                    </el-table-column>
                </el-table>
                <partner ref="partner"></partner>
            </div>`
});

Vue.component('partner', {
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
              :visible.sync="$parent.isPartnerDataVisible"
              size="50%">
                <el-tabs type="card" @tab-click="handleTabClick">
                  <el-tab-pane label="Инфо">
                    <div style="padding: 20px">
                      <el-form ref="partnerData" :model="partnerData">
                        <el-form-item label="ИНН" :label-width="formLabelWidth">
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


// <div class="demo-drawer__content">

//     </div>
//     <div class="demo-drawer__footer">

//     </div>