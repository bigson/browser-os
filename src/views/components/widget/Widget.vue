<template>
	<div class="widget" :style="styles" :id="windowId" @mousedown="windowMouseDown">
        <div class="window__background"></div>
        <div class="window__resize" v-if="!noResize">
            <div
                class="resize-left"
                @mousedown="mouseDown($event, type.RESIZE_LEFT)"></div>
            <div
                class="resize-bottom"
                @mousedown="mouseDown($event, type.RESIZE_BOTTOM)"></div>
            <div
                class="resize-right"
                @mousedown="mouseDown($event, type.RESIZE_RIGHT)"></div>
            <div
                class="resize-left-bottom"
                @mousedown="mouseDown($event, type.RESIZE_LEFT_BOTTOM)"></div>
            <div
                class="resize-right-bottom"
                @mousedown="mouseDown($event, type.RESIZE_RIGHT_BOTTOM)"></div>
        </div>
        <div class="window__head-bar">
            <div class="head-bar__tabs"></div>
            <div
                class="head-bar__drag"
                :id="dragId"
                @mousedown="mouseDown($event, type.DRAG)"></div>
            <div class="head-bar__controller">
                <div class="mini" id="btn-mini"><span>–</span></div>
                <div class="full" id="btn-max"><span>❐</span></div>
                <div class="close" id="btn-close"><span>✕</span></div>
            </div>
        </div>
        <div class="window__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name     : 'Widget',
    props: {
        noResize : {
            type    : Boolean,
            default : false
        }
    },
    data(){}
}
</script>