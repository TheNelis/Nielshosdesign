const { html } = require('common-tags');

function Case({size, title, categories, image}) {
    return html`
        <li class="splide__slide casepage__casecontainer__case casepage__casecontainer__case--${size}">
            <a href="/">
                <div class="casepage__casecontainer__case__imagemask">
                    <img src="${image}" alt="Case afbeelding" class="casepage__casecontainer__case__img casepage__casecontainer__case__img--medium">
                </div>
                <div class="casepage__casecontainer__case__bottomcontainer">
                    <p class="casepage__casecontainer__case__title">${title}</p>
                    <p class="casepage__casecontainer__case__tags">${categories}</p>
                </div>
            </a>
        </li>
    `;
}

module.exports = Case;