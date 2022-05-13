class Buttons{
 //buttons
projectsButton(){
    return cy.get('[class="projects"]')
}
registerButton(){
    return  cy.get('[class="register"]')
}
repoVersionButton(){
    return cy.contains('5.0.0')
}
redmineProjectButton(){
    return cy.get('[class="project root parent "]')
}
activityButton(){
 return cy.get('[class="activity"]')
}
roadmapButton(){
 return cy.get('[class="roadmap"]')
}
issuesButton(){
 return cy.get('[class="issues"]')
}
newsButton(){
 return cy.get('[class="news"]')
}
forumButton(){
 return cy.get('[class="boards"]')
}
repoButton(){
 return cy.get('[class="repository"]')
}
newIssueButton(){
 return cy.get('[class="new-issue"]')
}
helpButton(){
 return cy.contains("User's Guide")
}
submitRegisterButton(){
 return cy.get ('[name="commit"]')
}
resourcesPluginsButton(){
 return cy.get ('[href="/plugins"]')
}
resourcesChangelogButton(){
 return cy.get('[class="wiki-page"]').contains("Changelog")
}
resourcesSecurityButton(){
 return cy.get('[class="wiki-page"]').contains('Security')
}


}

export default Buttons