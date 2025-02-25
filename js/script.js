
// ////////////////////////// Pagr next and Previous script start //////////////////////////////////////////

function showPage(pageNumber) {
  // Sab pages hide kar do
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  // Sirf current page dikhana hai
  document.getElementById(`page${pageNumber}`).classList.add("active");
}

// ////////////////////////// Pagr next and Previous script end //////////////////////////////////////////


// ///////////////////////////////////// slider script start ///////////////////////////////////////////

function createSlider(sliderId, images, indicatorClass) {
  const slider = document.getElementById(sliderId);
  const indicators = document.querySelectorAll(`${indicatorClass} div`);
  let index = 0;
  function changeSlide() {
    slider.style.backgroundImage = `url('${images[index]}')`;
    indicators.forEach(ind => ind.classList.remove("active"));
    indicators[index].classList.add("active");
    index = (index + 1) % images.length;
  }
  setInterval(changeSlide, 3000);
  changeSlide();
}
createSlider("slider1", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSguMMxq75VndXQlhJQgKRLSwcTnLAaYXryw&s",
  "https://5.imimg.com/data5/QP/KK/MY-30533217/online-exam-center-creations.jpg",
  "https://img.freepik.com/free-photo/woman-with-super-gesture-university-lecture_23-2147679176.jpg?t=st=1739945557~exp=1739949157~hmac=d93da0b90eab75ebc5c11f0e6b0ce526ae98f58159bd0109f28bfbfdf2fc9e3a&w=740"
], ".sliderIndicator1");

createSlider("slider2", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSguMMxq75VndXQlhJQgKRLSwcTnLAaYXryw&s",
  "https://5.imimg.com/data5/QP/KK/MY-30533217/online-exam-center-creations.jpg",
  "https://img.freepik.com/free-photo/woman-with-super-gesture-university-lecture_23-2147679176.jpg?t=st=1739945557~exp=1739949157~hmac=d93da0b90eab75ebc5c11f0e6b0ce526ae98f58159bd0109f28bfbfdf2fc9e3a&w=740"
], ".sliderIndicator2");

createSlider("slider3", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSguMMxq75VndXQlhJQgKRLSwcTnLAaYXryw&s",
  "https://5.imimg.com/data5/QP/KK/MY-30533217/online-exam-center-creations.jpg",
  "https://img.freepik.com/free-photo/woman-with-super-gesture-university-lecture_23-2147679176.jpg?t=st=1739945557~exp=1739949157~hmac=d93da0b90eab75ebc5c11f0e6b0ce526ae98f58159bd0109f28bfbfdf2fc9e3a&w=740"
], ".sliderIndicator3");

createSlider("slider4", [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSguMMxq75VndXQlhJQgKRLSwcTnLAaYXryw&s",
  "https://5.imimg.com/data5/QP/KK/MY-30533217/online-exam-center-creations.jpg",
  "https://img.freepik.com/free-photo/woman-with-super-gesture-university-lecture_23-2147679176.jpg?t=st=1739945557~exp=1739949157~hmac=d93da0b90eab75ebc5c11f0e6b0ce526ae98f58159bd0109f28bfbfdf2fc9e3a&w=740"
], ".sliderIndicator4");

// ///////////////////////////////////////// slider script end ///////////////////////////////////////////


// //////////////////////////////////////// open pop-Up script start /////////////////////////////////////////
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// ///////////////////////////////////////  open pop-Up script start ////////////////////////////////////////
const formItems = document.querySelectorAll(".formStep");
const formPrevBtns = document.querySelectorAll(".formPreviousBtn");
const formNextBtns = document.querySelectorAll(".formNextBtn");
const popupButton = document.querySelectorAll(".popupButton");  // Assuming this is the button that should show at the end
const formIndicators = document.querySelectorAll(".formIndicator");

let currentStep = 0;

// Function to update form steps and form indicators


const updateSteps = () => {
  formItems.forEach((item, index) => item.classList.toggle("show", index === currentStep));
  formIndicators.forEach((indicator, index) => {
    indicator.classList.toggle("border-dark", index === currentStep);
    indicator.classList.toggle("stepFilled", index < currentStep);
  });

  // If the current step is the last step, hide the Next buttons and show the popup button
  if (currentStep === formItems.length - 1) {
    formNextBtns.forEach(btn => btn.classList.add("d-none"));  // Hide Next buttons
    popupButton.forEach(btn => btn.classList.remove("d-none"));  // Show the popup button
  } else {
    formNextBtns.forEach(btn => btn.classList.remove("d-none"));  // Show Next buttons
    popupButton.forEach(btn => btn.classList.add("d-none"));  // Hide the popup button
  }
};

// Event listener for the "Next" and "Previous" buttons
[...formNextBtns, ...formPrevBtns].forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep += btn.classList.contains("formNextBtn") ? 1 : -1;
    if (currentStep < 0 || currentStep >= formItems.length) return;
    updateSteps();
  });
});

updateSteps(); // Initialize the form state



// add lab js

const addNewLabBtn = document.querySelectorAll(".addNewLab");
const newLabWrapper = document.querySelector(".newLabWrapper");
const saveBtn = document.querySelector(".saveBtn");
const editBtn = document.querySelector(".newLabWrapper");
const editBtnWrapper = document.querySelector(".editBtnWrapper");
const saveBtnWrapper = document.querySelector(".saveBtnWrapper");
addNewLabBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    newLabWrapper.classList.add("show");
  });
});
saveBtn.addEventListener("click", () => {
  editBtnWrapper.classList.remove("d-none")
  saveBtnWrapper.classList.add("d-none")
})


// //////////////////// my-booking section start///////////////////


// //////////////////// my-booking section end///////////////////

