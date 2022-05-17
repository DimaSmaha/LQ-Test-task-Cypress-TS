class HelpPage{
    

    //objects
    navigateToTranslation(){
        return cy.contains ('Translations').click()
    }
    translateToFrench(){
        return cy.get ('[href="/projects/redmine/wiki/FrGuide"]').click()
    }

    scrollToDeveloperGuide(){
        return cy.get('h2 [href="#Developer-guide"]').scrollIntoView()
    }
    clickRedmineRestApi(){
        return cy.get('[href="/projects/redmine/wiki/Rest_api"]').click()
    }
  
    //checks
    redmineGuideTranslationCheck(){
        return cy.contains("Guide d'installation")
    }
    apiDetailsCheck(){
        return cy.contains("GET /issues.[format]")
    }
}
export default HelpPage