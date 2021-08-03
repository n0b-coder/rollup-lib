<template>
  <div class="div">
    <button class="btn-color" :style="color" @click="changeColor">
      {{ text }}
    </button>
    counter: {{ counter }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { moduleRollupLib, types } from '@/store/modules/types';

export default {
  name: 'ButtonColor',
  props: {
    text: {
      type: String,
      default: 'Click! ',
    },
  },
  data() {
    return {
      color: 'background: ',
    };
  },
  methods: {
    ...mapActions(moduleRollupLib, {
      increment: types.actions.INCREMENT,
    }),
    randomrgba() {
      const b = 255;
      return `rgb(${Math.round(Math.random() * b)},${Math.round(Math.random() * b)}, ${Math.round(Math.random() * b)})`;
    },
    changeColor() {
      this.color = 'background: ';
      this.color += this.randomrgba();
      this.increment(1);
    },
  },
  computed: {
    ...mapState(moduleRollupLib, ['counter']),
  },
};
</script>

<style>
.btn-color {
  border-width: 3px;
  border-color: #1b1b32;
  border-radius: 4px;
  border-style: solid;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 18px;
}
</style>
