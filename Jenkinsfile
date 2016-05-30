node {
   
   def nodeHome = tool 'nodejs-6.2.0'
   env.PATH = "${nodeHome}/bin:${env.PATH}"
   
   //stage 'Checkout'
   //checkout scm
   
   stage 'Unit Tests'
   sh 'npm prune'
   sh 'npm install'
   sh 'XUNIT_FILE=unit-tests.xml npm test -- --reporter xunit-file'
   step([$class: 'JUnitResultArchiver', testResults: 'unit-tests.xml'])
   
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
