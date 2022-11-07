pipeline {
  agent any
  stages {
    stage('ssh server') {
      steps {
        sshagent(['ssh-key']) {
          sh 'ssh -o StrictHostKeyChecking=no -l root 14.225.204.32 cd /root && bash deploy.sh'
        }
      }
    }
  }
}
