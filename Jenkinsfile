pipeline{
    agent any
    options {
        timestamps()
    }
    stages{
        stage("Build"){
            steps{
                sh 'chmod +x ./blogs.sh'
                sh 'chmod +x ./requirements.sh'
                sh './blogs.sh'
            }
        }
        stage("Deploy"){
            steps{
                sh './requirements.sh'
                sh 'npm run start'
            }
        }
        stage("Unit Test"){
            steps{
                sh './requirements.sh'
                sh 'npm run unit-test'
            }
        }
        stage("UI Test"){
            steps{
                sh './requirements.sh'
                sh 'npm run cypress-test'
            }
        }
    }
}