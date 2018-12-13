#!/bin/bash

API="http://localhost:4741"
URL_PATH="/species"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "specie": {
      "englishName": "'"${ENTRY}"'"
    }
  }'

echo
