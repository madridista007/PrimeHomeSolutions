Linux and Devops Project-

So in this project I have setup a Linux server on my machine where I will be hosting the furniture application. I have the vue.js application so I will be packaging the application on docker and then host the docker on the Linux server. For the monitoring part, I will be using Grafana to monitor CPU, RAM, disk and containers and configure alerts. For the automation I will be using GitHub action to automate the software delivery so if any changes in the code is made then it will be pushed to GitHub and that way it will be pulled every time a change is made to the code.

B because the other 2 are in diff containers - also i dont get the point of Portainer and uptime kuma - i thought i would just be doing Docker and Grafana for monitoring etc?

Documentation:-

I have installed docker engine on the ubuntu server successfully by running sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y - these include all the docker packages to run the docker in the server.

NGINX and Docker: Next step: we are installing nginx web server inside docker container (nginx will be running inside the container). Usually you would be installing nginx server directly on the ubuntu server. Ubuntu is still the host operating system. Docker runs on Ubuntu, and Nginx runs inside Docker.
we want nginx to serve our HTTP requests & website therefore we will be forwarding traffic from out local host to nginx port.

GitHub: Uploading project code to GitHub.
Architecture of the project: Windows PC (Edit your furniture website) -> GitHub (Stores your website source code) -> Ubuntu + Docker (Builds and runs your website)
