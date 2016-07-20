

function insertVideo (callback) {
  document.getElementsByClassName("underlay")[0].innerHTML = '<div class="underlay-video" style="display:initial; visibility: visible;"></div>';
  callback();
}

insertVideo(function(){
  document.getElementsByClassName("underlay-video")[0].innerHTML = '<video preload="auto" muted="true" loop="loop" canplay="true" webkit-playsinline="" style="left: -509.5px; top: -189.5px;" autoplay=""><source src="http://cdn.seevantage.com/videos/props/112/prime.51aVBG.mp4" type="video/mp4"></video>';
});


function test (){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   console.log("workedddd")
 }
}
