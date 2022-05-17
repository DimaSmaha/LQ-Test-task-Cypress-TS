class Common {

   //methods
   GoToPage(){
      cy.viewport(1500,660)
      cy.visit('https://www.redmine.org/')
      }
   
   //common
   defectDetailsCheck(){
      return cy.get('[class="description"]')
   }
   clickDefectWord(){
   return cy.contains('Defect #').click()
   }
   clickApiIssuesGuide(){
      return cy.get('[class="wiki-page"]').contains("Issues").click()
   }
   
   //common checks
   profileDetailsPageCheck(){
      return cy.contains("IRC nick")
   }
   apiDetailsCheck(){
      return cy.contains("GET /issues.[format]")
   }
   whoUsesRedmineCheck(){
      return cy.contains("Education & Research")
   }
   

 }
            
export default Common