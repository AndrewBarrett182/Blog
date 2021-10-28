pipeline{
    agent any
    options {
        timestamps()
    }
    stages{
        stage("Build"){
            steps{
                sh '''
                chmod +x ./blogs.sh
                ./blogs.sh
                /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
                brew update
                brew install node
                node -v
                npm -v
                '''
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