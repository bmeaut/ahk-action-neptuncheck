#!/bin/sh -l

if [ ! -e neptun.txt ]
then
    echo "Hiba: neptun.txt nem letezik"
    echo "Error: neptun.txt does not exist"
    exit 1
fi

if grep -Eq '^[a-zA-Z0-9]{6}' neptun.txt
then
    echo "Siker: neptun.txt ok"
    echo "Pass: neptun.txt ok"
    exit 0
else
    echo "Hiba: neptun.txt nem Neptun kodot tartalmaz (6 alfanumerikus karakter es semmi mas)"
    echo "Error: neptun.txt does not contain a Neptun code (6 alphanumeric characters and nothing else)"
    exit 1
fi