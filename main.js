// lightbox 

$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // Rating 

  const stars = document.querySelector('.star-rating').children;
  const ratingVale = document.querySelector('#input-rating');
  let index ;
    for (let i=0;i<stars.length;i++){
      stars[i].addEventListener('mouseover',function(){
        for( let s=0; s<stars.length; s++){
          stars[s].classList.remove('star-rate')
          stars[s].classList.add('star-rateWhite')
        }
        for( let s=0; s<=i; s++){
          stars[s].classList.remove('star-rateWhite')
          stars[s].classList.add('star-rate')
        }
      })
      stars[i].addEventListener('click',function(){
        ratingVale.value=i+1;
        console.log(ratingVale.value)
        index=i
      })
      stars[i].addEventListener('mouseout',function(){
        for( let s=0; s<stars.length; s++){
          stars[s].classList.remove('star-rate')
          stars[s].classList.add('star-rateWhite')
        }
        for( let s=0; s<=index; s++){
          stars[s].classList.remove('star-rateWhite')
          stars[s].classList.add('star-rate')
        }
      })
    }

    //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
   
