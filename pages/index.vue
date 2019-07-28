<template>
  <div class="wrapper">
    <div>
      <h1 class="title">Welcome to the Azure Mystery Mansion</h1>
    </div>

    <div class="parent">
      <div class="inventory">
        <p class="text-title">Inventory</p>
      </div>
      <div class="terminal">
        <p class="text-title">Please Come In</p>
        <p>Hello!</p>
        <p>Where do you want to go?</p>
      </div>
      <div class="footer">
        <a id="undoHost" href="#">Undo</a>
        <a id="saveHost" href="#">Save</a>
        <a id="restoreHost" href="#">Restore</a>
        <a id="resetHost" href="#">Reset</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
body {
  background: url(~assets/mansion.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: 'VT323', 'Courier New', monospace;
  font-size: 18px;
  color: #6ee38d;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
a {
  color: #aff5c1;
  text-decoration: none;
}
p {
  margin: 15px;
  font-weight: bold;
}
.wrapper {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 65px 139px;
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
  height: 200px;
  margin: 5px;
  background: rgba(4, 39, 48, 0.8);
  grid-area: 1 / 2 / 2 / 3;
}
.footer {
  margin: 5px;
  text-align: center;
  background: rgba(4, 39, 48, 0.8);
  grid-area: 2 / 1 / 3 / 3;
  font-size: 15px;
  padding-left: 10px;
  height: 40px;
  font-family: 'VT323', 'Courier New', monospace;
  text-shadow: 0 0 5px #1ff05f;
}
</style>
