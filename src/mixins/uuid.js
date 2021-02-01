let id = 1
let id2 = 0
export default {
    beforeCreate(){
        this.$uuid = id.toString()
        id++
    },
    computed:{
        id2(){
            return (++id2).toString()
        }
    }
}