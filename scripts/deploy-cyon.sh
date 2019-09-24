#!/bin/sh

SRC=dist/
DST=westlich@westlicht.cyon.site:./www/swiss-pvd-coating.ch

rsync -avzr --delete ${SRC} ${DST}
