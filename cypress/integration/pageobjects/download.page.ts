class DownloadPage{
    //objects
    downloadRepo(){
        return cy.get('[href="/releases/redmine-5.0.0.zip"]').click()
    }

    //checks
    RedmineFileCheck(){
        return cy.get('[href="/releases/redmine-5.0.0.zip"]')
    }
   
}
export default DownloadPage