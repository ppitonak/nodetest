node {
   stage 'Unit Tests'
   
   echo 'Hello World 1'
   def nodeHome = tool 'nodejs-6.2.0'
   env.PATH = "${nodeHome}/bin:${env.PATH}"
   checkout scm
   sh 'npm prune'
   sh 'npm install'
   
   stage 'Integration Tests'
   echo 'Hello World 2'
}
