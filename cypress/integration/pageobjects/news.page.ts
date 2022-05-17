class NewsPage{
    
    clickAnyNews(){
        return cy.contains ('released').click()
    }

    clickUserThatAddNews(){
        return cy.get('span [class="user active"]').click()
    }

    newsDetailsCheck(){
        return cy.get('[class="comments"]')
    }
    
   
}
export default NewsPage