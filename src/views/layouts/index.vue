<template>
    <div id="app">
        <progress-bar ref="progress"/>
        <router-view @show="updateShow"
                        @progressStart="start"
                        @progressFinish="finish"
                        @progressFail="fail"/>
        <svg viewBox="0 0 2000 2000" style="display: none">
            <filter id="blur" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feGaussianBlur stdDeviation="20 20" result="blur"/>
            </filter>
        </svg>
    </div>
</template>
<script>
    import progressBar from '@/views/components/html/progress_bar.vue'

    export default {
        name     : 'Layout',
        components: {
            progressBar,
        },
        computed : {
            show(){
                let layout = this.$route.meta.layout

                if(layout && layout == 'clear'){
                    return false
                }
                return  true
            }
        },
        methods : {
            updateShow(show){
                this.show = show
            },
            start(){
                this.$refs.progress.start()
            },
            finish(){
                this.$refs.progress.finish()
            },
            fail(){
                this.$refs.progress.fail()
            }
        },
    }
</script>
