let linkResult = "";

const sendLinkButton = document.getElementById("sendLinkButton");
const copyButton = document.getElementById("copyButton");
const form = document.getElementById("form-link");

function submitForm(event){
  event.preventDefault();
}


function sendLink() {
  document.getElementById("button-refresh").style.transform = "rotate(720deg)";
  const linkInput = document.getElementById("link_user");
  const link = linkInput.value.trim();
  if (link !== "") {
    linkResult = link;
    linkInput.value = "";
    displayLink();
  }
}

function displayLink(){
  let shortLink = document.getElementById("link_shortened");
  shortLink.value = linkResult;
}

async function copyLink() {
  try{
    await navigator.clipboard.writeText(linkResult);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
form.addEventListener("submit", submitForm);
sendLinkButton.addEventListener("click", sendLink);
copyButton.addEventListener("click", copyLink);