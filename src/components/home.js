import { getData, findUser } from "../api";
import { addMarkup } from "../helpers";
import { markupUSers } from "../markup";
import { tbodyRef, formRef } from "../refs";

tbodyRef.addEventListener("click", onTargetRowClick);
formRef.addEventListener("submit", onFormSubmitClick);

getData("users")
  .then((response) => {
    const markup = markupUSers(response);
    addMarkup(tbodyRef, markup);
  })
  .catch(console.log);

function onTargetRowClick(e) {
  const iserId = e.target.closest(".js-tr").dataset.userid;

  if (!iserId) {
    return;
  }

  location.href = `user.html?iserId=${iserId}`;
}

function onFormSubmitClick(e) {
  e.preventDefault();

  const searchValue = e.target.elements.search.value.trim();

  if (!searchValue) {
    return;
  }

  tbodyRef.innerHTML = "";

  findUser(searchValue)
    .then((response) => {
      const markup = markupUSers(response);
      addMarkup(tbodyRef, markup);
    })
    .catch(console.log);

  console.log(searchValue);
}
