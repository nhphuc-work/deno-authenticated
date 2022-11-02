pipeline {
  agent any
  stages {
    stage {
      steps {
        git branch: 'main', credentialsId: '2d8952a7-0a64-42fc-ae0a-063f6fbf16ed', url: 'https://gitlab.com/nhphuc-work/deno-authenticated.git'
      }
    }
    stage('build docker images stage') {
      steps {
        withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
          sh 'docker build -t deno_authenticated/v1 .'
          sh 'docker push deno_authenticated/v1'
        }
      }
    }
  }
}
