#!/usr/bin/env bash

read -p "Enter commit message: " COMMIT_MESSAGE
npm run build && git add . && git commit -m "$COMMIT_MESSAGE" && git push origin main