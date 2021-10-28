pipeline{
    agent any
    options {
        timestamps()
    }
    stages{
        stage("Build"){
            steps{
                sh 'chmod +x ./blogs.sh'
                sh './blogs.sh'
            }
        }
        stage("Deploy"){
            steps{
                sh 'npm run start'
            }
        }
        stage("Unit Test"){
            steps{
                sh 'npm run unit-test'
            }
        }
        stage("UI Test"){
            steps{
                sh 'npm run cypress-test'
            }
        }
    }
}