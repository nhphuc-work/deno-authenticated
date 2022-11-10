pipeline {
  agent any
  stages {
    stage('remove container') {
      steps {
        sh 'docker ps -q --filter "name=deno_api_1" | xargs -r docker stop'
        sh 'docker ps -q --filter "name=deno_api_1" | xargs -r docker rm'
        sh 'docker ps -q --filter "name=deno_api_2" | xargs -r docker stop'
        sh 'docker ps -q --filter "name=deno_api_2" | xargs -r docker rm'
      }
    }
    stage('remove images') {
      steps {
        sh 'docker ps -q --filter "name=deno:latest" | xargs -r docker rmi'
      }
    }
    stage('build images') {
      steps {
        sh 'docker build -t deno:latest .'
      }
    }
    stage('run container') {
      steps {
        sh 'docker run -dp 3000:3000 --name deno_api_1 deno:latest'
        sh 'docker run -dp 3000:3000 --name deno_api_2 deno:latest'
      }
    }
  }
}
