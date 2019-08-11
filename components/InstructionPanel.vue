<template>
  <div class="footer">
    <a id="undoHost" class="footer-links" href="#">Undo</a>
    <a id="saveHost" class="footer-links" href="#">Save</a>
    <a id="restoreHost" class="footer-links" href="#">Restore</a>
    <a id="resetHost" class="footer-links" href="#">Reset</a>
  </div>
</template>
<style>
.footer {
  margin: 5px;
  padding: 10px;
  text-align: center;
  background: rgba(4, 39, 48, 0.8);
  grid-area: 2 / 1 / 3 / 3;
  font-size: 15px;
  height: 40px;
  font-family: 'VT323', 'Courier New', monospace;
  text-shadow: 0 0 5px #1ff05f;
}
.footer-links {
  padding: 10px;
  font-weight: bold;
}
</style>
