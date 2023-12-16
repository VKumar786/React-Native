import os
import shutil

source_folder = '/home/bakru_k78/Pictures/Screenshots'
destination_folder = os.getcwd()  # Current working directory

# Prompt the user for the number of screenshots to copy
num_screenshots = 2

# Get a list of all .png files in the source folder
png_files = [file for file in os.listdir(
    source_folder) if file.endswith('.png')]

if png_files:
    # Sort files by modification time and get the latest ones based on user input
    latest_files = sorted(png_files, key=lambda f: os.path.getmtime(
        os.path.join(source_folder, f)), reverse=True)[:num_screenshots]

    for latest_file in latest_files:
        # Construct the paths for source and destination
        source_path = os.path.join(source_folder, latest_file)
        destination_path = os.path.join(destination_folder, latest_file)

        # Move the latest .png files from the source folder to the current working directory
        shutil.move(source_path, destination_path)
        print(f"File '{latest_file}' moved to the current directory.")
else:
    print("No .png files found in the specified folder.")
