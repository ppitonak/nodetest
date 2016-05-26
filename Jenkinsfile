node {
   stage 'Unit Tests'
   def nodeHome = tool name: '6.2.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
   env.PATH = "${nodeHome}/bin:${env.PATH}"
   sh 'npm -v && node -v'
   step([$class: 'JUnitResultArchiver', testResults: 'unit-tests.xml'])
   
   stage 'Integration Tests'
   echo 'Hello World 2'
}
