const form = document.querySelector(".createProfile-form");
const thingies = document.querySelector(".thingies");
const numInput = document.querySelector("input[name='num']");

function createUserElement(user) {
  const p = document.createElement("p");
  p.addEventListener("click", () => {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then(() => {
      p.remove();
    });
  });
  p.innerText = user.num;

  return p;
}

function getUsers() {
  fetch("/users")
    .then((response) => response.json())
    .then((things) => {
      thingies.innerText = "";
      for (let thing of things) {
        const element = createUserElement(thing);
        thingies.append(element);
      }
    });
}

getUsers();

form.addEventListener("submit", (event) => {
  // Prevent form from trying to auto-submit.
  event.preventDefault();

  // Get data in the form.
  const formData = new FormData(event.target);
  const user = formData.get("user");

  fetch("/users", {
    method: "POST",
    // We must stringify the body, because fetch won't do it for us.
    body: JSON.stringify({ user }),
    headers: {
      // We must include this, or express doesn't know how to parse the body.
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((user) => {
      userInput.value = "";
      getUsers();
      // figure out what to do here
    });
});