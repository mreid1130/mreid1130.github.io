## Technical Blog
#### Version Control 101
#### 9/17/14

Since starting my journey to learn how to program, one thing that's been brought up by nearly every person in the software engineering/web development industry has brought up the importance of version control.

At first the idea of version control seemed a little trivial. I thought version control was just a simple backup file of a project's work, but in reality version control offered so much more than a backup file of my code. DBC has offered a ton of great resources on why version control is so important, and I'd like to highlight a few of the reasons that really stuck out to me...

Version control allows a developer to revert to a stable version of code if a bug happens to be introduced. This is akin to an painter spilling of a bucket of paint all over their newest piece of art, and being able to "undo" that mistake and have an identical painting to the one they just spilled paint on. I really like that comparison, so get ready for a lot more impossible painter analogies!

Version control allows "branching" off the master branch of code. This allows a developer to work on adding different features without destabilizing the master branch with bugs. Once the changes are made and the branch is stable, the developer can merge this version of code with the master branch. 

Imagine the painter has a couple different ideas on what to add next to a painting, but isn't sure which idea will have a better end result. Version control would allow the painter to duplicate the painting and proceed working through both ideas and compare both complete pieces of art side by side.

Luckily for us, there is a really efficient piece of version control software for code, git. Git provides a really simple version control system that can be used through the command line. Git easily allows for updating code and tracking changes, along with a comment system so users can see which changes were made for each "commit", which is git lingo for saving your work.

When people hear Git, they often think of GitHub, I know I did, but git and Github have two very different functions. Git is a local version control system found locally on a single computer, whereas GitHub is a version control system that hosts code on the internet. Git and GitHub are related in that Git provides a really simple way to upload versions of code to GitHub, which offers developers a variety of benefits.

GitHub makes collaborating with a team a breeze. If a team is working together on a web application with multiple files, GitHub allows each member of the team to work independently on a file and merge all of these changes into one branch without overwriting each others changes. GitHub also allows you to give your code an open source license, which preserves a developers credit as the original developer of code, but allows other developers access to view and work on improvements to the original code. As someone who believes in the benefits of open sourcing, I think GitHub is an awesome tool that fosters creativity, innovation, and learning in the software development community!


