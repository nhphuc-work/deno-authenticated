pipeline {
  agent any
  stages {
    stage('build and push docker images') {
      steps {
        // sshagent(['ssh-key']) {
        //   sh 'ssh -o StrictHostKeyChecking=no -l root 14.225.204.32 bash deploy.sh'
        // }
        withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
          sh 'docker build -t deno:latest .'
          sh 'docker push deno:latest'
        }
      }
    }
  }
}
