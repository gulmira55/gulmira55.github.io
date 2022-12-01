var i=0;
var images = [];
var time = 5000;

images[0] = 'bloom.jpg'
images[1] = 'psych.jpg'
images[2] = 'nu.jpg'
images[3] = "tt.png"
images[4] = 'c2.jpg'
images[5] = 'c3.jpg'
images[6] = 'c4.jpg'
images[7] = 'c5.jpg'
images[8] = 'c6.jpg'
images[9] = 'c7.jpg'
images[10] = 'c8.jpg'
images[11] = 'c9.jpg'

//var vols = []
//vols[1] = 'v1.jpg'
//vols[2] = 'v2.jpg'
//vols[3] = 'v3.jpg'
//vols[4] = 'v4.jpg'


function changeImg(){
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i=0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;



function plusSlides(n) {
  let x = i + n
  if (x > images.length-1) {
    i=0;
  } else if (x < 0) {
    i=images.length-1;
  }
  else {
    i=x;
  }

  document.slide.src = images[i];

}


