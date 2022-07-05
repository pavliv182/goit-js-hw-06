const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl);

const galleryElementsEl = images.map((el) => {
  return `<li class="list-item"><img src="${el.url}" alt="${el.alt}"/></li>`;
});

console.log(galleryElementsEl);

galleryEl.insertAdjacentHTML("beforeend", galleryElementsEl.join(""));
galleryEl.style.display = "flex";
galleryEl.style.listStyle = "none";
