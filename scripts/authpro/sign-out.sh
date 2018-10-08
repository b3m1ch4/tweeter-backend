#!/bin/bash

API="https://tweeter-remote-0808.herokuapp.com"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
