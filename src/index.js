const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const dots = document.querySelector('#dots')
let currentImageIndex = 0;
const imageArray = [
  "/images/Animal-image-0.jpeg",
  "/images/Animal-image-1.jpeg",
  "/images/Animal-image-2.jpg",
  "/images/Animal-image-3.jpg",
  "/images/Animal-image-4.jpg",
];

const appendImage = (string) => {
  const frame = document.querySelector(".body");
  const image = document.createElement("img");
  image.src = string;
  frame.appendChild(image);
};

const clearImgs = () => {
  const images = document.querySelector("img");
  if (!images) {
    return;
  } else {
    images.remove();
  }
};


nextBtn.addEventListener("click", () => {
  currentImageIndex++;
  console.log(currentImageIndex);
  if (currentImageIndex > 4) {
    currentImageIndex = 4;
  }
  clearImgs();
  appendImage(imageArray[currentImageIndex]);
  const allDots = document.querySelectorAll('.dot')
  allDots.forEach(item => item.classList.remove('active'))
  allDots[currentImageIndex].classList.add('active')
});
previousBtn.addEventListener("click", () => {
  currentImageIndex--;
  console.log(currentImageIndex);
  if (currentImageIndex < 0) {
    currentImageIndex = 0;
  }
  clearImgs();
  appendImage(imageArray[currentImageIndex]);
  const allDots = document.querySelectorAll('.dot')
  allDots.forEach(item => item.classList.remove('active'))
  allDots[currentImageIndex].classList.add('active')
});

if (currentImageIndex === 0) {
  appendImage("/images/Animal-image-0.jpeg")
}

imageArray.forEach((image, index) => {
  
  const span = document.createElement("span")
  span.className = 'dot'
 
  span.addEventListener('click', () => {
    currentImageIndex = index
  })
  dots.appendChild(span)

})