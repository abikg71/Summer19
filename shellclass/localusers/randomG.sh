#!/bin/bash

# This script generates a list of random passwords.

# A random number as a password.
PASSWORD="${RANDOM}"
echo "A random number as a password."
echo "${PASSWORD}"

# Three random numbers together.
PASSWORD="${RANDOM}${RANDOM}${RANDOM}"
echo "Random three number as a password. "
echo "${PASSWORD}"
echo""
# Use the current date/time as the basis for the password.
PASSWORD=$(date +%s)
echo " Uses the current date/time as the basis for the password."
echo "${PASSWORD}"
echo ""
# Use nanoseconds to act as randomization.
PASSWORD=$(date +%s%N)
echo " Uses nanoseconds to act as randomization."
echo "${PASSWORD}"
echo ""
# A better password.
PASSWORD=$(date +%s%N | sha256sum | head -c32)
echo "${PASSWORD}"
echo""
# An even better password.
PASSWORD=$(date +%s%N${RANDOM}${RANDOM} | sha256sum | head -c48)
echo "${PASSWORD}"
echo ""
# Append a special character to the password.
SPECIAL_CHARACTER=$(echo '!@#$%^&*()_-+=' | fold -w1 | shuf | head -c1)
echo "${PASSWORD}${SPECIAL_CHARACTER}"
