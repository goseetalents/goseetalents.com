#!/bin/bash

git pull
nanoc
sudo rm -rf /www/test.goseetalents.com
sudo mkdir /www/test.goseetalents.com
sudo cp -r output/* /www/test.goseetalents.com

