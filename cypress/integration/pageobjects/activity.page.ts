class ActivityPage{

    //objects
   
    clickOnIssuesFiltration(){
        return cy.get('[href="/projects/redmine/activity?show_issues=1"]').click()
     }

    //checks
    activityFiltrationCheck(){
        return cy.get('[checked="checked"][value="1"][name="show_issues"]')
    }
    
}
export default ActivityPage