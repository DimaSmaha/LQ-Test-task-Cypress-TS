class RegisterPage{
//methods
registerNewAccount(){
    cy.get('[id="user_login"]').click().type('Random')
    cy.get('[id="user_password"]').click().type('Random')
    cy.get('[id="user_password_confirmation"]').click().type('Random')
    cy.get('[id="user_firstname"]').click().type('Random')
    cy.get('[id="user_lastname"]').click().type('Random')
    cy.get('[id="user_mail"]').click().type('dsadasadsdsadsasda@gmail.com')
    cy.get('[name="commit"]').click()
}

enterEmail(){
    cy.get('[id="user_mail"]').type('RAndommmm')
}

//objects
clickSubmitRegisterButton(){
    return cy.get ('[name="commit"]').click()
}

//checks
successfulRegistrationCheck(){
    return cy.get('[id="flash_notice"]')
}
errorCheck(){
    return cy.get('[id="errorExplanation"]')
}

}

export default RegisterPage