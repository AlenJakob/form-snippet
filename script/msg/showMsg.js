export function alertMsg(e) {
    const modal = document.querySelector(".is-modal");
    const selectValSubject = document.querySelector("#selectVal");
    modal.style.display = "block";
    console.log(selectValSubject.value)
    selectValSubject.addEventListener("change", () => {

        if (selectValSubject.value != "Select Case") {

            selectValSubject.style.color = "#000"
        } else {

            selectValSubject.style.color = "red"
        }
    })
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000);
}

