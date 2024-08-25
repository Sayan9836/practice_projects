let count = 0;
const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];
const slides = document.querySelectorAll("img");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

prev.onclick = () => {
  if (count > 0) {
    count--;
    slideImage();
  } else {
    alert("no previous slide");
  }
};

next.onclick = () => {
  if (count < slides.length - 1) {
    count++;
    slideImage();
  } else {
    alert("no next slide");
  }

  console.log(count);
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
};
