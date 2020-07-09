<template>
	<div class="widget" :style="styles" :id="widgetId">
        <div class="widget__background background-mode"></div>
        <div class="widget__content"
                :id="dragId"
                @mousedown="mouseDown($event, type.DRAG)">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name     : 'Widget',
    props: {
        resize : {
            type    : Boolean,
            default : false
        }
    },
    data(){
        return{

            pos1 : 0,
            pos2 : 0,
            pos3 : 0,
            pos4 : 0,

            styles : {
                left      : 0,
                top       : 0,
                width     : '500px',
                height    : '500px',
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

    computed : {
        widgetId(){
            return 'widget_' + this.$uuid
        },
        dragId(){
            return 'widget_drag' + this.$uuid
        },
        windowElement(){
            return document.querySelector('#' + this.widgetId)
        },
        dragElement(){
            return document.querySelector('#' + this.dragId)
        }
    },
    methods: {
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
    }
}
</script>