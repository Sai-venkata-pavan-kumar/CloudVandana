function reset() {
document.querySelector(".fn").value = "";
document.querySelector(".ln").value = "";
document.querySelector(".dob").value = "";
document.querySelector(".prof").value = "";
document.querySelector(".num").value = "";
document.querySelector(".email").value = "";
document
  .querySelectorAll('input[type="checkbox"]:checked')
  .forEach(function (checkbox) {
    checkbox.checked = false; 
  });
}
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const fn = document.querySelector(".fn").value;
  const ln = document.querySelector(".ln").value;
  const dob = document.querySelector(".dob").value;
  const prof = document.querySelector(".prof").value;
  const email = document.querySelector(".email").value;
  const num = document.querySelector(".num").value;
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  var selectedGenders = [];

  checkboxes.forEach(function (checkbox) {
    selectedGenders.push(checkbox.id);
  });

  if (selectedGenders.length === 0) {
    alert("Please select a gender");
  }
  let gender = selectedGenders.join(", ");
  console.log(gender);
  const country = document.getElementById("con");
  const cvalue = country.value;
  alert(`    First Name is ${fn} 
    Last Name is ${ln}
    Date Of Birth is ${dob}
    Country is ${cvalue}
    Gender is ${gender}
    Profession is ${prof}
    Email is ${email}
    Phone Number is ${num}`);
  reset();
});
