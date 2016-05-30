node {
   
   def nodeHome = tool 'nodejs-6.2.0'
   env.PATH = "${nodeHome}/bin:${env.PATH}"
   
   stage 'Checkout'
   checkout scm
   
   stage 'Unit Tests'
   sh 'npm prune'
   sh 'npm install'
   sh 'XUNIT_FILE=unit-tests.xml npm test -- --reporter xunit-file'
   step([$class: 'JUnitResultArchiver', testResults: 'unit-tests.xml'])
   downstreamCommitStatus {
      context('CONTEXT NAME 1')
      triggeredStatus("The job has triggered")
      startedStatus("The job has started")
      statusUrl()
      completedStatus('SUCCESS', "The job has passed")
      completedStatus('FAILURE', "The job has failed")
      completedStatus('ERROR', "The job has resulted in an error")
   }
   
   stage 'Integration Tests'
   sh 'npm prune'
   sh 'npm install'
   sh 'sleep 60'
   sh 'XUNIT_FILE=unit-tests.xml npm test -- --reporter xunit-file'
   step([$class: 'JUnitResultArchiver', testResults: 'unit-tests.xml'])
   
   archive 'main.js'
}
