pipeline {
  agent any
  stages {
    stage('build and push docker images') {
      steps {
        withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
          sh 'docker build -t deno:latest .'
        }
      }
    }
  }
}
