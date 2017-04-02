// https://stackoverflow.com/questions/3906142/how-to-save-a-png-from-javascript-variable

(function(){

  var canvas = document.getElementById('place-canvasse');
  var dataUrl = canvas.toDataURL();


  var filename = "reddit_place-" + Date.now() + ".png";
  var download = document.createElement('a');
  download.href = dataUrl;
  download.download = filename;
  download.click();

})();