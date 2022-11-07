pipeline {
  agent any
  stages {
    stage('build and push docker images') {
      steps {
        // sshagent(['ssh-key']) {
        //   sh 'ssh -o StrictHostKeyChecking=no -l root 14.225.204.32 bash deploy.sh'
        // }
        withDockerRegistry(credentialsId: 'b26d8ffe-090e-4dc9-8f4a-6f7a2da9577a', url: 'https://index.docker.io/v1/') {
          sh 'docker build -t deno:v1 .'
          sh 'docker push deno:v1 '
        }
      }
    }
  }
}
