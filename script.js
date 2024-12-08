const dateTime = document.getElementById("datetime")

function updateDateTime() {
    const now = new Date()
    dateTime.textContent = now.toJSON().slice(0, 19)
}

setInterval(updateDateTime, 100)