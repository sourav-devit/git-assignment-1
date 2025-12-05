console.log("hello to JS");
    function buttonClicked() {
      alert("Button was clicked!");
    }

    window.onload = function() {
      const button = document.querySelector("button");
      button.addEventListener("click", buttonClicked);
    }