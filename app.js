function changeImage() {
    const randomImageNumber = Math.floor(Math.random() * 9) + 1;

    const image = document.getElementById('randomImage');

    image.style.opacity = 0;

    setTimeout(() => {
        
      image.src = `images/${randomImageNumber}.jpg`;

      image.style.opacity = 1;
    }, 500); 
}
