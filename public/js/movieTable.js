const modalUpdate = document.querySelector("#modalUpdate");
const modalDelete = document.querySelector("#modalDelete");
const eventName = "movieModal";

function updateMovieEvent(id) {
  const customEvent = new CustomEvent(eventName, {detail: {id}});
  modalUpdate.dispatchEvent(customEvent);
}

function deleteMovieEvent(id) {
  const customEvent = new CustomEvent(eventName, {detail: {id}});
  modalDelete.dispatchEvent(customEvent);
}
