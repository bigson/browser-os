<template>
    <div class="desktop">
        <Caculator />
        <Caculator />
        <Caculator />
        <Caculator />
    </div>
</template>

<script>
import Caculator from '@/views/apps/caculator/Caculator.vue'

export default {
    name     : 'Desktop',
    components: {
        Caculator
    },
    computed : {
    },
    methods : {
    },
}
</script>