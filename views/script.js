document.addEventListener("click", (e) => {
  const id = e.target?.dataset?.id || null;
  if (id) {
    fetch(`/edit_employee/${id}`, {
      method: "DELETE",
    }).then(() => window.location.reload());
  }
});

document.getElementById("search").addEventListener("change", (e) => {
  const surname = e.target.value;
  console.log(surname);
  fetch(`/surname_search/${surname}`, { method: "GET" }).then(
    (res) =>
      (document.location.href = `http://localhost:3000/surname_search/${surname}`)
  );
});
