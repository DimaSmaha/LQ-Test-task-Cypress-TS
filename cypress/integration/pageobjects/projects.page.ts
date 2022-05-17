class ProjectsPage{
    //objects
    clickRedmineProjectButton(){
        return cy.get('[class="project root parent "]').click()
    }

    //checks
    redmineProjectCheck(){
        return cy.contains('Redmine is a flexible project management web application written using Ruby on Rails framework.')
    }
   
}
export default ProjectsPage