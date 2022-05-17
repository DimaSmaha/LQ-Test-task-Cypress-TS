class IssuesPage{
    
    //objects

    addTrackerFilter(){
        return cy.get ('[id="add_filter_select"]').select("tracker_id")
     }
    chooseTrackerFilter(){
        return cy.get ('[id="values_tracker_id_1"]').select('2')
    }
    clickApplyButton(){
        return cy.get ('[class="icon icon-checked"]').click()
     }
     
    clickShow50Issues(){
        return cy.get ('[href="/projects/redmine/issues?per_page=50"]').click()
     }
    clickSortByDate(){
        return cy.get('[href="/projects/redmine/issues?sort=updated_on%3Adesc%2Cid%3Adesc"]').click
     }

     //checks

    issuesFeatureFiltrationCheck(){
        return cy.get('[class="tracker"]').contains("Feature")
    }
    issuesShow50IssuesCheck(){
        return cy.contains("1-50")
    }
    issuesSortingCheck(){
        return cy.contains("2022-05")
    }
}
export default IssuesPage