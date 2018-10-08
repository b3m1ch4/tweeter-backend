#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sightings"

curl "${API}${URL_PATH}" \
  --include \
  --header "Authorization: Bearer ${TOKEN}" \
  --form image=@/Users/m1ch4/wdi/projects/tweeter-backend/data/birb.jpg \
  --form entry="${ENTRY}" \
  --form description="${DESC}" \

echo
