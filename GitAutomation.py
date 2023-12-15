import subprocess


def git_push(message, branch):
    command = f'git add . && git commit -m "{message}" && git push origin {branch}'

    try:
        subprocess.run(command, shell=True, check=True, executable='/bin/bash')
        print("Git commands executed successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error executing Git commands: {e}")


# Replace 'Your message here' and 'your-branch-name' with your desired message and branch name
el = 20001
message = "tut" + str(el)
branch = "main"

git_push(message, branch)
