node {
   
   def nodeHome = tool 'nodejs-6.2.1'
   env.PATH = "${nodeHome}/bin:${env.PATH}"
   properties [[$class: 'GithubProjectProperty', displayName: 'Nodetest', projectUrlStr: 'https://github.com/ppitonak/nodetest/']]
   
   //stage 'Checkout'
   //checkout scm
   
   stage 'Unit Tests'
   setGitHubPullRequestStatus state: 'PENDING', context: 'Unit Tests', message: "Run #${env.BUILD_NUMBER} started"
   sh 'npm prune'
   sh 'npm install'
   sh 'XUNIT_FILE=unit-tests.xml npm test -- --reporter xunit-file'
   step([$class: 'JUnitResultArchiver', testResults: 'unit-tests.xml'])
   setGitHubPullRequestStatus state: 'SUCCESS', context: 'Unit Tests', message: 'Tests passed'
   
   stage 'Integration Tests'
   env.USER = 'jenkins'
   wrap([$class: 'Xvnc']) {
      sh 'npm prune'
      sh 'npm install'
      sh 'sleep 20'
      sh 'XUNIT_FILE=unit-tests.xml npm test -- --reporter xunit-file'
   }
   step([$class: 'JUnitResultArchiver', testResults: 'unit-tests.xml'])
   
   archive 'main.js'
}
