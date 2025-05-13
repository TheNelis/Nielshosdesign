const { html } = require('common-tags');

function FeaturedCases() {
    return html`
        <div class="featured-cases">
            <h2 class="featured-cases__title">Cases</h2>
            <div class="featured-cases__casecontainer">
                <a href="/casepage/cases/Artmici" class="featured-cases__casecontainer__case">
                    <div class="featured-cases__casecontainer__case__imagemask">
                        <img src="/assets/images/artmici/artmici_sign_mockup.png" alt="Case afbeelding" class="featured-cases__casecontainer__case__img">
                    </div>
                    <div class="featured-cases__casecontainer__case__bottomcontainer">
                        <p class="featured-cases__casecontainer__case__title">Artmici</p>
                        <p class="featured-cases__casecontainer__case__tags">Branding / Logo</p>
                    </div>
                </a>
                <a href="/casepage/cases/DaveVleugel" class="featured-cases__casecontainer__case">
                    <div class="featured-cases__casecontainer__case__imagemask">
                        <img src="/assets/images/davevleugel/davevleugel_mockup.png" alt="Case afbeelding" class="featured-cases__casecontainer__case__img">
                    </div>
                    <div class="featured-cases__casecontainer__case__bottomcontainer">
                        <p class="featured-cases__casecontainer__case__title">DaveVleugel</p>
                        <p class="featured-cases__casecontainer__case__tags">Branding / Logo</p>
                    </div>
                </a>
                <a href="/casepage/cases/Boomstamhuis84" class="featured-cases__casecontainer__case">
                    <div class="featured-cases__casecontainer__case__imagemask">
                        <img src="/assets/images/boomstamhuis_84/Boomstamhuis_homepage.png" alt="Case afbeelding" class="featured-cases__casecontainer__case__img">
                    </div>
                    <div class="featured-cases__casecontainer__case__bottomcontainer">
                        <p class="featured-cases__casecontainer__case__title">Boomstamhuis 84</p>
                        <p class="featured-cases__casecontainer__case__tags">Logo / Website</p>
                    </div>
                </a>
            </div>
            <a href="/casepage/cases" class="button--green--outline">Bekijk cases</a>
        </div>
    `;
}

module.exports = FeaturedCases;