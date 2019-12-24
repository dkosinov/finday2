Vue.component('billsComp',{
    data: function (){
        return {
            docs: []
        }
    },
    methods: {
        onOver(e){
            e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        },
        onFileDrop(e){
            const files = e.dataTransfer.files;
            console.log(files);
            for (file of files) {
                console.log(file.type);
                switch (file.type) {
                    case 'text/plain':
                        this.docs.push({
                            docType: 'pay',
                            docName: 'Оплата',
                            fileType: file.type,
                            fileName: file.name,
                        });
                        break;
                    case 'application/pdf':
                    case 'image/jpeg':
                        this.docs.push({
                            docType: 'bill',
                            docName: 'Счёт',
                            fileType: file.type,
                            fileName: file.name,
                            payment: [],
                            paid: false,
                        });
                        break;
                    default:
                        alert('Недопустимый формат файла!');
                }
            }
            return false;
        },
        onDocDragStart(e, d, i){
            if (d.docType === 'pay'){
                console.log('pay');
                e.dataTransfer.setData('docType', d.docType);
                // e.dataTransfer.setData('docName', d.docName);
                e.dataTransfer.setData('docIndex', i);
            }

        },
        onDocDrop(e, d){
            // e.dataTransfer.setData('text/plain','Связать счёт и оплату');
            // console.log(e.dataTransfer);
            let docIndex = +e.dataTransfer.getData('docIndex');
            let docType = e.dataTransfer.getData('docType');
            if (docType === 'pay') {
                if (d.docType === 'bill' && !d.paid) {
                    console.log('bill');
                    // let docName = e.dataTransfer.getData('docName');
                    d.payment.push(this.docs[docIndex]);
                    this.docs.splice(docIndex,1);
                    d.paid = true;
                } else if (d.docType === 'bill' && d.paid) {
                    alert('Счёт уже оплачен');
                } else if (d.docType !== 'bill') alert('Это не счёт');
            } else alert('Это не оплата');
            // e.preventDefault();
        },
    },
    template: `<div>
                <p>Перетащите сюда файлы</p>
                <div class="docs-container"
                    @dragover.stop.prevent
                    @drop.stop.prevent="onFileDrop"
                > 
                    <div v-for="(doc, index) of docs" 
                        class="doc-box"
                        draggable="true"
                        @dragstart="onDocDragStart($event, doc, index)"
                        @drop.stop.prevent="onDocDrop($event, doc)">
                        {{doc.docName}}<br>{{doc.fileName}}<br>
                        <p v-if="doc.paid">Оплачен</p>
                        <div class="payment"
                            v-for="pay of doc.payment">
                            {{pay.docName}}<br>{{pay.fileName}}
                        </div>
                    </div>
                </div>
            </div>`
});