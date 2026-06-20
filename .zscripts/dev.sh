#!/bin/bash
set -e

cd /home/z/my-project

echo "[DEV] Installing dependencies..."
bun install

echo "[DEV] Generating Prisma client..."
bunx prisma generate

echo "[DEV] Building project for production..."
DATABASE_URL="file:./db/custom.db" bun run build

echo "[DEV] Starting server on port ${PORT:-3000}..."
exec bun run start
