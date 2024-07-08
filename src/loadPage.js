function createImg(clas, url, alt) {
    const img = new Image();
    img.classList.add(clas);
    img.alt = alt;
    img.src = url;
    return img;
}

export default function loadPage(left, center, right) {
    const content = document.querySelector(".content");

    const img_div = document.createElement("div");
    const img_text = Document.createElement("div");
    const h1 = document.createElement("h1");
    const p = Document.createElement("p");
    img_div.classList.add("img");
    img_text.classList.add("img_text");
    h1.textContent = "Ristorante/Pizzeria - Da Mario";
    p.textContent = "Amore per il dettagli , ospitalità e piatti freschi e gustosi sono ciò che ci contraddistingue da sempre";

    const body_div = document.querySelector("div");
    const img_left = createImg("left", left, "roba non meglio identificabile");
    const img_center = createImg("center", center, "spaghetti");
    const img_right = createImg("right", right, "pomodori");
    body_div.classList.add(body);

    img_text.appendChild(h1);
    img_text.appendChild(p);
    img_div.appendChild(img_text);
    content.appendChild(img_div);

    body_div.appendChild(img_left);
    body_div.appendChild(img_center);
    body_div.appendChild(img_right);
    content.appendChild(body_div);
}