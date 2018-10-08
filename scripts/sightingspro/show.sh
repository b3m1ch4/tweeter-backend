#!/bin/sh

API="https://tweeter-remote-0808.herokuapp.com"
URL_PATH="/sightings"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
