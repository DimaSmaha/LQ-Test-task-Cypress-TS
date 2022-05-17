
class ResourcesPage{

    //objects
     
    ClickAnyPlugin(){
    return cy.contains('Plugin').click()
    }
    ClickOnChangelog5series(){
    return cy.contains('5.0.x').click()
    }
    ClickOnsecurityVulnerabilityDetail(){
    return cy.contains('CVE')
    }

    //checks
    pluginDetailsCheck(){
    return cy.contains("Code repository")
    }
    changelogDetailsCheck(){
    return cy.contains("Changelog 5.0.x")
    }
    vulnerabilityDetailsCheck(){
    return cy.contains("CVE")
    }

}
export default ResourcesPage