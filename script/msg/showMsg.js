// import { msgAlert } from "./msgAlert";
export function alertMsg(state) {
  const modal = document.querySelector(".is-modal");
  const selectValSubject = document.querySelector("#selectVal");

  if (state) {
    console.log(state);
    document.querySelector(".modal-content").innerHTML = msgSuccess;
  } else if (!state) {
    console.log(state);
    document.querySelector(".modal-content").innerHTML = msgInvalid;
  }

  modal.style.display = "block";
  selectValSubject.addEventListener("change", () => {
    if (selectValSubject.value != "Select Case") {
      selectValSubject.style.color = "#000";
    } else {
      selectValSubject.style.color = "red";
    }
  });
  setTimeout(() => {
    modal.style.display = "none";
  }, 141000);
}

const msgInvalid = `
  <div class="box message is-danger">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p class="has-text-centered has-text-danger">
             <b>
             Please choose Subject</b>
              </p>
            </div>
          </div>
        </article>
      </div>
  `;
const msgSuccess = `
  <div class="box message is-success">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <p class="has-text-centered has-text-success">
             <b>
             The message has been sent !</b>
              </p>
            </div>
          </div>
        </article>
      </div>
  `;
