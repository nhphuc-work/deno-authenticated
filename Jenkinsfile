pipeline {
  agent any
  stages {
    stage('start container') {
      steps {
        sh 'docker-compose up --build -d'
      }
    }
  }
}
