import Common from '../pageobjects/common.page'
import HomePage from '../pageobjects/home.page'
import RegisterPage from '../pageobjects/register.page'
import LoginPage from '..//pageobjects/login.page'
import ProjectsPage from '../pageobjects/projects.page'
import HelpPage from '../pageobjects/help.page'
import OverviewPage from '../pageobjects/overview.page'
import DownloadPage from '../pageobjects/download.page'
import ActivityPage from '../pageobjects/activity.page'
import RoadmapPage from '../pageobjects/roadmap.page'
import IssuesPage from '../pageobjects/issues.page'
import NewIssuePage from '../pageobjects/newissue.page'
import NewsPage from '../pageobjects/news.page'
import ForumsPage from '../pageobjects/forums.page'
import RepositoryPage from '../pageobjects/repository.page'
import SearchResultPage from '../pageobjects/searchresults.page'
import ResourcesPage from '../pageobjects/resources.page'


/// <reference types="cypress" />
const { describe } = require("mocha")

const common = new Common();
const home = new HomePage();
const reg = new RegisterPage();
const login = new LoginPage();
const project = new ProjectsPage();
const help = new HelpPage();
const overview = new OverviewPage();
const download = new DownloadPage();
const activity = new ActivityPage();
const roadmap = new RoadmapPage();
const issues = new IssuesPage();
const newissue = new NewIssuePage();
const news = new NewsPage();
const forums = new ForumsPage();
const repository = new RepositoryPage();
const searchres = new SearchResultPage();
const resources = new ResourcesPage();


beforeEach(() => {
  common.GoToPage()
})

describe('Redmine test cases',  function()  {
  //Positive testing
  xit('Register on website',  function()  {
    home.clickRegisterButton()
    reg.registerNewAccount()
    reg.successfulRegistrationCheck()
  })
  it('Sign in on website',  function()  {
    home.clickLoginButton()
    login.LogIn()
    login.successfulLoginCheck()
  })
  it('Password recover',  function()  {
    home.clickLoginButton()
    login.PassRecover()
    login.passwordRecoverCheck()
  })
  xit('Download redmine repository',  function()  {
    home.clickRepoVersionButton()
    download.downloadRepo()
    download.RedmineFileCheck()
  })
  it('Check available projects overview',  function()  {
    home.clickProjectsButton()
    project.clickRedmineProjectButton()
    project.redmineProjectCheck()
  })
  it('Check recently added defects',  function()  {
    home.clickActivityButton()
    common.clickDefectWord()
    common.defectDetailsCheck()
  })
  it('Check Redmine versions implementation',  function()  {
    home.clickRoadmapButton()
    roadmap.clickImplementationVersion()
    roadmap.roadmapDetailsCheck()
  })
  it('Check Issues page filtration',  function()  {
    home.clickIssuesButton()
    issues.addTrackerFilter()
    issues.chooseTrackerFilter()
    issues.clickApplyButton()
    issues.issuesFeatureFiltrationCheck()
  })
  it('Add new issue',  function()  {
    home.clickLoginButton()
    login.LogIn()
    home.clickNewIssueButton()
    newissue.makeNewIssue()
    newissue.addNewIssueCheck()
  })
  it('Check news page',  function()  {
    home.clickNewsButton()
    news.clickAnyNews()
    news.newsDetailsCheck()
  })
  it('Check forums page',  function()  {
    home.clickForumButton()
    forums.clickHelpTopic()
    forums.forumsHelpTopicCheck()
  })
  it('Check repository page',  function()  {
    home.clickRepoButton()
    repository.repositoryPageCheck()
  })
  it('Change Redmine guide language',  function()  {
    home.clickHelpButton()
    help.navigateToTranslation()
    help.translateToFrench()
    help.redmineGuideTranslationCheck()
  })
  it('Check search filtation',  function()  {
    home.useSearchInput()
    searchres.clickSearchMessagesFilter()
    searchres.searchFiltrationCheck()
  })
  it('Buy redmine book',  function()  {
    cy.scrollTo('bottom')
    home.bookImage()
    home.bookImageCheck()
  })
  it('Check defect details through roadmap',  function()  {
    home.clickRoadmapButton()
    roadmap.clickImplementationVersion()
    common.clickDefectWord()
    common.defectDetailsCheck()
  })
  it('Increase number of defects shown',  function()  {
    home.clickIssuesButton()
    issues.clickShow50Issues()
    issues.issuesShow50IssuesCheck()
  })
  it('Check project administarator profile',  function()  {
    home.clickProjectsButton()
    project.clickRedmineProjectButton()
    overview.clickOnProjectAdministrator()
    overview.administratorPageCheck()
  })
  it('Сheck redmine plugin details',  function()  {
    home.clickResourcesPluginsButton()
    resources.ClickAnyPlugin()
    resources.pluginDetailsCheck()
  })
  it('Check Changelog details by version',  function()  {
    home.clickResourcesChangelogButton()
    resources.ClickOnChangelog5series()
    resources.changelogDetailsCheck()
  })
  it('Сheck security vulnerability details',  function()  {
    home.clickResourcesSecurityButton()
    resources.ClickOnsecurityVulnerabilityDetail()
    resources.vulnerabilityDetailsCheck()
  })
  it('Check list of companies that uses redmine',  function()  {
    cy.scrollTo('bottom')
    home.clickCompaniesThatUseRedminePage()
    common.whoUsesRedmineCheck()
  })
  it('Check profile details of user that added news',  function()  {
    home.clickNewsButton()
    news.clickAnyNews()
    news.clickUserThatAddNews()
    common.profileDetailsPageCheck()
  })
  it('Check forum topic sorting',  function()  {
    home.clickForumButton()
    forums.clickHelpTopic()
    forums.clickSortByDate()
    forums.forumsTopicsSortingCheck()
  })
  it('Check forum issue details',  function()  {
    home.clickForumButton()
    forums.clickHelpTopic()
    forums.clickUserIssue()
    forums.forumTopicsDetailsCheck()
  })
  it('Check issues page sorting',  function()  {
    home.clickIssuesButton()
    issues.clickSortByDate()
    issues.issuesSortingCheck()
  })
  it('Check roadmap filtration',  function()  {
    home.clickRoadmapButton()
    roadmap.uncheckDefectCheckbox()
    roadmap.uncheckFeatureCheckbox()
    roadmap.clickApply()
    roadmap.roadmapPatchesFiltrationCheck()
  })
  it('Check activity filtration',  function()  {
    home.clickActivityButton()
    activity.clickOnIssuesFiltration()
    activity.activityFiltrationCheck()
  })
  it('Check API guide',  function()  {
    home.clickHelpButton()
    help.scrollToDeveloperGuide()
    help.clickRedmineRestApi()
    common.clickApiIssuesGuide()
    common.apiDetailsCheck()
    
  })
  
  //Negative testing
  it('Register without data',  function()  {
    home.clickRegisterButton()
    reg.clickSubmitRegisterButton()
    reg.errorCheck()
  })
  it('Register with incorrect email',  function()  {
    home.clickRegisterButton()
    reg.enterEmail()
    reg.clickSubmitRegisterButton()
    reg.errorCheck()
  })
})

