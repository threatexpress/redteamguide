---
title: "Operator Log"
date: 2020-01-21
position: 2
description: >
  Operator Log Template
---
import Icon from "@material-ui/core/Icon";

## Example Operator Log

This operator log example shows the type of detail needed to describe an action taken by a red team operator.

|Start          |End            |Source IP  |Destination IP|Destination Port|Destination System|Pivot IP |Pivot Port|URL|Tool/App|Command                                      |Description                                                   |Output        |Result                  |System Modification|Comments                             |Operator Name|
|---------------|---------------|-----------|--------------|----------------|------------------|---------|----------|---|--------|---------------------------------------------|--------------------------------------------------------------|--------------|------------------------|-------------------|-------------------------------------|-------------|
|20161128_151323|20161128_151341|10.10.10.10|192.168.1.12  |80              |pxh1              |10.10.1.1|80>1480   |NA |nmap    |proxychains nmap -sT -Pn -n -p80 192.168.1.12|Test ability for foothold to communicate with internal  server|Ports: 80/open|Successful communication|NA                 |Access to target server via foothold1|Joe Snuffy   |

## Download Templates

[<Icon>file_download</Icon> Operator Log (xlsx)](/templates/operator_log.xlsx)


[<Icon>file_download</Icon> Operator Log (csv)](/templates/operator_log.csv)

