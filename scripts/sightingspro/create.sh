#!/bin/bash

API="https://tweeter-remote-0808.herokuapp.com"
URL_PATH="/sightings"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "sighting": {
      "entry": "'"${ENTRY}"'",
      "description": "'"${DESC}"'"
    }
  }'

echo
