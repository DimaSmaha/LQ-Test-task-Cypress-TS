class Objects {
   //objects
   downloadRepo(){
      return cy.get('[href="/releases/redmine-5.0.0.zip"]')
   }
   defect(){
      return cy.contains('Defect #')
   }
   roadmapImplementationVersion(){
      return cy.get('[name="4.2.6"]')
   }
   issuesAddFilter(){
      return cy.get ('[id="add_filter_select"]')
   }
   issuesTrackerFilter(){
      return cy.get ('[value="tracker_id"]')
   }
   issuesTracker(){
      return cy.contains ('Tracker')
   }
   issuesAddTrackerFilter(){
      return cy.get ('[id="values_tracker_id_1"]')
   }
   issuesFeatureFilter(){
      return cy.get ('[value="2"]')
   }
   issuesApplyButton(){
      return cy.get ('[class="icon icon-checked"]')
   }
   news(){
      return cy.contains ('released')
   }
   forumsHelpTopic(){
      return cy.contains ('Help')
   }
   navigateToTranslation(){
      return cy.contains ('Translations')
   }
   translateToFrench(){
      return cy.get ('[href="/projects/redmine/wiki/FrGuide"]')
   }
   searchInput(){
      cy.get ('[class="small"]').click().type('defect{enter}')
   }
   searchMessagesFilter(){
      return cy.contains ('Сообщения')
   }
   registerEnterEmail(){
      cy.get('[id="user_mail"]').type('RAndommmm')
   }
   bookImage(){
      return cy.get ('[src="/attachments/download/14647/redmine_cookbook.png"]')
   }
   issuesShow50Issues(){
      return cy.get ('[href="/projects/redmine/issues?per_page=50"]')
   }
   redmimeProjectAdministrator(){
      return cy.get('[href="/users/1"]')
   }
   plugin(){
      return cy.contains('Plugin')
   }
   changelog5series(){
      return cy.contains('5.0.x')
   }
   securityVulnerabilityDetail(){
      return cy.contains('CVE')
   }

   //checks
   repoPageCheck(){
      return cy.contains('root')
   }
   errorCheck(){
      return cy.get('[id="errorExplanation"]')
   }

 }
            
export default Objects