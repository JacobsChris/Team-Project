# TEAM APP NAME HERE

## WHAT IS
### Brief:

A Single Page Application (SPA) to connect to a database and search for persons from given information.
By entering search parameters into the webpage, a search query will be sent to a secure remote cloud based database.
Example searches are finding the full details of a person, their transaction records, call history, and vehicle locations. 

### How use:

By navigating to the URL, do the search stuff.


## HOW DEPLOY

### In brief:
Two compute engines are configured on Google Cloud Platform (GCP) such that one runs the back-end of the application and the other runs the front end.  
They are set to update the programs daily by checking github for the latest version of the application, and upgrading if there is a newer version available on github.
 
### In detail:
Assumptions and prerequisites:
* You have or can make a Google account
* You have or can make a GCP account
* You can make a project on GCP
* You have data to load into the database in CSV form
* You can make and manage a database once connected to it.
* You can identify the IP of an instance
* You can change which IP an application sends requests to
 
#### 1. Have database on GCP:
1.a  Open the navigation menu in your project on GCP.
1.b  Navigate to SQL.
1.c  Click the create instance button and then choose MySQL.
1.d  Name your database instance, assign a password, and state the location of the instance and version of the instance.  You can also specific the resources allocated to the database.  Click create.
1.e  You now have a database instance.  Select the instance you just create and scroll down to the "Connect to this instance" panel.
1.f  Connect to the instance using Cloud Shell, or your database manager of choice using the public IP address.
1.g  Now that you have connected to the database, create the appropriate tables.
1.h  Your database is now ready to have data imported into it.
1.i  Using the search bar in GCP, search for bucket. Select storage bucket.
1.j  Click create bucket and then follow the wizard.  Once you have created the bucket, upload the CSV files into this bucket.  By default, only you can access your bucket.
1.k  Once you have imported the CSV files into your bucket, return to your SQL instance.  Click the import button.
1.l  Choose the CSV file from your bucket as the source to import from. Specify that it is a CSV file.  Choose which database and which table to add the CSV file to.
1.m  Repeat this process for all required CSV files.  When this is finished, your database is fully setup and finished.

#### 2. Create at least two GCP compute instance
2.a  Open the navigation menu in your project on GCP.
2.b  Navigate to Compute Engine, from there select VM instances.
2.c  Click the create instance button.
2.d  You can assign your instance a name and resources.  I called mine Back-End and Front-End, used Ubuntu as my boot disk and left the resources as default.
2.c  Allow the appropriate traffic in the firewall settings.
2.d  You have now created a compute engine.  

#### 3.  Configure the instances.
3.a  Select this instance and connect to it by clicking the SSH button.  This will open a new browser window that connects to your compute instance.
3.b  You now need to install both git and node onto this instance.  
3.c  Once git is installed, run the command:
git clone -b back-end-dev https://github.com/JacobsChris/Team-Project
This will create a folder that contains the back-end-dev branch of this git repo.
3.d  Now the updating and running of the application must be automated.  Create a script containing the following commands:
#!/bin/bash
cd /home/[YourAccountNameHere]/Team-Project
git pull
npm start
3.e  You must now configure this to run automatically.  Execute the following commands:
  sudo chown root ScriptNameHere.sh
  sudo chmod 755 ScriptNameHere.sh
  cd /etc
You will then need to edit a file with:
  nano rc.local
And add the following to it: 
  #!/bin/bash
  home/ubuntu/startupscript.sh
Then run the follow commands:
  sudo chmod 755 rc.local
  sudo systemctl enable rc-local
  sudo systemctl start rc-local

3.f  You now have the back-end setup and configured.  The front-end can be set up as an image of this.
3.g  To do this, return to your back-end instance and click the create machine image.  Give it a name, the rest can be left as default.
3.h  Create a new compute engine from this image and then connect to it.
3.i  Navigate to the git folder, it should be called Team-Project in the home directory.  Change its branch to front-end-dev by executing the following commands:
git fetch
git checkout front-end-dev
git branch -d back-end-dev
3.j  You now have both engines set up and configured.  They now need to communicate.  
In the front-end application you will need to point it towards the back-end IP.
In the back-end application you will need to point it towards the database.  
 

##  How it works
### Major Technologies involved:
SQL:
* A SQL database allows the different data tables to be linked together.  It isn't the fastest database available, however; but it is long lasting.  

Google Cloud Platform (GCP):
* GCP hosts the finished product and its database.  
* The database is secured by GCP services and can only be accessed by whitelisted IPs that have the appropriate security certificates.

Firebase:
* A specific service offered by GCP that hosts the front- and back-ends of the app

Node.JS and Express:
*How the back-end works

React:
* how the front-end works

Jest, Chai, Mocha:
* Provides testing functionality

BCrypt and Passport:
* Security stuff, ask Harris

Morgan and Winston:
*Logging stuff, ask someone else

For a full list of all dependencies, please see the package.json.

### Architecture
fancypicture

## FAQ YOU

### Q It says I'm not authorised when i try to login!
Answer: You have either forgotten your login credentials or do not hold valid login credentials.  
In either case, contact the product owner to see if you are supposed to have access to this product.

### Q How do I see the logs of who has access, or tried to access, the data?
Answer: Ask Harris

# _*TODO:  FILL THIS STUFF IN*_

