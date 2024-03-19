//
const userInputs = document.querySelectorAll("input")
const loginBtn = document.getElementById("login-btn")

//Functions
const loginFormHandler = async (event) => {
    event.preventDefault()
    console.log("submited")
    const name = userInputs[0].value
    const surname = userInputs[1].value
    const email = userInputs[2].value
    const password = userInputs[3].value

    await fetch("https://football-d8d52-default-rtdb.europe-west1.firebasedatabase.app/korisnici.json", {
        method: "POST",
        body: JSON.stringify({ name, surname, email, password }),
        headers: { "Content-Type": "application/json" },
    })
    alert("Uspjesno ste ulogovani")
}

//Event Listeners
loginBtn.addEventListener("click", loginFormHandler)