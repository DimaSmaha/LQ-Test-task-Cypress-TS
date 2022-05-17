class NewIssuePage{
    
    makeNewIssue(){
        cy.get ('[id="issue_subject"]').click().type('somehing bad happened')
        cy.get ('[id="issue_description"]').click().type('somehing very bad happened')
        cy.get('[accesskey="r"]').click()
    }

    addNewIssueCheck(){
        return cy.get('[class="preview"]')
    }
    
   
}
export default NewIssuePage