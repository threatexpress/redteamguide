---
title: Installing BloodHound on Ubuntu - A Quick Reference Guide
authors: [joe]
tags:
  - bloodhound
  - tools
slug: install-bloodhound-ubuntu
---

![](./bloodhound_logo.png)

NOTE: This reference is outdated (version 4). I've learned that this blog still shows up in search engine results.

<!-- truncate -->
This post is intended as a quick reference guide to install Bloodhound on an Ubuntu system.

This is heavily based on https://popped.io/setting-up-bloodhound-on-debian-jessie/ with a few tweaks.

## Install Ubuntu

Install Ubuntu as you normally would. In this case Xubuntu 16.04 was installed in VMWare

### Optional – Install VM Tools

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install open-vm-tools open-vm-tools-desktop
reboot
```

## Install Neo4j

```
sudo apt-get install wget curl git

wget -O - https://debian.neo4j.org/neotechnology.gpg.key | sudo apt-key add -
echo 'deb http://debian.neo4j.org/repo stable/' | sudo tee /etc/apt/sources.list.d/neo4j.list
echo "deb http://httpredir.debian.org/debian jessie-backports main" | sudo tee -a /etc/apt/sources.list.d/jessie-backports.list

sudo apt-get update
sudo apt-get install openjdk-8-jdk openjdk-8-jre
sudo apt-get install neo4j
echo "dbms.active_database=graph.db" >> /etc/neo4j/neo4j.conf
echo "dbms.connector.http.address=0.0.0.0:7474" >> /etc/neo4j/neo4j.conf
echo "dbms.connector.bolt.address=0.0.0.0:7687" >> /etc/neo4j/neo4j.conf
echo "dbms.allow_format_migration=true" >> /etc/neo4j/neo4j.conf
```

## Get Bloodhound DB for neo4j

```
git clone https://github.com/adaptivethreat/BloodHound.git
cd BloodHound
mkdir /var/lib/neo4j/data/databases/graph.db
cd BloodHound/
cp -R BloodHoundExampleDB.graphdb/* /var/lib/neo4j/data/databases/graph.db
neo4j start
```

### Verify neo4j is running on 7474 and 7687

```
netstat -lantp
```

## Change neo4j password

Logon to **http://localhost:7474** with neo4j:neo4j and change the password

## Get Bloodhound binary

Download the appropriate binary from

## Run Bloodhound

```
./Bloodhound
```

Supply the user "neo4j" and your newly created password. Happy hunting!

### References:
