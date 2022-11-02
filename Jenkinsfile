pipeline {
  agent any
  stages {
    stage('build docker images') {
      steps {
        withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
          sh 'echo $RANDOM | md5sum | head -c 20; echo;'
        }
      }
    }
  }
}
