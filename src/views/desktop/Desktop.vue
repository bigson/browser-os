<template>
    <div class="desktop">
        <window>
            <h1>bigson</h1>
        </window>
        <window>
            <h2>abc</h2>
        </window>
        <div class="taskbar"></div>
    </div>
</template>

<script>
import Window from '@/views/components/window/Window.vue'

export default {
    name     : 'Desktop',
    components: {
        Window,
    },
    computed : {
    },
    methods : {
    },
}
</script>