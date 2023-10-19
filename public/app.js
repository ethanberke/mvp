console.log("here");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new formdata(event.target);
    const num = formData.get("num");

    //axios 

    fetch("/users", {
        method: 'POST',
        body: JSON.stringify({ num }),
        header: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(thing => {    
    console.log("Submitting form", thing);
    //make post request to /users
    });
}); 

fetch("/users").then((response) => {
    return response.json();
}).then((user) => {
    for (let users of user) {
        const p = document.createElement("p");
        p.innerText = user.num;
        document.body.append(p);
    }
})