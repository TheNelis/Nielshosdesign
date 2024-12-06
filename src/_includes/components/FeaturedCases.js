const { html } = require('common-tags');

function FeaturedCases() {
    return html`
        <div class="featured-cases">
            <h2 class="featured-cases__title">Cases</h2>
            <div class="featured-cases__casecontainer">
                <a href="/casepage/cases" class="featured-cases__casecontainer__case">
                    <div class="featured-cases__casecontainer__case__imagemask">
                        <img src="/assets/images/Sneakers/blazing_luke/blazin_luke3.jpeg" alt="Case afbeelding" class="featured-cases__casecontainer__case__img">
                    </div>
                    <div class="featured-cases__casecontainer__case__bottomcontainer">
                        <p class="featured-cases__casecontainer__case__title">Blazin’ Luke  Nikes</p>
                        <p class="featured-cases__casecontainer__case__tags">Illustratie / Sneakers</p>
                    </div>
                </a>
                <a href="/casepage/cases" class="featured-cases__casecontainer__case">
                    <div class="featured-cases__casecontainer__case__imagemask">
                        <img src="/assets/images/Campagnes/slokkie/Slokkie_mockup1.png" alt="Case afbeelding" class="featured-cases__casecontainer__case__img">
                    </div>
                    <div class="featured-cases__casecontainer__case__bottomcontainer">
                        <p class="featured-cases__casecontainer__case__title">Slokkie</p>
                        <p class="featured-cases__casecontainer__case__tags">Print / Illustratie</p>
                    </div>
                </a>
                <a href="/casepage/cases" class="featured-cases__casecontainer__case">
                    <div class="featured-cases__casecontainer__case__imagemask">
                        <img src="/assets/images/Websites & Webapps/boomstamhuis_84/Boomstamhuis_homepage.png" alt="Case afbeelding" class="featured-cases__casecontainer__case__img">
                    </div>
                    <div class="featured-cases__casecontainer__case__bottomcontainer">
                        <p class="featured-cases__casecontainer__case__title">Boomstamhuis 84</p>
                        <p class="featured-cases__casecontainer__case__tags">Identiteit / Web</p>
                    </div>
                </a>
            </div>
            <a href="/casepage/cases" class="button--green--outline">Bekijk cases</a>
        </div>
    `;
}

module.exports = FeaturedCases;