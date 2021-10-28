pipeline{
    agent any
    options {
        timestamps()
    }
    tools {
        nodejs "nodejs"
    }
    stages{
        stage("Build"){
            steps{
                sh 'chmod +x ./blogs.sh'
                sh './blogs.sh'
            }
        }
        stage("Unit Test"){
            steps{
                sh 'npm run unit-test'
            }
        }
        stage("UI") {
            parallel {
                stage("Deploy"){
                    steps{
                        sh 'npm run start'
                    }
                }
                stage("UI Test"){
                    steps{
                        sh 'npm run cypress-test'
                    }
                }
            }
        }
    }
}