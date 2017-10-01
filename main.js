//ex 1
var out = document.getElementById('out1');
  document.getElementById('block1').onmousemove = function(e) {
    out.innerHTML = e.offsetX + ', ' + e.offsetY;
    console.log(e.offsetX + ', ' + e.offsetY);
  }

  //ex 2
  document.getElementById('folder').ondblclick = function() {
    this.style.background = 'url(op.png) no-repeat center';
  }

      //ex 3
      var div = document.getElementById('div');
        div.onclick = createDivs;
      
      function createDivs() {
        for (var i = 0; i < 304; i++) {
          div.setAttribute('style', 'width: 100%; height: auto; display: flex; flex-direction: row; flex-wrap: wrap;');
          div.innerHTML += '<div class="small-div">' + i + '</div>';
          document.getElementById('ex3-p').innerHTML = '';
        }
      
      

  var smallDiv = document.querySelectorAll('.small-div');
  
   for (var i = 0; i < smallDiv.length; i++) {
     smallDiv[i].onmouseenter = round;
     smallDiv[i].onmouseleave = roundHide;

   }
  function round() {
    this.style.borderRadius = '100%';
  }
  function roundHide() {
    this.style.borderRadius = '0';
  }
}

//ex 4

  var largeImg = document.getElementById('main-img');
  var smallImg = document.querySelectorAll('.small-img');
      for (var i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = showBigImg; 
  }

  function showBigImg() {
    largeImg.setAttribute('style', 'background: url'+ '('+this.src+') no-repeat; background-size: contain;');
    console.log(this.src);
  }


//ex 5
document.getElementById('trigger').onclick = on;
function on() {
  var range = document.getElementById('range');
    if (range.style.justifyContent == 'flex-start') {
      range.style.justifyContent = 'center';
      console.log(1);
    }
    else if (range.style.justifyContent == 'center') {
      range.style.justifyContent = 'flex-end';
      console.log(2);
    }
    else {
      range.style.justifyContent = 'flex-start';
      console.log(range.style.justifyContent);
      console.log(0);
    }
}