// Creating Skills list
var skills = ["JavaScript", "HTML", "CSS", "DOM","AJAX", "JSON"]; // technical skills
const skillsSection = document.getElementById('skills'); // selecting the section with id skills
const skillsList = skillsSection.querySelector('ul');

// Creating an array of skils
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};


// Email form handeling
const messageForm = document.getElementsByName('leaveMessege')[0];
messageForm.addEventListener('submit', (event) =>{
    event.preventDefault(); 
   // grabing data from the form
    const usersName = event.target.userName.value;
    const usersEmail = event.target.userEmail.value;
    const userMessage = event.target.userMessage.value;

    console.log(usersName, usersEmail, userMessage);

    // Selection for the Messages List
    const messageSection = document.getElementById('message');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    
    // Output on the page the user's message
    newMessage.innerHTML =`<a href="mailto:${usersEmail}">${usersName}: </a> wrote:  <span>${userMessage}</span> `
    
    // Remove button creation and handling
    const removeButton = document.createElement('button')
    removeButton.innerHTML = 'remove';
    removeButton.type = 'button';

    // Clicking the Remove button reboves the record from the array of messages 
    removeButton.addEventListener('click', (event) => {
        //messageList.removeChild(newMessage);
        const entry = removeButton.parentNode;
        entry.remove(); 
     });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});

// Adding progects from github

// Create a new instance of XMLHttpRequest to make a request, configuring it and sending the configuration 
//var githubRequest = new XMLHttpRequest();
//githubRequest.open("GET", "https://api.github.com/users/annaUniversal/repos");
//githubRequest.send();

// Adding an event listener to the githubRequest object for the 'load' event
function getListOfRepos(repositories){
    //githubRequest.addEventListener('load', (e) => {
        //var repositories = JSON.parse(githubRequest.response);
        console.log(repositories);

        // Grabbing 'projects' section from the DOM and insering them in the list
        var projectSection = document.getElementById('projects');
        var projectList = projectSection.querySelector('ul');

        // Creation list of the available reposetories
        for (var i = 0; i < repositories.length; i += 1){
            var project = document.createElement('li');
            // Setting the innerHTML of the list item to display repository name (as a link) and creation year        
            project.innerHTML  = `<a href = "https://github.com/${repositories[i].full_name}"> ${repositories[i].name}</a>
            Created ${repositories[i].created_at.slice(0, 4)}`;
        
            // Appending the created list item to the project list
            projectList.appendChild(project);
        
        }      
    //});
};

//Checking if response is resolved or rejected.

// used promisses for checking
/*function checkStatus(response) {
    if(response.ok){
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
*/

function checkStatus(response){
    if (response.ok){
        return response.json()
    } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
}

fetch("https://api.github.com/users/annaUniversal/repos")
    .then(checkStatus)
    //.then(response => response.json())
    .then(getListOfRepos)
    .catch(error => {
        console.error("There was an error fetching data:", error);
    });

   
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function bMenu() {
    var listMenu = document.getElementById("myLinks");
    if (listMenu.style.display === "block") {
      listMenu.style.display = "none";
    } else {
      listMenu.style.display = "block";
    }
  } 

  
// Adding copyright in the footer
const today = new Date();
const thisYear = today.getFullYear();

const containerF = document.querySelector('#containerF');
const footerContent = document.createElement('p');
const textC = `<table class = "rtd">
                    <tr>
                        <td><small>&#169; Anna Gerhardt ${thisYear}</small></td>
                        <td>
                            <a href="https://github.com/annaUniversal" target="_blank" title="GitHub" rel="noopener noreferrer">
                                <img src="/img/github1.png" alt="Link to Anna's github" title="Github">
                            </a>
                            <a href="https://www.linkedin.com/in/annager" target="_blank" title="LinkedIn" rel="noopener noreferrer">
                                <img src="/img/linkedin.png" alt="Link to Anna's linkedin" title="linkedin">
                            </a>
                            <a href="mailto:anna.universal@yahoo.com?subject=Connection%20from%20portfolio">
                                <img src="/img/mail.png"  alt="Send a email to Anna" title="Email">
                            </a>
                        </td>
                    </tr>
                </table>`;
footerContent.innerHTML = textC;
containerF.appendChild(footerContent);