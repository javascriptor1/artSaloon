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
   
