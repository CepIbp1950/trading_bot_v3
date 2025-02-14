#!/bin/bash

# Function to get the current Git branch
get_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

# Function to check for specific file types
check_file_types() {
    local files=""
    [[ $(find . -maxdepth 1 -name "*.sol" | wc -l) -gt 0 ]] && files+="Sol "
    [[ $(find . -maxdepth 1 -name "*.js" | wc -l) -gt 0 ]] && files+="JS "
    [[ $(find . -maxdepth 1 -name "*.json" | wc -l) -gt 0 ]] && files+="Json "
    echo $files
}

# Set the prompt
set_prompt() {
    local folder=$(basename "$PWD")
    local branch=$(get_git_branch)
    local files=$(check_file_types)
    PS1="\[\e[1;32m\]$folder\[\e[0m\]\[\e[1;36m\]$branch\[\e[0m\] \[\e[1;33m\]$files\[\e[0m\]$ "
}

# Set the title
set_title() {
    echo -ne "\033]0;$(basename "$PWD")\007"
}

# Set the prompt and title before each command
PROMPT_COMMAND='set_prompt; set_title'
