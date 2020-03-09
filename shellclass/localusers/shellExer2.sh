#!/bin/bash
#Exerice
# 07/18/19

#The goal of this exercise is to create a shell script that adds users
# to the same Linux system as the script is executed on.
#specify the account name and account comments on the command
# line instead of being prompted
# Generate new password for the new account
#
#echo 'Hello on the terminal.'
# Make sure the script is being excuted by superuser privillages

# Get the name of account user
read -p 'Enter the Account User Name: ' REAL_NAME

# Get the user name of account user
read -p 'Enter the User Name: ' USER_NAME
useradd -c "${COMMENT}" -m ${USER_NAME} # copied

# Get the  passwd for the user /RANDOM
PASSWORD=$({RANDOM} | sha256sum | head -c48)
# read -p 'Enter the User Name: ' PASSWORD
# Check to see if the useradd command succeeded.
if [[ "${?}" -ne 0 ]] # == if [["${UID} -ne 0"]]
then
  echo 'Please run as a sudo or as root'
#The id command did not execute successfully.'
  exit 1
fi

# if they don't supply at least one argument, then give them help
if [[ "${#}" -lt 1]]
   then
   echo "Usage ${0} USER_NAME [COMMENT] ..." # copied
   exit 1
 fi


echo "Your name is ${REAL_NAME}"
echo "Your username is ${USER_NAME}"
echo "Your password is ${PASSWORD}"
echo "host: "
