import subprocess


def git_push(message, branch):
    command = f'git add . && git commit -m "{message}" && git push origin {branch}'

    try:
        subprocess.run(command, shell=True, check=True, executable='/bin/bash')
        print("Git commands executed successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error executing Git commands: {e}")


el = 30


message = "tut" + str(el)
branch = "main"

git_push(message, branch)
