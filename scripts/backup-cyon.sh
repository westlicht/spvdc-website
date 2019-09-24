#!/bin/sh

SRC=westlich@westlicht.cyon.site:./www/swiss-pvd-coating.ch
DST=backup/

mkdir -p ${DST}
rsync -avzr --delete ${SRC} ${DST}
