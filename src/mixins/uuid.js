let id = 1
export default {
    beforeCreate(){
        this.$uuid = id.toString()
        id++
    }
}