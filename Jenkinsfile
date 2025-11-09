pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/PiyushPatil57/Devops-Project-App.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-project-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop devops_app || true
                docker rm devops_app || true
                docker run -d -p 3000:3000 --name devops_app devops-project-app
                '''
            }
        }
    }
}
