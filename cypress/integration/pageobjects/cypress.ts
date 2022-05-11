class Login {
   
   GoToPage(){
      cy.viewport(1500,660)
      cy.visit('https://www.redmine.org/')
      }

   Register(){
      cy.get('[class="register"]').click()
      cy.get('[id="user_login"]').click().type('RAndommmm')
      cy.get('[id="user_password"]').click().type('RAndommmm')
      cy.get('[id="user_password_confirmation"]').click().type('RAndommmm')
      cy.get('[id="user_firstname"]').click().type('RAndommmm')
      cy.get('[id="user_lastname"]').click().type('RAndommmm')
      cy.get('[id="user_mail"]').click().type('RAndommmm@gmail.com')
      cy.get('[name="commit"]').click()
      }

   LogIn(){
      cy.get('[class="login"]').click()
      cy.get('[id="username"]').click().type('Valdirr')
      cy.get('[id="password"]').click().type('HalavaZa200')
      cy.get('[name="login"]').click()
      }
   PassRecover(){
         cy.get('[class="login"]').click()
         cy.get('[href="/account/lost_password"]').click()
         cy.get('[id="mail"]').click().type('sendmemrspam@gmail.com')
         cy.get('[name="commit"]').click()
      }       
      
   
   projectsButton(){
         return cy.get('[class="projects"]')
   }
   registerButton(){
         return  cy.get('[class="register"]')
   }
   redmineProject(){
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


   repoVersion(){
      return cy.contains('5.0.0')
   }
   downloadRepo(){
      return cy.get('[href="/releases/redmine-5.0.0.zip"]')
   }
   defect(){
      return cy.contains('Defect')
   }
   implementationVersion(){
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
   makeNewIssue(){
      cy.get ('[id="issue_subject"]').click().type('somehing bad happened')
      cy.get ('[id="issue_description"]').click().type('somehing very bad happened')
      cy.get('[accesskey="r"]').click()

   }
   news(){
      return cy.contains ('released')
   }
   helpTopic(){
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
   repoPageCheck(){
      return cy.contains('root')
   }
   errorCheck(){
      return cy.get('[id="errorExplanation"]')
   }

 }
            
export default Login