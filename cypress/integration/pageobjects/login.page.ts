class LoginPage{
    //methods
    LogIn(){
        cy.get('[id="username"]').click().type('Babalen')
        cy.get('[id="password"]').click().type('qwerty')
        cy.get('[name="login"]').click()
        }
        
    PassRecover(){
        cy.get('[href="/account/lost_password"]').click()
        cy.get('[id="mail"]').click().type('babalen253@cupbest.com')
        cy.get('[name="commit"]').click()
    } 


   //checks
    successfulLoginCheck(){
    return cy.get('[id="loggedas"]')
    }
    passwordRecoverCheck(){
    return cy.get('[id="flash_notice"]')
    }


}
    export default LoginPage