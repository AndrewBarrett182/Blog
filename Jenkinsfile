pipeline{
    agent any
    options {
        timestamps()
    }
    stages{
        stage("Build"){
            steps{
                sh '''
                PATH=$PATH:/usr/local/bin
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
                sh 'PATH=$PATH:/usr/local/bin'
                sh 'npm run start'
            }
        }
        stage("Unit Test"){
            steps{
                sh 'PATH=$PATH:/usr/local/bin'
                sh 'npm run unit-test'
            }
        }
        stage("UI Test"){
            steps{
                sh 'PATH=$PATH:/usr/local/bin'
                sh 'npm run cypress-test'
            }
        }
    }
}