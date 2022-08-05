const prev = document.querySelector('.prev');
const next= document.querySelector('.next');
const imgs = document.querySelector('.images');

// *to avoid duplicate images when user 'scrolls' back and forth 
// in the range that doesn't needs to create new lement.
let isScrolling = false; 

prev.addEventListener('click', () =>{
  if(isScrolling == true){
    return;
  }else{
    isScrolling = true;
    let newImg = document.createElement('img');
    newImg.style.width = '0px';
    newImg.src = document.querySelector('.images').children[4].src
    imgs.insertBefore(newImg,imgs.firstChild);
    setTimeout(() => {
      imgs.lastElementChild.style.width = "0%";
      imgs.firstElementChild.style.width = '78%';
    }, 30);
    setTimeout(() => {
      imgs.lastElementChild.remove();
      isScrolling = false;
    }, 300);
  }
});

next.addEventListener('click', () =>{
  if(isScrolling == true){
      return;
    }else{
      isScrolling = true;
    let newImg = document.createElement('img');
    newImg.style.width = '0px';
    newImg.src = document.querySelector('.images').children[0].src
    imgs.insertBefore(newImg,imgs.lastChild); 
    setTimeout(() => {
      imgs.firstElementChild.style.width = "0%";
      newImg.style.width = '78%';
    }, 30);
    setTimeout(() => {
      imgs.firstElementChild.remove();
      isScrolling=  false;
    }, 300);
  }
});
