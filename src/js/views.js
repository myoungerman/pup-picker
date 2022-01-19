export { renderHtml };
export { deleteChildren };
export { toggleElement };

// Render an array of HTML strings at the specified element
function renderHtml(htmlArr, parentEl, posRelativeToParent) {
    htmlArr.forEach(htmlString => {
        parentEl.insertAdjacentHTML(posRelativeToParent, htmlString);
    });
}

function deleteChildren(parent) {
    const children = parent.querySelectorAll('div.result');    

    for (let i = 0; i < children.length; i++) {
            children[i].remove();
    }
}

function toggleElement(el) {
    const cssObj = window.getComputedStyle(el, null);
    let displayVal = cssObj.getPropertyValue("display");

    if (displayVal === "none") {
        el.style.display = "inline";
    }
    if (displayVal === "block" || displayVal === "inline") {
        el.style.display = "none";
    }
}