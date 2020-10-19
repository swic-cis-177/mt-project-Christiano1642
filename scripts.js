const form = document.querySelector("form");

form.addEventListener("submit", function () {
  event.preventDefault();

  const formData = {};
  for (let i = 0; i <= 6; i++) {
    formData[event.target.elements[i].id] = event.target.elements[i].value;
    console.log(formData);
  }

  console.log(formData);
});
