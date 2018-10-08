#!/bin/bash

API="https://tweeter-remote-0808.herokuapp.com"
URL_PATH="/sightings"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "sighting": {
      "description": "'"${DESC}"'"
    }
  }'

echo
