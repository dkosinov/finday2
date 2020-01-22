Vue.component('BillEventsComp',{
    props: ['billEvents'],
    data(){
        return {
            newEvent: {
                id: 0,
                name: '',
                title: '',
                type:'info',
                date:'',
                sum:null
            },
        }
    },
    computed: {
        sortedEventsByDateDesc() {
            if (this.billEvents.length) {
                function compare(a, b) {
                    console.log(`a.date = ${a.date}`);
                    console.log(`b.date = ${b.date}`);
                    if (a.date < b.date)
                        return 1;
                    if (a.date > b.date)
                        return -1;
                    return 0;
                }
                return this.billEvents.sort(compare);
            }
        },
    },
    methods: {
        // handlerShowBillEvents(){
        //     console.log('События');
        //     this.isBillEventsVisible = true;
        // },
        handleNewEventAdd(){
            console.log('add event');
            this.isEventFormVisible = true;
        },
    },
    template: `<div class="block">
                    <event-form-el
                         :event="newEvent">
                    </event-form-el>
                    <div class="container-flex-row">
                        <el-button
                            icon="el-icon-circle-plus-outline"
                            size="medium"
                            type="success"
                            @click.stop="handleNewEventAdd()"
                            title="Создать новое событие">
                            Новое
                        </el-button>
                    </div>
                    <el-timeline>
                      <el-timeline-item
                        v-for="(event, index) in sortedEventsByDateDesc"
                        :key="index"
                        :type="event.type"
                        :timestamp="event.date"
                        placement="top">
                        <event-el
                            :event="event">
                        </event-el>
                      </el-timeline-item>
                    </el-timeline>
                </div>`
});

Vue.component('eventEl', {
    data(){
        return {
            isEventFormVisible: false,
        }
    },
    props: ['event'],
    methods: {
        handleShowEventForm(){
            this.isEventFormVisible = true;
        },
    },
    template: `<div class="event__container">
                <div class="event-content">
                    <div class="event__title">
                        <p>{{event.title}}</p>
                        <div class="actions-block event__actions">
                            <div class="icon-block"
                                @click.stop="handleShowEventForm"
                                title="Редактировать">
                                <i class="el-icon-edit"></i>
                            </div>
                            <div class="icon-block"><i class="el-icon-share"></i></div>
                            <div class="icon-block"><i class="el-icon-delete"></i></div>
                        </div>                      
                    </div>
                    <el-tag :type="event.type">{{$root.getFinData(event.sum)}}</el-tag>                
                </div>       
                <event-form-el
                    :event="event">
                </event-form-el>      
            </div>`
}),

Vue.component('eventFormEl',{
    props: ['event'],
    data() {
        return {
            emptyEvent: {
                id: 0,
                name: '',
                title: '',
                type:'info',
                date:'',
                sum:null
            },
            // newEvent: {
            //     id: 0,
            //     name: '',
            //     title: '',
            //     type:'info',
            //     date:'',
            //     sum:null},
            selectEvents: [
                {id: 1, name: 'start', title: 'Получен счёт', type:'primary', date:'', sum:0.00, file:''},
                {id: 2, name: 'deadline',title: 'Дедлайн оплаты', type:'warning', date:'', sum:0.00, file:''},
            ],
        }
    },

    methods: {
        onSubmit() {
            if (this.event.id) {
                console.log('Новое событие');
                let newEvent = Object.assign({},this.event);
                newEvent.date = this.$root.getEventData(newEvent.date);
                this.$parent.billEvents.push(newEvent);
                for (let key in this.emptyEvent) {
                    this.event[key] = this.emptyEvent[key];
                }
            } else {
                console.log('Редактируем имеющееся событие');
            }
            console.log('submit!');
            this.$parent.isEventFormVisible = false;
        },
    },
    template: `<el-drawer
              :visible.sync="$parent.isEventFormVisible"
              size="50%">
                    <div style="padding: 20px">
                       <el-form ref="newEvent" :model="event">
                            <el-form-item label="Название события">
                               <el-input v-model="event.title" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="Сумма">
                               <el-input v-model="event.sum" autocomplete="off" placeholder="0"></el-input>
                            </el-form-item>
                            <el-form-item label="Дата">
                                 <div class="block">
                                  <el-date-picker
                                    v-model="event.date"
                                    type="date"
                                    placeholder="Выберите дату">
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
