const data = {
  INTRO: {
    name: "INTRO",
    image:
      "https://png.pngtree.com/background/20230401/original/pngtree-future-landscape-background-of-outer-space-picture-image_2252258.jpg",
    desc: "In today's fast-paced world, technology continues to shape the way we live and work. From innovative gadgets to advanced communication tools, the digital era has brought about significant changes in every aspect of our lives.",
  },
  WORK: {
    name: "WORK",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-adventure-game-volcano-theme-background-image_2158131.jpg",
    desc: "Amidst this technological revolution, the importance of education has never been more pronounced. Access to information has become easier than ever, allowing individuals to enhance their knowledge and skills through online courses, webinars, and virtual classrooms.",
  },
  ABOUT: {
    name: "ABOUT",
    image:
      "https://t3.ftcdn.net/jpg/06/00/49/54/360_F_600495490_6IGdPNohpRh5DDYffcy0vevbkWzfhBVE.jpg",
    desc: "However, with the convenience of technology comes the challenge of navigating a vast sea of information. Discerning credible sources from misinformation is crucial. Critical thinking and digital literacy have become essential skills to make informed decisions in a world overflowing with data.",
  },
  CONTACT: {
    name: "CONTACT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLAQdMtKBzIyuqAxSz39WB8yWVdeMbLoIyHu_iBFLtZ4d13CS7gxSYQ1OZbm49gRfxd0&usqp=CAU",
    desc: "As we embrace the opportunities that technology presents, it's equally important to strike a balance. Human connections, empathy, and a mindful approach to screen time remain vital. In the ever-evolving landscape, finding harmony between the digital and human realms will shape the future we aspire to create.",
  },
};

const modal = document.getElementsByClassName("modal_wrapper")[0];
const heading = document.getElementById("heading");
const image = document.getElementById("image");
const desc = document.getElementsByClassName("desc")[0];
const nav = document.getElementsByTagName("nav")[0];
const li = document.getElementsByTagName("li");
const openModal = (key) => {
  modal.style.display = "inherit";
  heading.textContent = data[key].name;
  image.src = data[key].image;
  desc.textContent = data[key].desc;
  nav.style.display = "none";
};

document.addEventListener("click", (event) => {
  if (
    ![modal, heading, image, desc, nav, li[0], li[1], li[2], li[3]].some(
      (element) => element === event.target,
    )
  ) {
    modal.style.display = "none";
    nav.style.display = "inherit";
    console.log(event.target);
  }
});
