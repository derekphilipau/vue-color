<template>
  <div id="app">
    <a class="github-fork-ribbon" href="https://github.com/xiaokaike/vue-color" title="Fork me on GitHub">Fork me on GitHub</a>
    <div class="header-container">
      <div class="header-bg" :style="{'background-color': bgc}"></div>
      <header class="header">
        <div class="intro-wrap">
          <div class="intro">
            <h1>Vue-color</h1>
            <p>Just the modified Chrome picker</p>
          </div>
        </div>
        <div class="demo-item">
          <button type="button"
                  class="color-button"
                  :style="{'background-color': buttonColor, 'color': buttonTextColor}"
                  @click="togglePicker">{{ buttonText }}</button>
          <chrome-picker v-if="isPickingColor" :value="colors" @input="updateValue"></chrome-picker>
          <h6>Chrome</h6>
          <pre>{{ colors }}</pre>
        </div>
      </header>
    </div>
    </div>
  </div>
</template>

<script>
import chrome from '../src/components/Chrome.vue'

let defaultProps = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
}

export default {
  components: {
    'chrome-picker': chrome
  },
  data () {
    return {
      colors: defaultProps,
      isPickingColor: false
    }
  },
  computed: {
    bgc () {
      return this.colors.hex
    },
    buttonText () {
      if (this.isPickingColor) {
        return 'Choose Color'
      }
      return 'Pick a Color'
    },
    buttonColor () {
      if (this.colors.hex) {
        return this.colors.hex
      }
      return '#CCCCCC'
    },
    buttonTextColor () {
      // Still don't know the best way to do this
      // Combination of hue & value better
      if ((this.colors.hsv.h > 200 && this.colors.hsv.s > 0.8) ||
        (this.colors.hsv.v < 0.5)) {
        return '#FFFFFF'
      }
      return '#000000'
    }
  },
  methods: {
    togglePicker () {
      this.isPickingColor = !this.isPickingColor
    },
    onOk () {
      console.log('ok')
    },
    onCancel () {
      console.log('cancel')
    },
    updateValue (value) {
      this.colors = value
    }
  },
  created () {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

.header-container {
  position: relative;
}
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 580px;
  background-color: #333;
  opacity: 0.5;
  z-index: 0;
}
.header {
  display: flex;
  max-width: 780px;
  margin: 0 auto;
  padding: 20px 0;
}
.intro-wrap {
  flex: 1;
  margin-right: 100px;
}
.intro {
  width: 300px;
  color: rgba(0, 0, 0, 0.65098);
}
.intro > h1 {
  font-size: 40px;
  font-weight: normal;
  line-height: 60px;
}
.intro > p {
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
}

.color-button {
  padding: 10px 20px;
  border: none;
  margin-bottom: 10px;
}

.demo-item {
  width: 300px;
  position: relative;
  margin-bottom: 10px;
  margin: 0 10px 0 10px;
  z-index: 2;
}
.demo-item h6 {
  margin: 0;
  padding: 5px 0;
  color: #666;
}
</style>
