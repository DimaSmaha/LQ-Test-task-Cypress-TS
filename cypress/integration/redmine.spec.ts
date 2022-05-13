import Objects from './pageobjects/objects.page'
import Buttons from './pageobjects/buttons.page'
import Functions from './pageobjects/functions.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const obj = new Objects();
const btn = new Buttons();
const func = new Functions()


describe('Redmine test cases',  function()  {
  //Positive testing
  it('Register on website',  function()  {
    func.GoToPage()
    func.Register()
  })
  it('Sign in on website',  function()  {
    func.GoToPage()
    func.LogIn()
  })
  it('Password recover',  function()  {
    func.GoToPage()
    func.PassRecover()
  })
  xit('Download redmine repository',  function()  {
    func.GoToPage()
    btn.repoVersionButton()
    .click()
    obj.downloadRepo()
    .click()
  })
  it('Check available projects overview',  function()  {
    func.GoToPage()
    btn.projectsButton()
    .click()
    btn.redmineProjectButton()
    .click()
  })
  it('Check recently added defects',  function()  {
    func.GoToPage()
    btn.activityButton()
    .click()
    obj.defect()
    .click()
  })
  it('Check Redmine versions implementation',  function()  {
    func.GoToPage()
    btn.roadmapButton()
    .click()
    obj.roadmapImplementationVersion()
    .click()
  })
  it('Check Issues page filtration',  function()  {
    func.GoToPage()
    btn.issuesButton()
    .click()
    obj.issuesAddFilter()
    .select("tracker_id")
    obj.issuesAddTrackerFilter()
    .select("2")
    obj.issuesApplyButton()
    .click()
  })
  it('Add new issue',  function()  {
    func.GoToPage()
    func.LogIn()
    btn.newIssueButton()
    .click()
    func.makeNewIssue()
  })
  it('Check news page',  function()  {
    func.GoToPage()
    btn.newsButton()
    .click()
    obj.news()
    .click()
  })
  it('Check forums page',  function()  {
    func.GoToPage()
    btn.forumButton()
    .click()
    obj.forumsHelpTopic()
    .click()
  })
  it('Check repository page',  function()  {
    func.GoToPage()
    btn.repoButton()
    .click()
    obj.repoPageCheck()
  })
  it('Change Redmine guide language',  function()  {
    func.GoToPage()
    btn.helpButton()
    .click()
    obj.navigateToTranslation()
    .click()
    obj.translateToFrench()
    .click()
  })
  it('Check search filtation',  function()  {
    func.GoToPage()
    obj.searchInput()
    obj.searchMessagesFilter()
    .click()
  })
  it('Buy redmine book',  function()  {
    func.GoToPage()
    cy.scrollTo('bottom')
    obj.bookImage()
  })
  it('Check defect details through roadmap',  function()  {
    func.GoToPage()
    btn.roadmapButton()
    .click()
    obj.roadmapImplementationVersion()
    .click()
    obj.defect()
    .click()
  })
  it('Increase number of defects shown',  function()  {
    func.GoToPage()
    btn.issuesButton()
    .click()
    obj.issuesShow50Issues()
    .click()
  })
  it('Check project administarator profile',  function()  {
    func.GoToPage()
    btn.projectsButton()
    .click()
    btn.redmineProjectButton()
    .click()
    obj.redmimeProjectAdministrator()
    .click()
  })
  it('Сheck redmine plugin details',  function()  {
    func.GoToPage()
    btn.resourcesPluginsButton()
    .click()
    obj.plugin()
    .click()
  })
  it('Check Changelog details by version',  function()  {
    func.GoToPage()
    btn.resourcesChangelogButton()
    .click()
    obj.changelog5series()
    .click()
  })

  it('Сheck security vulnerability details',  function()  {
    func.GoToPage()
    btn.resourcesSecurityButton()
    .click()
    obj.securityVulnerabilityDetail()
  })

  //Negative testing
  it('Register without data',  function()  {
    func.GoToPage()
    btn.registerButton()
    .click()
    btn.submitRegisterButton()
    .click()
    obj.errorCheck()
  })
  it('Register with incorrect email',  function()  {
    func.GoToPage()
    btn.registerButton()
    .click()
    obj.registerEnterEmail()
    btn.submitRegisterButton()
    .click()
    obj.errorCheck()
  })
})

