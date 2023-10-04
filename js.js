
         let a=document.querySelectorAll(".btn");
         let box = document.querySelector(".box");
         let girldesktop = document.querySelector(".girld");


         for (let i = 0; i < a.length; i++) {
         a[i].addEventListener("click", function() { 
         let x = this.nextElementSibling;
         let y=this.lastElementChild;
         let z=this.firstElementChild;

      
      if (x.style.display==='block') {
        x.style.display='none';
        y.style.transform='rotateX(0deg)';}

      else {
          x.style.display='block';
          y.style.transform='rotateX(180deg)';
          z.style.color='hsl(237, 12%, 33%)';
          z.style.fontWeight='700';
        }
      });
      }
    
      box.addEventListener("mouseover", mouseOver);
      box.addEventListener("mouseout", mouseOut);

      function mouseOver() {
        box.setAttribute("src","illustration-box-desktop2.svg");
      }
      
      function mouseOut() {
        box.setAttribute("src","illustration-box-desktop.svg");
      } 
      
      window.onload = function() {
        setTimeout(function() {
          girldesktop.setAttribute("src","illustration-woman-online-desktop2.svg");},2000 );

          setTimeout(function() {
            girldesktop.setAttribute("src","illustration-woman-online-desktop3.svg");},4000 );

            setTimeout(function() {
              girldesktop.setAttribute("src","illustration-woman-online-desktop.svg");},6000 );
}
    

      


      



