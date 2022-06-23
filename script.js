//Canvas creating with image
var canvas = document.getElementById("c");
var ctx = canvas.getContext('2d');
var img = new Image();

//Image with EventListener
img.addEventListener('load', function() {
  ctx.filter = 'none';
  ctx.drawImage(img, 0, 0, 300, 200);
  window.URL.revokeObjectURL(this.src);
}, false);

//Blurring filter
var blur = document.getElementById('blur');
blur.addEventListener('click', function() {
  ctx.filter = 'blur(2px)';
  ctx.drawImage(img, 0, 0, 300, 200);
}, false);

//Handle files to capture image src
function handleFiles(files) {
  if (files.length) {
    img.src = window.URL.createObjectURL(files[0]);
  }
}

//Download button
var download = document.createElement('a');
download.innerHTML = 'Download the image';
download.addEventListener('click', function(ev) {
  download.href = canvas.toDataURL();
  download.download = 'img.png';
}, false);

document.body.appendChild(download);
