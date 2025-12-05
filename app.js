console.log("hello to Javascript");
    function buttonClicked() {
      alert("Button was clicked!");
    }

    window.onload = function() {
      const button = document.querySelector("button");
      button.addEventListener("click", buttonClicked);
    }