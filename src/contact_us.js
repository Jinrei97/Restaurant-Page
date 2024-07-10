
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
}

export default function loadContact() {
    const content = document.querySelector("#content");

    content.appendChild(createForm());
}