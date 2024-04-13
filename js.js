let input = document.querySelectorAll("form input");
let span = document.querySelectorAll("form .required");
console.log(input);
console.log(span);

for (let i = 0; i < input.length; i++) {
  input[i].focus = function () {
    for (let j = 0; j < span.length; j++) {
      span[j].style.opacity = 1;
    }
  };
}
requiredInput();
