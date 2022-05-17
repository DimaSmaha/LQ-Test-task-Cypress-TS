class HomePage{

    //buttons
    clickLoginButton(){
        cy.get('[class="login"]').click()
    }
    clickProjectsButton(){
        return cy.get('[class="projects"]').click()
    }
    clickRegisterButton(){
        return  cy.get('[class="register"]').click()
    }
    clickRepoVersionButton(){
        return cy.contains('5.0.0').click()
    }
    clickActivityButton(){
     return cy.get('[class="activity"]').click()
    }
    clickRoadmapButton(){
     return cy.get('[class="roadmap"]').click()
    }
    clickIssuesButton(){
     return cy.get('[class="issues"]').click()
    }
    clickNewsButton(){
     return cy.get('[class="news"]').click()
    }
    clickForumButton(){
     return cy.get('[class="boards"]').click()
    }
    clickRepoButton(){
     return cy.get('[class="repository"]').click()
    }
    clickNewIssueButton(){
     return cy.get('[class="new-issue"]').click()
    }
    clickHelpButton(){
     return cy.contains("User's Guide").click()
    }
    clickResourcesPluginsButton(){
     return cy.get ('[href="/plugins"]').click()
    }
    clickResourcesChangelogButton(){
     return cy.get('[class="wiki-page"]').contains("Changelog").click()
    }
    clickResourcesSecurityButton(){
     return cy.get('[class="wiki-page"]').contains('Security').click()
    }

    //objects
    useSearchInput(){
        cy.get ('[class="small"]').click().type('defect{enter}')
     }

    bookImage(){
        return cy.get ('[src="/attachments/download/14647/redmine_cookbook.png"]')
     }
    clickCompaniesThatUseRedminePage(){
        return cy.get('[class="wiki-page"]').contains("This page lists").click()
       }

    //checks
    bookImageCheck(){
        return cy.get ('[src="/attachments/download/14647/redmine_cookbook.png"]')
    }

}
export default HomePage


