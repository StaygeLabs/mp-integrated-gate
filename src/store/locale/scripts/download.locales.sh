#!/usr/bin/env bash

script_dir=$(cd "$(dirname "${0}")" && pwd)
binary_dir=$(dirname ${script_dir})/bin

locale_file="rtc_locale_script"
locale_file_google="https://docs.google.com/spreadsheets/d/e/2PACX-1vTqwCaUOHSQYOfle4o31-kp39ojgexD4Ld5HiRkAmBT_HbRgN2QVgDx-DkUzm8r-8UkJ2F2PhdlbsHQ/pub?gid=0&single=true&output=csv"

mkdir ${script_dir}/csv
cd ${script_dir}

echo "downloading csv from google :: ${locale_file_google}"
wget -O csv/${locale_file}.csv -q ${locale_file_google} || exit 1
