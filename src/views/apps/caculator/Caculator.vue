<template>
    <window style="width: 320px;height: 520px;" :noResize="true">
        <div class="caculator">
            <div class="caculator_result">

            </div>
            <div class="caculator_input">
                <div class="ci-item">%</div>
                <div class="ci-item">CE</div>
                <div class="ci-item">C</div>
                <div class="ci-item"></div>

                <div class="ci-item">1/x</div>
                <div class="ci-item">x2</div>
                <div class="ci-item">sprt(x)</div>
                <div class="ci-item">:</div>

                <div class="ci-item">7</div>
                <div class="ci-item">8</div>
                <div class="ci-item">9</div>
                <div class="ci-item">x</div>

                <div class="ci-item">4</div>
                <div class="ci-item">5</div>
                <div class="ci-item">6</div>
                <div class="ci-item">-</div>

                <div class="ci-item">1</div>
                <div class="ci-item">2</div>
                <div class="ci-item">3</div>
                <div class="ci-item">+</div>

                <div class="ci-item">+/-</div>
                <div class="ci-item">0</div>
                <div class="ci-item">.</div>
                <div class="ci-item">=</div>
            </div>
        </div>
    </window>
</template>

<script>
import Window from '@/views/components/window/Window.vue'

export default {
    name     : 'Caculator',
    components: {
        Window,
    },
    data(){
        return {

        }
    },
    computed : {
    },
    methods : {
    },
}
</script>