#!/bin/sh

SRC=dist/
DST=freak@belele.inthemill.ch:/var/www/swiss-pvd-coating.ch/beta

rsync -avzr --delete ${SRC} ${DST}
