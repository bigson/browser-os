let id = 0
export default {
    data(){
        return {
            $uuid : 0
        }
    },
    beforeCreate(){
        this.$uuid = ++id
    }
}