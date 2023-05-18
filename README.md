# Random-Password-Gen
## Description

The purpose of this project was to practice JS logic, and generate a randomized password set to the user's specifications upon button press. It begins with 4 seperate arrays: one for uppercase letters, lowercase letters, special characters, and numbers. After being prompted for the length of the password (must be between 8 and 128 characters), it will prompt you if you want to select an item from each array. you MUST select at least one item, otherwise it will loop and reprompt you.

For every prompt that returns true, a random item from that array is added to the newPassword array. Additionally, all items from that array are added to a /seperate/ array to be used later to complete the length requirements. After the prompts are satisfied, a while loop occurs that generates random items from the new master array and prints them to newPassword. Finally, the array is joined into a single string and printed to the text area.

An additional planned feature would be to randomize the newPassword array prior to joining it into a string, as this would prevent the first characters of the password to match the order in which prompts were selected (see feature request in github issues)

Please note, there is a bug that shows up periodically, documented in github issues. this WILL cause your password length to be incorrect if you encounter it! Slowly answer the prompts and everything will work as planned.


## Installation

Project is live at https://mattchiaro.github.io/random-password-gen/

## Usage

Press the "Generate Password" button and you're off!

