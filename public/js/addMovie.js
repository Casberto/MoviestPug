const formEl = document.querySelector("#register-movie");
const titleEl = document.querySelector("input#title");
const descriptionEl = document.querySelector("input#description");
const directorEl = document.querySelector("input#director");
const actorEl = document.querySelector("input#actor");
const ratingEl = document.querySelector("input#rating");
const genreEl = document.querySelector("select[name=genre]");
const posterUrlEl = document.querySelector("input#posterUrl");
const releaseDateEl = document.querySelector("input#releaseDate");

const handleSubmit = async (e) => {
  e.preventDefault();

  const movieData = {
    title: titleEl.value,
    description: descriptionEl.value,
    director: directorEl.value,
    rating: ratingEl.value,
    actor: actorEl.value,
    genre: genreEl.value,
    posterUrl: posterUrlEl.value,
    releaseDate: releaseDateEl.value,
  };

  const result = await axios.post(`/movie/`, movieData);

  if (result.data.status === "success") {
    const alert = document.createElement("div");
    alert.classList.add("alert", "alert-success", "alert-center");
    alert.role = "alert";
    alert.innerText = `The movie ${titleEl.value} was created successfully!`;
    formEl.appendChild(alert);
    setTimeout(() => location.assign("/"), 1500);
  } else {
    const alert = document.createElement("div");
    alert.classList.add("alert", "alert-fail", "alert-center");
    alert.role = "alert";
    alert.innerText = `It wasn't possible to create the movie. Try again later!`;
    formEl.appendChild(alert);

    setTimeout(() => formEl.removeChild(alert), 1500);
  }
};

formEl.addEventListener("submit", handleSubmit);
