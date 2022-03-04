/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

/*
Git Defenition: Software that allows you to track your code through many different files. The tracking is done by taking 'screenshots' of your desired files
GitHub: A website that is able to translate and store your 'screenshots' into normal code
Git Init: initializes a git repository in whatever directory you are in
Git Clone: lets you copy an existing repo to potentially a new directory
Git status: gives you an update on what git is doing (tracking what files and other useful info)
Git add: allows user to choose what files to be tracked within desired directory
Git add all : git add .
Git commit def: step to actually create 'screenshot' as mentioned above, -m allows you to have a message
Git commit code w/ message: git commit -m 'initial commit'
Git push: Sends desired commit to remote repo (in our case usually github)
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/
let gitDefinition = "Software that allows you to track your code through many different files. The tracking is done by taking 'screenshots' of your desired files";
console.log("Git Defenition: " + gitDefinition);

// Git Defenition: Software that allows you to track your code through many different files. the tracking is done by taking screenshots of your desired files

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/
let gitHubDefinition = "A website that is able to translate and store your 'screenshots' into normal code";
console.log("GitHub: " + gitHubDefinition);

// GitHub: A website that is able to translate and store your 'screenshots' into normal code

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/
let gitInitDefinition = "initializes a git repository in whatever directory you are in";
console.log("Git Init: " + gitInitDefinition);

// Git Init: initializes a git repository in wherever directory you are in

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = "lets you copy an existing repo to potentially a new directory";
console.log("Git Clone: " + gitCloneDefinition);

// Git Clone: lets you copy an existing repo to potentially a new directory

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/
let gitStatusDefinition = "gives you an update on what git is doing (tracking what files and other useful info)";
console.log("Git status: " + gitStatusDefinition);

// Git status: gives you an update on what git is doing (tracking what files)

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/
let gitAddDefinition = "allows user to choose what files to be tracked within desired (current) directory";
let gitAddCode = "git add .";
console.log("Git add: " + gitAddDefinition);
console.log("Git add all : " + gitAddCode);
/*
Git add: allows user to choose what files to be tracked within desired directory
Git add all: git add .
*/

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = "step to actually create 'screenshot' as mentioned above, -m allows you to have a message";
let gitCommitCode = "git commit -m 'initial commit'";

console.log("Git commit def: " + gitCommitDefinition);
console.log("Git commit code w/ message: " + gitCommitCode);



//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = "Sends desired commit to remote repo (in our case usually github)";
console.log("Git push: " + gitPushDefinition);