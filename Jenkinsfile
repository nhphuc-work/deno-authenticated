pipeline {
  agent any
  stages {
    stage('build and push docker images') {
      steps {
        withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
          sh 'docker stop deno_api'
          sh 'docker rm deno_api'
          sh 'docker rmi deno:latest'
          sh 'docker build -t deno:latest .'
          sh 'docker start -dp 3000:3000 --name deno_api deno:latest'
        }
      }
    }
  }
}
