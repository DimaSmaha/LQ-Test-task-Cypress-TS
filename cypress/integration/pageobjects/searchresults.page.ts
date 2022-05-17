class SearchResultPage{
    
    //objects
    clickSearchMessagesFilter(){
        return cy.contains ('Сообщения').click()
     }
   
    //checks

    searchFiltrationCheck(){
        return cy.get('[id="messages"][checked="checked"]')
    }

}  
export default SearchResultPage