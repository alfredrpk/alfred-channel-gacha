#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}"

if [[ -f ".env" ]]; then
  set -a
  # shellcheck disable=SC1091
  source ".env"
  set +a
fi

if [[ -z "${SPREADSHEET_ID:-}" ]]; then
  echo "Error: SPREADSHEET_ID is not set in environment or .env" >&2
  exit 1
fi

mkdir -p sheets

# Tab name -> GID mapping in the Google Sheet
# (Note: the third tab in the spreadsheet is named "0star")
SHEETS=(
  "5star:0"
  "4star:1859870094"
  "0star:1886139545"
)

for entry in "${SHEETS[@]}"; do
  sheet="${entry%%:*}"
  gid="${entry##*:}"
  out_file="sheets/${sheet}.csv"

  if [[ -n "${GCLI_ACCESS_TOKEN:-}" ]] && command -v gsheets >/dev/null 2>&1; then
    gsheets readonly export "${SPREADSHEET_ID}" "${out_file}" --format csv --sheet "${sheet}"
  else
    curl -fsSL "https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}" -o "${out_file}"
    echo "Exported sheet \"${sheet}\" to ${out_file}"
  fi
done
