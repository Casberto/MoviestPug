// Etiquetas utilizadas para captar e mudar os dados.
const modalUpdateEl = document.querySelector("#modalUpdate");
const titleInputEl = document.querySelector("input#title");
const descriptioninputEl = document.querySelector("input#description");
const directorInputEl = document.querySelector("input#director");
const actorInputEl = document.querySelector("input#actor");
const ratingInputEl = document.querySelector("input#rating");
const genreInputEl = document.querySelector("select[name=genre]");
const posterUrlInputEl = document.querySelector("input#posterUrl");
const releaseDateInputEl = document.querySelector("input#releaseDate");
const formEl = document.querySelector("#formUpdate");

let updateId = "";
modalUpdateEl.addEventListener("movieModal", (e) => {
  updateId = e.detail.id;
  handleLoad();
});

const handleLoad = async () => {
  // 1) Obter dados
  const { data } = await axios.get(`/movie/${updateId}`);
  // 2) Listar os dados nos campos
  titleInputEl.value = data.title;
  descriptioninputEl.value = data.description;
  directorInputEl.value = data.director;
  actorInputEl.value = data.actor;
  ratingInputEl.value = data.rating;
  genreInputEl.value = data.genre;
  posterUrlInputEl.value = data.posterUrl;
  releaseDateInputEl.value = data.releaseDate.split("T")[0];
};

const modal = document.querySelector("#modalUpdate");
modal.addEventListener("showModal", handleLoad);

async function updateMovie(e) {
  e.preventDefault();

  const data = {
    title: titleInputEl.value,
    description: descriptioninputEl.value,
    director: directorInputEl.value,
    actor: actorInputEl.value,
    rating: ratingInputEl.value,
    genre: genreInputEl.value,
    posterUrl: posterUrlInputEl.value,
    releaseDate: releaseDateInputEl.value,
  };
 
  let result;
  // 3) Obter dados novamente, e enviá-los
  try {
    result = await axios.put(`/movie/${updateId}`, data);
  } catch (err) {
    console.log(err);
  }

  if(result.data.status === 'success'){
    const alert = document.createElement("div");
    alert.classList.add("alert", "alert-success", "alert-center");
    alert.role = "alert";
    alert.innerText = `The movie ${titleInputEl.value} was updated successfully!`;
    formEl.appendChild(alert);
    setTimeout(() => location.assign("/"), 1500);
  }else{
    setTimeout(() => location.assign("/"), 1500);
  }
  // 4) Mostrar mensagem de confirmação ou de erro
  // 4,1) Recarregar
  
}

formEl.addEventListener("submit", updateMovie);
