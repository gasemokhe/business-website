document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Thanks! Your message has been sent.");
      form.reset();
    } else {
      alert("Oops! There was a problem.");
    }
  });
});
