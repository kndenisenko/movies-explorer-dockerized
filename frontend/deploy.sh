#!/bin/bash

  # scp -r ./build/* geburah@158.160.15.115:/var/www/badass.students.nomoredomains.club
  # ssh geburah@158.160.15.115 "chmod +x /var/www/badass.students.nomoredomains.club* |echo $?"
npm run build
scp -r ./build/* geburah@185.200.241.74:/var/www/badass.nomoredomains.club
ssh geburah@185.200.241.74 "chmod +x /var/www/badass.nomoredomains.club* |echo $?"