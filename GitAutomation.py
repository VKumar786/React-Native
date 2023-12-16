import subprocess
import os


def git_push(message, branch):
    command = f'git add . && git commit -m "{message}" && git push origin {branch}'

    try:
        subprocess.run(command, shell=True, check=True, executable='/bin/bash')
        print("Git commands executed successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error executing Git commands: {e}")


el = 23000001


message = "tut" + str(el)
branch = "main"

git_push(message, branch)

if os.name != 'nt':  # Check if the OS is not Windows
    os.system("kill -9 $$")
