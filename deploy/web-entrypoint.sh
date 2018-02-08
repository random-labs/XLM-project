#!/bin/bash

echo "[WEB] Starting xlmWeb container!"

su -u root -c "npm run start"

# Keep container running in foreground
tail -f /dev/null