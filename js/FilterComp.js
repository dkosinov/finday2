Vue.component('filterComp', {
    data(){
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" method="post" class="search-form" 
                @submit.prevent="$root.$refs.partners.filter(userSearch)"
                @input.prevent="$root.$refs.partners.filter(userSearch)">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>`
})