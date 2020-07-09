<template>
    <div class="desktop">
        <window>
            <h1>bigson</h1>
        </window>
        <window>
            <h2>abc</h2>
        </window>
        <widget>xxx</widget>
        <div class="taskbar"></div>
    </div>
</template>

<script>
import Window from '@/views/components/window/Window.vue'
import Widget from '@/views/components/widget/Widget.vue'

export default {
    name     : 'Desktop',
    components: {
        Window,
        Widget
    },
    computed : {
    },
    methods : {
    },
}
</script>