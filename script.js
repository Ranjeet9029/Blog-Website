
function addComment(event, commentSectionId) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector('input').value;
  const message = form.querySelector('textarea').value;

  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  commentDiv.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

  document.getElementById(commentSectionId).appendChild(commentDiv);
  form.reset();
}
