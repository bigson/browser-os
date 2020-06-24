<template>
    <div class="window">
        <div class="window__controller">
            <div class="mini" id="btn-mini"><span>–</span></div>
            <div class="full" id="btn-max"><span>❐</span></div>
            <div class="close" id="btn-close"><span>✕</span></div>
        </div>
        <div class="window__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name     : 'Window',
    components: {
    },
    computed : {
    },
    methods : {
    },
}
</script>