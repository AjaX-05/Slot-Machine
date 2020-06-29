const generateRandomNumbers = () => {
  return Math.floor(Math.random() * 9 + 1);
};

document.addEventListener("DOMContentLoaded", (event) => {
  let result1, result2, result3;

  document.querySelector("#start").addEventListener("click", (event) => {
    document.querySelector("#result").innerText = "";

    result1 = generateRandomNumbers();
    result2 = generateRandomNumbers();
    result3 = generateRandomNumbers();

    document.querySelector("#result1").innerText = result1;
    document.querySelector("#result2").innerText = result2;
    document.querySelector("#result3").innerText = result3;

    if (result1 === result2 && result1 === result3 && result1 !== null) {
      document.querySelector("#result").innerText = "You Won";
      document.querySelector("#start").disabled = true;
      setTimeout(() => {
        document.querySelector("#start").disabled = false;
      }, 2000);
    }
  });
});
