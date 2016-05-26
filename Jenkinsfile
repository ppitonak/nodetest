node {
   stage 'Unit Tests'
   
   echo 'Hello World 1'
   def nodeHome = tool 'nodejs-6.2.0'
   env.PATH = "${nodeHome}/bin:${env.PATH}"
   checkout scm
   sh 'npm prune'
   sh 'npm install'
   sh 'XUNIT_FILE=unit-tests.xml npm test -- --reporter xunit-file'
   step([$class: 'JUnitResultArchiver', testResults: 'unit-tests.xml'])
   
   stage 'Integration Tests'
   echo 'Hello World 2'
}
