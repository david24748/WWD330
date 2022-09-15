const links = [
    {
      label: "Week1 notes",
      url: "Week1/index.html"
    }
  ]

function loadIndex() {
    const ol = document.querySelector("#linkslist");

    links.forEach(link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText= link.label;

        li.appendChild(href);
        ol.appendChild(li);

        
    })
}

loadIndex();