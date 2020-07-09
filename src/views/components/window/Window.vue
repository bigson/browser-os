<template>
    <div class="window" :style="styles" :id="windowId" @mousedown="windowMouseDown">
        <div class="window__background background-mode"></div>
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

// import captionHtmlElement from '@/mixins/caption-html-element'

let zIndex = 0
export default {
    name     : 'Window',
    // mixins   : [captionHtmlElement],
    props: {
        noResize : {
            type    : Boolean,
            default : false
        }
    },
    data(){
        zIndex ++
        return {
            pos1 : 0,
            pos2 : 0,
            pos3 : 0,
            pos4 : 0,

            resize1 : 0,
            resize2 : 0,
            resize3 : 0,
            resize4 : 0,

            styles : {
                left      : 0,
                top       : 0,
                width     : '500px',
                height    : '500px',
                'z-index' : zIndex.toString(),
                // right : '100px',
            },

            type : {
                DRAG                : 'DRAG',
                RESIZE_LEFT         : 'RESIZE_LEFT',
                RESIZE_RIGHT        : 'RESIZE_RIGHT',
                RESIZE_BOTTOM       : 'RESIZE_BOTTOM',
                RESIZE_LEFT_BOTTOM  : 'RESIZE_LEFT_BOTTOM',
                RESIZE_RIGHT_BOTTOM : 'RESIZE_RIGHT_BOTTOM',
            },
        }
    },
    components: {
    },
    computed : {
        windowId(){
            return 'window_' + this.$uuid
        },
        dragId(){
            return 'window_drag' + this.$uuid
        },
        windowElement(){
            return document.querySelector('#' + this.windowId)
        },
        dragElement(){
            return document.querySelector('#' + this.dragId)
        }
    },
    mounted(){
        // this.dragElement.onmousedown = this.mouseDown

    },
    methods : {
        windowMouseDown(){
            // console.log('window mouse down')
            // e.stopPropagation()
            if(this.styles['z-index'] == zIndex){
                return
            }

            this.styles['z-index'] = ++zIndex
        },
        mouseDown(e, type) {
            // console.log('MouseDown', e, e.clientX, e.clientY, type)
            e = e || window.event;
            let that = this
            // e.preventDefault();
            // get the mouse cursor position at startup:
            this.pos3          = e.clientX;
            this.pos4          = e.clientY;
            document.onmouseup = function() {
                                    /* stop moving when mouse button is released:*/
                                    document.onmouseup   = null
                                    document.onmousemove = null
                                }

            // call a function whenever the cursor moves:
            document.onmousemove = function(e){
                e = e || window.event;
                e.preventDefault();
                // console.log('elementDrag', e.clientX, e.clientY, type)
                // console.log(that.pos1, that.pos2, that.pos3, that.pos4)
                // console.log(that.dragElement.offsetTop,that.dragElement.offsetLeft)
                // calculate the new cursor position:
                that.pos1 = that.pos3 - e.clientX;
                that.pos2 = that.pos4 - e.clientY;
                that.pos3 = e.clientX;
                that.pos4 = e.clientY;

                switch(type){
                    case that.type.DRAG:
                        that.styles.top = (that.windowElement.offsetTop - that.pos2) + 'px'
                        that.styles.left = (that.windowElement.offsetLeft - that.pos1) + 'px'
                        break;
                    case that.type.RESIZE_LEFT:
                        that.styles.width = (that.windowElement.offsetWidth + that.pos1) + 'px'
                        that.styles.left = (that.windowElement.offsetLeft - that.pos1) + 'px'
                        break;
                    case that.type.RESIZE_RIGHT:
                        that.styles.width = (that.windowElement.offsetWidth - that.pos1) + 'px'

                        break;
                    case that.type.RESIZE_BOTTOM:
                        that.styles.height = (that.windowElement.offsetHeight - that.pos2) + 'px'
                        break;
                    case that.type.RESIZE_LEFT_BOTTOM:
                        that.styles.width = (that.windowElement.offsetWidth + that.pos1) + 'px'
                        that.styles.left = (that.windowElement.offsetLeft - that.pos1) + 'px'
                        that.styles.height = (that.windowElement.offsetHeight - that.pos2) + 'px'

                        break;
                    case that.type.RESIZE_RIGHT_BOTTOM:
                        that.styles.width = (that.windowElement.offsetWidth - that.pos1) + 'px'
                        that.styles.height = (that.windowElement.offsetHeight - that.pos2) + 'px'

                        break;
                }
            }
        },


    },
}
</script>