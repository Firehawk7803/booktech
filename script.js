let bookNameElement;

bookNameElement = document.getElementById("book-name");

function onClick() {
  let bookName;
  bookName = bookNameElement.value;
  console.log(bookName);

  if (bookName === "Diary") {
    console.log("Found");
    let bookLinkElement;
    bookLinkElement = document.getElementById("book-link");
    bookLinkElement.innerText = bookName;
    bookLinkElement.href = "/books-pages/diary.html";
    bookLinkElement.style.display = "inline";
  }
  if (bookName === "Dogman") {
    console.log("Found");
    let bookLinkElement;
    bookLinkElement = document.getElementById("book-link");
    bookLinkElement.innerText = bookName;
    bookLinkElement.href = "/books-pages/dog-man.html";
    bookLinkElement.style.display = "inline";
  }

  if (bookName === "The wizards of once") {
    console.log("Found");
    let bookLinkElement;
    bookLinkElement = document.getElementById("book-link");
    bookLinkElement.innerText = bookName;
    bookLinkElement.href = "/books-pages/wizard.html";
    bookLinkElement.style.display = "inline";
  }
  if (bookName === "I survived the titanic") {
    console.log("Found");
    let bookLinkElement;
    bookLinkElement = document.getElementById("book-link");
    bookLinkElement.innerText = bookName;
    bookLinkElement.href = "/books-pages/titanic.html";
    bookLinkElement.style.display = "inline";
  }
  if (bookName === "The last kids on earth") {
    console.log("Found");
    let bookLinkElement;
    bookLinkElement = document.getElementById("book-link");
    bookLinkElement.innerText = bookName;
    bookLinkElement.href = "/books-pages/the-last-kids-on-earth.html";
    bookLinkElement.style.display = "inline";
  }
}
