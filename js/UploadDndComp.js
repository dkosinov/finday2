Vue.component('uploadDndComp', {
    props: ['partnersData'],
    data(){
        return {
            newPartner: null,
            // isPartnerFormVisible: false,
        }
    },
    methods: {
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
                                {id: 1, name: 'start', content: 'Получен счёт', type:'primary', date:'2019-11-01', sum:1500000},
                                {id: 1, name: 'deadline', content: 'Дедлайн оплаты', type:'warning', date:'2019-11-15', sum:1000000},
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
            this.$parent.isUploadFormShow = false;
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
        // handleClose(done) {
        //     // this.$confirm('Are you sure you want to close this?')
        //     //     .then(_ => {
        //     //         done();
        //     //     })
        //     //     .catch(_ => {});
        // }
    },
    template: `
                <div class="upload-dragger-block"
                    @dragover.stop.prevent="onOver"
                    @drop.stop.prevent="onBillFileDrop">
                       </div>
               </div>`
        // `<el-drawer
        //         :visible.sync="$parent.isUploadFormShow"
        //         direction="ltr"
        //         size="50%">
        //         <div class="upload-dragger-block"
        //             @dragover.stop.prevent="onOver"
        //             @drop.stop.prevent="onBillFileDrop">
        //                <div class="upload-block__icon"><i class="fas fa-cloud-upload-alt fa-3x"></i></div>
        //                <div class="upload__text">перетащите сюда документы на оплату
        //                    <div class="upload__text_clickable"
        //                        @click="onUpload">
        //                        <em>или нажмите для загрузки</em>
        //                     </div>
        //                </div>
        //                <div class="upload__tip">допускаются к загрузке фалы картинок и pdf-файлы</div>
        //        </div>
        // </el-drawer>`
});