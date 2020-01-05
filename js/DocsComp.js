Vue.component('docsComp',{
    data: function (){
        return {
            docs: [],
            filtered: [],
            // imgDocument: `https://placehold.it/200x150`,
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
        onOver(e){
            e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        },
        readPayFile(file, docType){
            let reader = new FileReader();
            // onloadstart, onprogress, onload, onabort, onerror, and onloadend
            // reader.onload = (err) => {
            //     const result = reader.result;
            //     console.log(result);
            // };
            if (docType === 'pay')
                reader.readAsText(file, 'CP1251');

            reader.onloadend = (res)=>{
                console.log(res);
                if (!res.target.error) {
                    this.parseTextFrom1CBCFile(res.target.result);
                    // console.log('Ok2');
                }
            };

            reader.onerror = function (err) {
                this.$root.$refs.error.setText(err);
                reader.abort();
            };
        },
        parseTextFrom1CBCFile(text){
            let t = text.split(/$/m);

            console.log(t);

        },
        onBillFileDrop(e){
            // Check for the various File API support.
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                // Great success! All the File APIs are supported.
                console.log('Great success!');
                const files = e.dataTransfer.files;
                console.log(files);
                for (file of files) {
                    console.log(file.type);
                    // process image files and pdf.
//                    if (file.type.match('image.*','*.pdf')) {
                    this.docs.push({
                        docType: 'bill',
                        docName: 'Счёт',
                        fileType: file.type,
                        fileName: file.name,
                        payment: [],
                        paid: false,
                    });
                }
            } else {
                this.$root.$refs.error.setText('The File APIs are not fully supported in this browser.');
                // alert('The File APIs are not fully supported in this browser.');
            }
            return false;
        },
        onPayFileDrop(e){
            // Check for the various File API support.
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                // Great success! All the File APIs are supported.
                console.log('Great success!');
                const files = e.dataTransfer.files;
                console.log(files);
                for (file of files) {
                    console.log(file.type);
                    // process image files and pdf.
                    console.log('Ok');
                    if (this.docs.push({
                        docType: 'pay',
                        docName: 'Оплата',
                        fileType: file.type,
                        fileName: file.name,
                    })) {
                        this.readPayFile(file, 'pay');
                    }
                }
            } else {
                this.$root.$refs.error.setText('The File APIs are not fully supported in this browser.');
                // alert('The File APIs are not fully supported in this browser.');
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
                } else if (d.docType !== 'bill')
                    alert('Это не счёт');
            } else alert('Это не оплата');
            // e.preventDefault();
        },
    },
    template: `<div class="docs-container"> 
                   <document v-for="(doc, index) of docs"
                        dragable="true" 
                        class="doc-item"
                        @dragstart="onDocDragStart($event, doc, index)"
                        @drop.stop.prevent="onDocDrop($event, doc)"
                        :key="index"
                        :doc="doc">
                    </document>
                    <div class="new-item new-bill"
                        @dragover.stop.prevent="onOver"
                        @drop.stop.prevent="onBillFileDrop">
                        Перетащите<br> сюда файлы<br> счётов или<br> другие документы<br> для оплаты
                    </div>
                    <div class="new-item new-pay"
                        @dragover.stop.prevent="onOver"
                        @drop.stop.prevent="onPayFileDrop">
                        Перетащите<br> сюда<br> банковские выписки<br> в формате 1С
                    </div>
<!--                    <div class="select-block">-->
<!--                    -->
<!--                    </div>-->
                    
                </div>`
});
Vue.component('document', {
    props: ['doc'],
    computed: {
        classObject: function () {
            return {
                'doc-bill': this.doc.docType === 'bill',
                'doc-pay': this.doc.docType === 'pay',
            }
        }
    },
    template: `<div class="doc-item"
                :class="classObject" 
                :title="doc.fileName"
                >
                <h3>{{doc.docName}}</h3>
<!--                <p>{{doc.fileName}}</p>-->
                <div class="payment"
                    v-for="pay of doc.payment">
                    {{pay.docName}}<br>{{pay.fileName}}
                </div>
                <p v-if="doc.paid">Оплачен</p>
<!--                    <button v-else class="pay-btn" @click="$root.$refs.cart.addProduct(doc)">Оплатить</button>-->
            </div>`
})

// <!--                <img :src="img" :alt="img">-->
//     <div class="desc">
//     <h3>{{doc.docName}}</h3>
// <p>{{doc.fileName}}</p>
// <div class="payment"
// v-for="pay of doc.payment">
//     {{pay.docName}}<br>{{pay.fileName}}
// </div>
// <p v-if="doc.paid">Оплачен</p>
//     <button v-else class="pay-btn" @click="$root.$refs.cart.addProduct(doc)">Оплатить</button>
//     </div>
//     </div>