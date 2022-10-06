const links = [
    {
      label: "Week1 notes",
      url: "Week1/index.html",
      label2: "Week2 notes",
      url2: "Week2/index.html",
      label3: "Week3 notes",
      url3: "Week3/index.html",
      label4: "Week4 notes",
      url4: "Week4/index.html"
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

function loadIndexthree() {
  const ol = document.querySelector("#linkslistthree");

  links.forEach(link => {
      const li = document.createElement("li");
      const href = document.createElement("a");
      href.setAttribute("href", link.url3);
      href.innerText= link.label3;

      li.appendChild(href);
      ol.appendChild(li);

      
  })
}
loadIndexthree()

function loadIndexfour() {
  const ol = document.querySelector("#linkslistfour");

  links.forEach(link => {
      const li = document.createElement("li");
      const href = document.createElement("a");
      href.setAttribute("href", link.url4);
      href.innerText= link.label4;

      li.appendChild(href);
      ol.appendChild(li);

      
  })
}
loadIndexfour()