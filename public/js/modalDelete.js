let id = "";
const modalDeleteEl = document.querySelector("#modalDelete");

modalDeleteEl.addEventListener("movieModal", (e) => {
  id = e.detail.id;
});

async function deleteMovie() {
  try {
    await axios.delete(`/movie/${id}`);
    location.assign("/");
  } catch (err) {
    console.log(err);
  }
}