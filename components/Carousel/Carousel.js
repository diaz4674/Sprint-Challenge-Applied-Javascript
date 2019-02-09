class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.left = this.carouselElement.querySelector('.left-button');
        this.right = this.carouselElement.querySelector('.right-button')
        this.imgs = this.carouselElement.querySelectorAll('img')
        this.index = 0;
        
        this.imgs[this.index].style.display = 'block';

        this.left.addEventListener('click', ()=>{return this.toggleLeft()})
        this.right.addEventListener('click', () => {return this.toggleRight()})
    }

    toggleLeft(){
        this.left.style.display = 'none';

        if (this.index === 0)
    }
}

let carousel = document.querySelector('.carousel').forEach( carousel => {return new Carousel(carousel)})

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

console.log(imgs)