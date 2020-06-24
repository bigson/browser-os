<template>
    <div class="window" :style="position">
        <div class="window__background"></div>
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
    data(){
        return {
            pos1 : 0,
            pos2 : 0,
            pos3 : 0,
            pos4 : 0,
            position : {
                left  : 0,
                right : '100px',
            }
        }
    },
    components: {
    },
    computed : {
    },
    mounted(){

    },
    methods : {
        dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;
            document.onmouseup = this.closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = this.elementDrag;
        },

        elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            this.pos1 = this.pos3 - e.clientX;
            this.pos2 = this.pos4 - e.clientY;
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;
            // set the element's new position:
            this.position.top = (elmnt.offsetTop - pos2) + "px";
            this.position.left = (elmnt.offsetLeft - pos1) + "px";
        },

        closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
        }
    },
}
</script>