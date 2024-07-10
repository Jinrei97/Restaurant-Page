
export default function loadMenu() {
    const content = document.querySelector("#content");
    const div_text = document.createElement("div");
    
    const head = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    head.textContent = "Menù";
    p1.textContent = "Da oltre 50 anni portiamo in tavola prelibatezze e piatti freschi della tradizione";
    p2.textContent = "Sfoglia il nostro menù";
    div_text.appendChild(head);
    div_text.appendChild(p1);
    div_text.appendChild(p2);

    const canvas = document.createElement("canvas");
    content.appendChild(div_text);
    content.appendChild(canvas);
}