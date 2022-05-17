class ForumsPage{

    //objects

    clickHelpTopic(){
        return cy.contains('Help').click()
    }
    clickSortByDate(){
        return cy.get('[href="/projects/redmine/boards/2?sort=created_on%2Cupdated_on%3Adesc"]').click()
     }
    clickUserIssue(){
        return cy.get('[href="/boards/2/topics/667"]').click()
    }
   

    //checks
    forumsHelpTopicCheck(){
        return cy.contains('Get public help')
    }
    forumsTopicsSortingCheck(){
        return cy.contains('Adding security to custom plugin')
    }
    forumTopicsDetailsCheck(){
        return cy.contains("Welcome in Redmine help forum.")
    }
   
}
export default ForumsPage