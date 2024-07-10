function createCards(imgClass, type, text, link) {
    const div_container = document.createElement("div");
    div_container.classList.add("card");

    const div_image = document.createElement("div");
    div_image.classList.add("image");
    div_image.classList.add(imgClass);

    const text_element = document.createElement(type);
    text_element.textContent = text;
    if (type === "a") text_element.href = link;

    div_container.appendChild(div_image);
    div_container.appendChild(text_element);
    return div_container;
};

function createContacts() {
    const div_contacts = document.createElement("div");

    const div_text = document.createElement("div");
    div_text.textContent = "CONTATTACI";

    const div_cards = document.createElement("div");
    div_cards.className = "cards";
    const card_list = [];
    card_list.push(createCards("telephone", "p", "+39 0123456789", ""));
    card_list.push(createCards("message", "p", "info@damario.it", ""));
    card_list.push(createCards("facebook", "a", "@DaMario", ""));
    card_list.push(createCards("instagram", "a", "#DaMario", ""));
    card_list.push(createCards("tripadvisor", "a", "Da Mario", ""));
    for (let card of card_list) div_cards.appendChild(card);

    div_contacts.appendChild(div_text);
    div_contacts.appendChild(div_cards);
    return div_contacts;
}

function createLabelInput(attrName, name, type, placeholder, req, labelMessage, order=1) {
    const label = document.createElement("label");
    const input = document.createElement("input");

    label.setAttribute("for", attrName);
    label.classList.add(attrName);
    label.textContent = labelMessage;

    input.setAttribute("id", attrName);
    input.setAttribute("name", name);
    input.setAttribute("type", type);
    input.setAttribute("placeholder", placeholder);
    if (req) input.required = true;

    const card = document.createElement("div");
    if (order === 1) {
        card.appendChild(label);
        card.appendChild(input);
    } else if (order === 2) {
        card.appendChild(input);
        card.appendChild(label);
    }
    return card;
};
function createForm() {
    const form = document.createElement("form");

    const card_list = [];
    card_list.push(createLabelInput("nome", "nome", "text", "Mario", true, "Nome (richiesto)"));
    card_list.push(createLabelInput("mail", "mail", "email", "", true, "E-mail (richiesto)"));
    card_list.push(createLabelInput("oggetto", "oggetto", "text", "", false, "Oggetto"));
    card_list.push(createLabelInput("messaggio", "msg", "text", "", true, "Il tuo Messaggio"));
    card_list.push(createLabelInput("privacy", "privacy", "checkbox", "", true, "Ho letto l'informativa privacy e acconsento alla memorizzazione dei miei dati nel vostro archivio in base a quanto stabilito dal regolamento europeo per la protezione de dati personali n. 679/2016 (GDPR) ", 2));
    for (let card of card_list) form.appendChild(card);

    const btn_submit = document.createElement("button");
    btn_submit.type = "submit";
    btn_submit.textContent = "INVIA";
    form.appendChild(btn_submit);
    return form;
};

export default function loadContact() {
    const content = document.querySelector("#content");
    content.appendChild(createContacts());
    content.appendChild(createForm());
}