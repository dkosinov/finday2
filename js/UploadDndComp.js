Vue.component('uploadDndComp', {
    props: ['partnersData'],
    methods: {
        onOver(evnt){
            evnt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        },
        addNewPartner(file){
            this.partnersData.push({
                id: '000000000000',
                name: 'Создан новый контрагент',
                style: {type: 'info', size: 'small', text: 'Добавьте информацию'},
                billsToPayNumber: 0,
                billsToPaySum: 0,
                lastPayDate: '',
                comment: '',
                everyDayPayment: false,
                bills: [{
                    id: '000000',
                    sum: 10000,
                    debt: 0.00,
                    comment: '',
                    events: [
                        {content: 'Получен счёт', type:'primary ', state: 'start', date:'', sum:0.00},
                        {content: 'Дедлайн оплаты', type:'warning', state: 'deadline', date:'', sum:0.00},
                    ],
                }]
            });
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
    },
    template: `<div class="upload-dragger-block"
                    @dragover.stop.prevent="onOver"
                    @drop.stop.prevent="onBillFileDrop">
                       <div class="upload__icon"><i class="fas fa-cloud-upload-alt fa-3x"></i></div>
                       <div class="upload__text">перетащите сюда файлы с документами
                           <div class="upload__text_clickable"
                               @click="onUpload">
                               <em>или нажмите для загрузки</em>
                            </div>
                       </div>
                       <div class="upload__tip">допускаются к загрузке фалы картинок и pdf-файлы</div>
               </div>`
});