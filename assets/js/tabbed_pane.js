function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

function openTab(event){

  event.preventDefault();

  let button = event.currentTarget;

  let name = button.textContent;

  let div_content = document.getElementById(name);

  let all_tabs = document.querySelectorAll(".tabcontent");

  for (let i = 0; i < all_tabs.length; i++) {

    all_tabs[i].style.display = "none";

  }

  div_content.style.display = "block";
}

function createButton(name){

  let button = document.createElement("button");

  button.appendChild(document.createTextNode(name));

  button.classList.add("tablink");

  button.addEventListener("click",openTab);

  return button;


}

function createContent(contentText,name){

  let div_content = document.createElement("div");

  div_content.classList.add("tabcontent");

  div_content.id = name;

  let title = document.createElement("h3");

  title.appendChild(document.createTextNode(name));

  let content_pre = document.createElement("pre");

  let content = document.createElement("code");

  content.classList.add("language-"+name.toLowerCase());

  content.appendChild(document.createTextNode(contentText));

  content_pre.appendChild(content);

  div_content.appendChild(title);

  div_content.appendChild(content_pre);

  return div_content;


}

// Get the element with id="defaultOpen" and click on it

let languages = ["C", "Python", "Java", "Haskell", "Rust"];

let root = document.getElementById("LanguagesPanes");


for (let i = 0; i < languages.length; i++) {

  root.appendChild(createButton(languages[i]));

  //root.appendChild(createContent("Hello world",languages[i]));
}

for (let i = 0; i < languages.length; i++) {

  if (languages[i] == "Java") {

    root.appendChild(createContent("public class HelloWorld{\npublic static void main(String[] arg){\nSystem.out.println(\"Hello world\")\n}\n}",languages[i]));

  }
  root.appendChild(createContent("Hello world",languages[i]));
}

document.querySelector(".tabcontent").style.display = "block";
