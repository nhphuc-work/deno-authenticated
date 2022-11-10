pipeline {
  agent any
  stages {
    stage('remove container') {
      steps {
        sh 'docker ps -q --filter "name=deno_api" | xargs -r docker stop'
        sh 'docker ps -q --filter "name=deno_api" | xargs -r docker rm'
      }
    }
    stage('remove images') {
      steps {
        sh 'docker rmi deno:latest'
      }
    }
    stage('build images') {
      steps {
        sh 'docker build -t deno:latest .'
      }
    }
    stage('run container') {
      steps {
        sh 'docker run -dp 3000:3000 --name deno_api deno:latest'
      }
    }
  }
}
