class Functions{
 //functions

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

 makeNewIssue(){
    cy.get ('[id="issue_subject"]').click().type('somehing bad happened')
    cy.get ('[id="issue_description"]').click().type('somehing very bad happened')
    cy.get('[accesskey="r"]').click()
    }


}

export default Functions