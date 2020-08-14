const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > -1){
        header.style.backgroundColor = '#29323c';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});



menu_item.forEach(item=>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});


function read() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function read1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function read2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }























  function escapeTxt(os){
    var ns='';
    var t;
    var chr='';
    var cc='';
    var tn='';
    for(i=0;i<256;i++){
      tn=i.toString(16);
      if(tn.length<2)
      tn="0"+tn;
      cc+=tn;
      chr+=unescape('%'+tn)
    }
    cc=cc.toUpperCase();
    os.replace(String.fromCharCode(13)+'',"%13");
    for(q=0;q<os.length;q++){
      t=os.substr(q,1);
      for(i=0;i<chr.length;i++){
        if(t==chr.substr(i,1)){
          t=t.replace(chr.substr(i,1),"%"+cc.substr(i*2,2));
          i=chr.length}}
          ns+=t}
          return ns}
          function unescapeTxt(s){
            return unescape(s)}
            function wF(s){
              document.write(decodeTxt(s))
            }
