document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            "image": "img1.jpg",
            "tagLine": "Responsible optimized <span> for mobile phones</span>"
        },
        {
            "image": "img2.png",
            "tagLine": "Logo production <span>For homepage and business card</span>"
        },
        {
            "image": "img3.jpg",
            "tagLine": "Large choice of colors <span>from CMYK to pantones</span>"
        },
        {
            "image": "img4.jpg",
            "tagLine": "Catalog creation<span> Both digital and print available</span>"
        }
    ];

    // const
    const leftArrow = document.querySelector(".arrow_left");
    const rightArrow = document.querySelector(".arrow_right");
    const bannerImg = document.querySelector(".banner-img");
    const bannerTagline = document.querySelector(".banner-tagline");
    const dotsContainer = document.querySelector(".dots");

    let index = 0;

    /* Event listeners */
    leftArrow.addEventListener("click", () => {
        index = (index === 0) ? slides.length - 1 : index - 1;
        updateBanner();
    });

    rightArrow.addEventListener("click", () => {
        index = (index === slides.length - 1) ? 0 : index + 1;
        updateBanner();
    });

    // Function to update banner image and tagline
    function updateBanner() {
        bannerImg.src = `./imgs/slideshow/${slides[index].image}`;
        bannerTagline.innerHTML = slides[index].tagLine;
        updateDots(); // Update dots when banner updates
    }

    // Initial call to update banner
    updateBanner();

    // Function to update dots
    function updateDots() {
        dotsContainer.innerHTML = ''; // Clear existing dots
        slides.forEach((slide, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === index) {
                dot.classList.add('dot_selected');
            }
            dotsContainer.appendChild(dot);
         // Add click event listener to dots
            dot.addEventListener('click', () => {
                index = i;
                updateBanner(); // Update banner when dot is clicked
            });
        });
    }
});




/// great accessibility !!!
window.addEventListener('keypress', (e)=>{
	console.log(e.key);
})
