#!/bin/bash
if [ ! -d "mcp-omni-platform/node_modules" ]; then
  echo "Dependencies not installed. Please run 'npm install' inside mcp-omni-platform before building."
  exit 1
fi
cd mcp-omni-platform
npm run build
