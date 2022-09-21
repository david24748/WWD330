const links = [
    {
      label: "Week1 notes",
      url: "Week1/index.html",
      label2: "week2 notes",
      url2: "Week2/index.html"
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

function loadIndextwo() {
  const ol = document.querySelector("#linkslisttwo");

  links.forEach(link => {
      const li = document.createElement("li");
      const href = document.createElement("a");
      href.setAttribute("href", link.url2);
      href.innerText= link.label2;

      li.appendChild(href);
      ol.appendChild(li);

      
  })
}
loadIndextwo()
