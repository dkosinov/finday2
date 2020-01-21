Vue.component('BillEventsComp',{
    props: ['billEvents'],
    data(){
        return {
            isEventFormVisible: false,
            // count: 0,
        }
    },
    methods: {
        // handlerShowBillEvents(){
        //     console.log('События');
        //     this.isBillEventsVisible = true;
        // },
        handleEventAdd(){
            console.log('add event');
            this.isEventFormVisible = true;
        },
    },
    template: `<div class="block">
                    <event-form-el
                         :events="billEvents">
                    </event-form-el>
                        <div class="container-flex-row">
                            <el-button
                                icon="el-icon-circle-plus-outline"
                                size="medium"
                                type="primary"
                                @click="handleEventAdd()">
                                Новое
                            </el-button>
                        </div>
                        <el-timeline>
                          <el-timeline-item
                            v-for="(event, index) in billEvents"
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
    props: ['event'],
    template: `<div class="event__container">
                <div class="event-content">
                    <div class="event__title">
                        <p>{{event.title}}</p>
                        <div class="actions-block event__actions">
                            <div class="icon-block"
                                @click="handleShowBillForm">
                                <i class="el-icon-edit"></i>
                            </div>
                            <div class="icon-block"><i class="el-icon-share"></i></div>
                            <div class="icon-block"><i class="el-icon-delete"></i></div>
                        </div>                      
                    </div>
                    <el-tag :type="event.type">{{$root.getFinData(event.sum)}}</el-tag>                
                </div>             
            </div>`
}),

Vue.component('eventFormEl',{
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
