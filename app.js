const currentImage = document.querySelector('#image');
const images = ['images/Picture1.jpg', 'images/Picture2.jpg', 'images/Picture3.jpg','images/Picture4.jpg'];

function changeImage() {
    console.log('Hello from script file.');

    let randomNumber = Math.floor(Math.random() * images.length);

    console.log(images[randomNumber]);
    currentImage.src = images[randomNumber];
}