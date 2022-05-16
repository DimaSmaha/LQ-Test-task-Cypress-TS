import Objects from '../pageobjects/objects.page'
import Buttons from '../pageobjects/buttons.page'
import Functions from '../pageobjects/functions.page'

/// <reference types="cypress" />
const { describe } = require("mocha")

const obj = new Objects();
const btn = new Buttons();
const func = new Functions();

beforeEach(() => {
  func.GoToPage()
})

describe('Redmine test cases',  function()  {
  //Positive testing
  it('Register on website',  function()  {
    func.Register()
  })
  it('Sign in on website',  function()  {
    func.LogIn()
  })
  it('Password recover',  function()  {
    func.PassRecover()
  })
  xit('Download redmine repository',  function()  {
    btn.repoVersionButton()
    .click()
    obj.downloadRepo()
    .click()
  })
  it('Check available projects overview',  function()  {
    btn.projectsButton()
    .click()
    btn.redmineProjectButton()
    .click()
  })
  it('Check recently added defects',  function()  {
    btn.activityButton()
    .click()
    obj.defect()
    .click()
  })
  it('Check Redmine versions implementation',  function()  {
    btn.roadmapButton()
    .click()
    obj.roadmapImplementationVersion()
    .click()
  })
  it('Check Issues page filtration',  function()  {
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
    func.LogIn()
    btn.newIssueButton()
    .click()
    func.makeNewIssue()
  })
  it('Check news page',  function()  {
    btn.newsButton()
    .click()
    obj.news()
    .click()
  })
  it('Check forums page',  function()  {
    btn.forumButton()
    .click()
    obj.forumsHelpTopic()
    .click()
  })
  it('Check repository page',  function()  {
    btn.repoButton()
    .click()
    obj.repoPageCheck()
  })
  it('Change Redmine guide language',  function()  {
    btn.helpButton()
    .click()
    obj.navigateToTranslation()
    .click()
    obj.translateToFrench()
    .click()
  })
  it('Check search filtation',  function()  {
    obj.searchInput()
    obj.searchMessagesFilter()
    .click()
  })
  it('Buy redmine book',  function()  {
    cy.scrollTo('bottom')
    obj.bookImage()
  })
  it('Check defect details through roadmap',  function()  {
    btn.roadmapButton()
    .click()
    obj.roadmapImplementationVersion()
    .click()
    obj.defect()
    .click()
  })
  it('Increase number of defects shown',  function()  {
    btn.issuesButton()
    .click()
    obj.issuesShow50Issues()
    .click()
  })
  it('Check project administarator profile',  function()  {
    btn.projectsButton()
    .click()
    btn.redmineProjectButton()
    .click()
    obj.redmimeProjectAdministrator()
    .click()
  })
  it('Сheck redmine plugin details',  function()  {
    btn.resourcesPluginsButton()
    .click()
    obj.plugin()
    .click()
  })
  it('Check Changelog details by version',  function()  {
    btn.resourcesChangelogButton()
    .click()
    obj.changelog5series()
    .click()
  })
  it('Сheck security vulnerability details',  function()  {
    btn.resourcesSecurityButton()
    .click()
    obj.securityVulnerabilityDetail()
  })
  it('Check list of companies that uses redmine',  function()  {
    cy.scrollTo('bottom')
    obj.companiesThatUseRedminePage()
    .click()
  })
  it('Check profile details of user that added news',  function()  {
    btn.newsButton()
    .click()
    obj.news()
    .click()
    obj.userThatAddNews()
    .click()
  })
  it('Check forum topic sorting',  function()  {
    btn.forumButton()
    .click()
    obj.forumsHelpTopic()
    .click()
    obj.forumsSortByDate()
    .click()
  })
  it('Check forum issue details',  function()  {
    btn.forumButton()
    .click()
    obj.forumsHelpTopic()
    .click()
    obj.forumsUserIssue()
    .click()
  })
  it('Check issues page sorting',  function()  {
    btn.issuesButton()
    .click()
    obj.issuesSortByDate()
    .click()
  })
  it('Check roadmap filtration',  function()  {
    btn.roadmapButton()
    .click()
    obj.roadmapDefectCheckbox()
    .uncheck()
    obj.roadmapFeatureCheckbox()
    .uncheck()
    obj.roadmapApply()
    .click()
  })
  it('Check activity filtration',  function()  {
    btn.activityButton()
    .click()
    obj.activityIssuesFiltration()
    .click()
  })
  it('Check API guide',  function()  {
    btn.helpButton()
    .click()
    obj.helpDeveloperGuide()
    .scrollIntoView()
    obj.helpRedmineRestApi()
    .click()
    obj.apiIssuesPageGuide()
    .click()
  })
  
  //Negative testing
  it('Register without data',  function()  {

    btn.registerButton()
    .click()
    btn.submitRegisterButton()
    .click()
    obj.errorCheck()
  })
  it('Register with incorrect email',  function()  {

    btn.registerButton()
    .click()
    obj.registerEnterEmail()
    btn.submitRegisterButton()
    .click()
    obj.errorCheck()
  })
})

