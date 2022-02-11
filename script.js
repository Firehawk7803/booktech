let bookNameElement;
bookNameElement = document.getElementById("book-name");

function onClick() {
  let bookName;
  bookName = bookNameElement.value;
  console.log(bookName);

  if (bookName === "DogMan") {
    console.log("Found");
    let bookLinkElement;
    bookLinkElement = document.getElementById("book-link");
    bookLinkElement.innerText = bookName;
    bookLinkElement.href = "dog-man.html";
  }
}
