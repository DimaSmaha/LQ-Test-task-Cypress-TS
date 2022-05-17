class OverviewPage{
    
    clickOnProjectAdministrator(){
        return cy.get('[href="/users/1"]').click()
     }

    administratorPageCheck(){
        return cy.contains("Administrator")
    }
    
      
   
}
export default OverviewPage