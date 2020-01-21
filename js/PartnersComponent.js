Vue.component('partnersComp', {
    data() {
        return {
            // partnersData: [],
            partnersData: [
                {id: '5032292612',
                    name1: 'Мособлгаз',
                    name2: 'Филиал АО "Мособлгаз" "Подольскмежрайгаз"',
                    style: {type: 'info', size: 'small', text: 'Добавьте информацию'},
                    comment: 'Это комментарий к контрагенту',
                    isEveryDayPayment: true,
                    everyDaySum: 0,
                    rating: 5,
                    bills: [
                        {id: 1,
                            comment: 'Это комментарий к счёту',
                            events:
                                [
                                    {id: 1, name: 'start', title: 'Получен счёт', type:'primary', date:'2019-11-01', sum:1500000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2020-01-15', sum:500000},
                                    {id: 1, name: 'deadline', title: 'Дедлайн оплаты', type:'warning', date:'2019-11-15', sum:1000000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2019-11-15', sum:500000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2019-12-29', sum:100000},
                                    {id: 1, name: 'user', title: 'Котрагентом подано исковое заявление', type:'info', date:'2019-12-15', sum:500000},
                                    {id: 1, name: 'deadline',title: 'Дедлайн оплаты', type:'warning', date:'2019-12-30', sum:500000},
                                    {id: 1, name: 'user', title: 'Обязательный платёж по договорённости', type:'danger', date:'2020-01-10', sum:100000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2020-01-10', sum:100000},
                                    {id: 1, name: 'paid', title: 'Счёт полностью оплачен', type:'primary', date:'2020-01-15', sum:1000000}
                                ],
                        },
                    ]
                },
                {id: '000000000000',
                    name1: 'Подольскмежрайгаз',
                    name2: 'Филиал АО "Мособлгаз" "Подольскмежрайгаз"',
                    comment: 'Это комментарий к контрагенту',
                    isEveryDayPayment: true,
                    everyDaySum: 0,
                    rating: 3,
                    bills: [
                        {id: 1,
                            comment: 'Это комментарий к счёту',
                            events:
                                [
                                    {id: 1, name: 'start', title: 'Получен счёт', type:'primary', date:'2019-11-01', sum:1000000},
                                    {id: 1, name: 'deadline', title: 'Дедлайн оплаты', type:'warning', date:'2019-11-15', sum:1000000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2019-11-15', sum:500000},
                                    {id: 1, name: 'user', title: 'Котрагентом подано исковое заявление', type:'info', date:'2019-12-15', sum:500000},
                                    {id: 1, name: 'deadline',title: 'Дедлайн оплаты', type:'warning', date:'2019-12-30', sum:500000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2019-12-29', sum:100000},
                                    {id: 1, name: 'user', title: 'Обязательный платёж по договорённости', type:'danger', date:'2020-01-10', sum:100000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2020-01-10', sum:100000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2020-01-15', sum:500000},
                                ],
                        },
                        {id: 2,
                            comment: 'Это комментарий к счёту',
                            events:
                                [
                                    {id: 1, name: 'start', title: 'Получен счёт', type:'primary', date:'2019-11-01', sum:1000000},
                                    {id: 1, name: 'deadline', title: 'Дедлайн оплаты', type:'warning', date:'2019-11-15', sum:1000000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2019-11-15', sum:500000},
                                    {id: 1, name: 'user', title: 'Котрагентом подано исковое заявление', type:'info', date:'2019-12-15', sum:500000},
                                    {id: 1, name: 'deadline',title: 'Дедлайн оплаты', type:'warning', date:'2019-12-30', sum:500000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2019-12-29', sum:100000},
                                    {id: 1, name: 'user', title: 'Обязательный платёж по договорённости', type:'danger', date:'2020-01-10', sum:100000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2020-01-10', sum:100000},
                                    {id: 1, name: 'payment', title: 'Оплата', type:'success', date:'2020-01-15', sum:100000},
                                ],
                        },                    ]
                }           ],
            // search: '',
            // isPartnerFormVisible: false,
            // isNewPartnerFormVisible: false,
            // fileList: [],
            filtered: [],
        }
    },
    created: function () {
        this.filtered = this.partnersData;
    },
    methods: {
        filter(value){
            if (value) {
                const regexp = new RegExp(value, 'i');
                this.filtered = this.partnersData.filter(el => regexp.test(el.name1));
            } else {
                this.filtered = this.partnersData;
            }
        },
        onOver(evnt){
            evnt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        },
        addNewPartner(file){
            let newPartner = {
                id: '000000000000',
                name1: 'Новый контрагент',
                name2: 'Создан новый контрагент',
                style: {type: 'info', size: 'small', text: 'Добавьте информацию'},
                comment: '',
                everyDayPayment: false,
                everyDaySum: 0,
                rating: 0,
                bills: [
                    {id: 1,
                        comment: 'Это комментарий к счёту',
                        events:
                            [
                                {id: 1, name: 'start', title: 'Получен счёт', type:'primary', date:'2019-11-01', sum:1500000},
                                {id: 1, name: 'deadline', title: 'Дедлайн оплаты', type:'warning', date:'2019-11-15', sum:1000000},
                            ],
                    },
                ]
            };
            this.partnersData.push(newPartner);
            this.$root.notifySuccessMessage(`Cоздан новый контрагент.`);
            this.$root.notifySuccessMessage(`Создан документ на оплату.`);
            console.log(this.newPartner);
            this.newPartner = newPartner;
            console.log(this.newPartner);
            // this.$parent.isUploadFormShow = false;
            // this.isPartnerFormVisible = true;

        },
        onBillFileDrop(evnt){
            // Check for the various File API support.
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                // Great success! All the File APIs are supported.
                console.log('Great success!');
                const files = evnt.dataTransfer.files;
                console.log(files);
                for (file of files) {
                    // process image files and pdf.
                    console.log(file.type);
                    // process image files and pdf.
                    if (file.type.match("image/*") || (file.type==='application/pdf')) {
                        console.log('type Ok');
                        this.addNewPartner(file);
                    } else {
                        this.$root.$refs.error.setText('Недопустимый формат файла!');
                    }
                }
            } else {
                this.$root.$refs.error.setText('The File APIs are not fully supported in this browser.');
            }
            return false;
        },
        onUpload(){
            console.log('handleUpload')
        },
        handlePayAllBills(index, row) {
            console.log(index, row);
        },
        handlePayment(index, row) {
            this.$refs.partner.partnerData = row;
            this.isPartnerFormVisible = true;
            console.log(index, row);
        },
        handleUploadSuccess(response, file, fileList) {
            console.log('Upload Ok');
            console.log(response);
            console.log(file);
            console.log(fileList);
        },
        handleUploadError(err, file, fileList){
            console.log('Upload Error');
            console.log(err);
            console.log(file);
            console.log(fileList);
        },
        handlePreview(file){
            console.log(file);
        }
    },
    template: `<div class="partners-container"
                    @dragover.stop.prevent="onOver"
                    @drop.stop.prevent="onBillFileDrop">
                    <div v-for="(partner, index) in filtered">
                        <partner-comp
                            :partner="partner"></partner-comp>
                    </div>
            </div>`
});



// Vue.component('billFormEl',{
//     props: ['bills'],
//     data() {
//         return {
//             // bills: [],
//             emptyBill: {
//                 id: null,
//                 sum: null,
//                 debt: 0.00,
//                 comment: '',
//                 events: [
//                     {title: 'Получен счёт', type:'primary ', date:'', sum:0.00},
//                     {title: 'Дедлайн оплаты', type:'warning', date:'', sum:0.00},
//                 ],
//             },
//             newBill: {
//                 id: null,
//                 sum: null,
//                 debt: 0.00,
//                 comment: '',
//                 events: [
//                     {title: 'Получен счёт', type:'primary ', date:'', sum:0.00},
//                     {title: 'Дедлайн оплаты', type:'warning', date:'', sum:0.00},
//                 ],
//             },
//         }
//     },
//
//     methods: {
//         onSubmit() {
//             let newBill = Object.assign({},this.newBill);
//             // newBill.events[0].date = new Date();
//             newBill.events[0].date = this.$root.getEventData(new Date());
//             newBill.events[0].sum = newBill.sum;
//             newBill.events[1].date = this.$root.getEventData(newBill.events[1].date);
//             // newBill.events[1].date.toString(newBill.events[1].date);
//             newBill.events[1].sum = newBill.sum;
//             console.log(newBill);
//             this.bills.push(newBill);
//             // this.newBill = {};
//             for (let key in this.emptyBill) {
//                 this.newBill[key] = this.emptyBill[key];
//             }
//             console.log('submit!');
//             this.$parent.isBillFormVisible = false;
//         },
//     },
//     template: `<el-drawer
//               :visible.sync="$parent.isBillFormVisible"
//               size="50%">
//                     <div style="padding: 20px">
//                        <el-form ref="newBill" :model="newBill">
//                             <el-form-item label="Номер счёта">
//                                <el-input v-model="newBill.id" autocomplete="off" placeholder="Номер счёта"></el-input>
//                             </el-form-item>
//                             <el-form-item label="Сумма">
//                                <el-input v-model="newBill.sum" autocomplete="off" placeholder="0"></el-input>
//                             </el-form-item>
//                             <el-form-item label="Дата оплаты по сроку">
//                                  <div class="block">
// <!--                                  <span class="demonstration"></span>-->
//                                   <el-date-picker
//                                     v-model="newBill.events[1].date"
//                                     type="date"
//                                     placeholder="Виберите дату">
//                                   </el-date-picker>
//                                 </div>
//                             </el-form-item>
//                             <el-form-item label="Долг">
//                                <el-input v-model="newBill.debt" :disabled="true"></el-input>
//                             </el-form-item>
//                             <el-form-item label="Комментарий">
//                                <el-input type="textarea" v-model="newBill.comment"></el-input>
//                             </el-form-item>
//                             <el-form-item>
//                               <el-button type="primary" @click="onSubmit">Сохранить</el-button>
//                               <el-button>Отмена</el-button>
//                             </el-form-item>
//                        </el-form>
//                     </div>
//             </el-drawer>`
// });
//
//
// Vue.component('elBillsDrop',{
//     data(){
//         return {
//             fileList: [],
//         }
//     },
//     methods: {
//         handlePreview() {
//             console.log('handlePreview');
//         },
//         handleRemove() {
//             console.log('handleRemove');
//         },
//     },
//     template: `<div>
//                  <el-upload
//                    class="upload-demo"
//                    drag
//                    action="https://jsonplaceholder.typicode.com/posts/"
//                    :on-preview="handlePreview"
//                    :on-remove="handleRemove"
//                    :file-list="fileList"
//                    multiple>
//                    <i class="el-icon-upload"></i>
//                    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
//                    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
//                  </el-upload>
// <!--                    Перетащите сюда файлы со счетами или другие документы для оплаты-->
//                </div>`
// });