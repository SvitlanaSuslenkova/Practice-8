
         var a=document.querySelectorAll(".btn");
         var i;

         for (let i = 0; i < a.length; i++) {
         a[i].addEventListener("click", function() { 
          var x = this.nextElementSibling;
          var y=this.lastElementChild;
          var z=this.firstElementChild;

      
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
    
    

  