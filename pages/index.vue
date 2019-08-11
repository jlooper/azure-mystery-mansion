<template>
  <outside />
</template>

<script>
import outside from '~/pages/outside.vue'

export default {
  components: {
    outside
  }
}
</script>

<style>
a,
.command {
  color: #aff5c1;
  text-decoration: none;
  text-shadow: 0 0 5px #1ff05f;
  cursor: pointer;
}
p {
  margin: 15px;
  font-weight: bold;
}

.title {
  padding: 30px;
  font-size: 34px;
  font-weight: bold;
  text-shadow: 0 0 10px #12b6df;
  color: #1ff05f;
  background: rgba(5, 52, 64, 0.3);
  text-align: center;
  width: 100%;
}
.text-title {
  text-shadow: 0 0 5px #1ff05f;
  color: #1ff05f;
  text-align: center;
}
.parent {
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  height: 400px;
  overflow: auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.inventory {
  font-size: 18px;
  width: 200px;
  margin: 5px;
  background: rgba(4, 39, 48, 0.8);
  grid-area: 1 / 1 / 2 / 2;
}
.terminal {
  font-size: 18px;
  width: 500px;
  height: 300px;
  margin: 5px;
  background: rgba(4, 39, 48, 0.8);
  grid-area: 1 / 2 / 2 / 3;
  overflow-y: auto;
}
</style>
