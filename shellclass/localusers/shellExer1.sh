#!/bin/bash
# June 21, 19
# This is a Exerice on creating and adding a new user to the System

# Make sure the script is being executed with superuser privileges.
# Get the username (login).
read -p 'Enter the username to create: ' USER_NAME

# Get the real name (contents for the description field).
# Ask for the real name.
read -p 'Enter the name of the person who this account is for: ' REAL_NAME

# Get the password.
# Ask for the password.
read -p 'Enter the password to use for the account: ' PASSWORD

# Create the user with the password.
# Create the user.
useradd -c "${REAL_NAME}" -m ${USER_NAME}

# Check to see if the useradd command succeeded.
if [[ "${?}" -ne 0 ]]
then
  echo 'Please run as a sudo or as root'
#The id command did not execute successfully.'
  exit 1
fi
echo "Your username is ${USER_NAME}"

# Set the password.
echo ${PASSWORD} | passwd --stdin ${USER_NAME}
# Check to see if the passwd command succeeded.
# You can use a string test conditional.
USER_NAME_TO_TEST_FOR='vagrant'
if [[ "${USER_NAME}" = "${USER_NAME}" ]]
then
  echo "Your username matches ${USER_NAME}."
fi
# Force password change on first login.
# Force password change on first login.
passwd -e ${USER_NAME}
# Display the username, password, and the host where the user was created
echo "Your user name is ${USER_NAME}. "
echo "Your user password is ${PASSWORD}. "
echo 'host:'
