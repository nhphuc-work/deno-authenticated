pipeline {
  agent any
  stages {
    stage('remove old container and old image') {
      steps {
        withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
          sh 'docker ps -q --filter "name=deno_api" | xargs -r docker stop'
          sh 'docker ps -q --filter "name=deno_api" | xargs -r docker rm'
        }
      }
    }
    stage('build docker image') {
      steps {
        sh 'docker build -t deno:latest .'
      }
    }
    stage('start docker container') {
      steps {
        sh 'docker run -dp 3000:3000 --name deno_api deno:latest'
      }
    }
  }
}
