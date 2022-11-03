pipeline {
  agent any
  stages {
    stage('build docker images') {
      steps {
        withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
          sh 'docker build -t deno_authenticated:v10 .'
          sh 'docker push deno_authenticated:v10'
        }
      }
    }
  }
}
