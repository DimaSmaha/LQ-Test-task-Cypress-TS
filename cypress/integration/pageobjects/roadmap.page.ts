class RoadmapPage{
    //objects
    clickImplementationVersion(){
        return cy.get('[name="5.1.0"]').click()
    }
    uncheckDefectCheckbox(){
        return cy.get('[value="1"][name="tracker_ids[]"]').uncheck()
    }
    uncheckFeatureCheckbox(){
        return cy.get('[value="2"][name="tracker_ids[]"]').uncheck()
    }
    uncheckPatchCheckbox(){
        return cy.get('[value="3"][name="tracker_ids[]"]').uncheck()
    }
    clickApply(){
        return cy.get('[class="button-small"]').click()
    }
    //checks
    roadmapDetailsCheck(){
        return cy.get('[class="progress-info"]')
    }
    roadmapPatchesFiltrationCheck(){
        return cy.contains("Patch #")
    }
    
}
export default RoadmapPage