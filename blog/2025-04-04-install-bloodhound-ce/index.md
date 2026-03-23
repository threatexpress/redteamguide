---
title: Installing BloodHound Community Edition (CE) on Linux
authors: [joe]
tags:
  - bloodhound
  - tools
slug: install-bloodhound-ce
---

This guide provides quick installation steps for BloodHound CE using Docker on Linux systems. For comprehensive details, consult the official quickstart guide.

<!-- truncate -->

## Installation Steps

### 1. Install Docker

Ensure Docker is installed on your system, as BloodHound CE depends on Docker Compose for deployment.

Reference: https://docs.docker.com/engine/install/

### 2. Download BloodHound CLI

```bash
wget https://github.com/SpecterOps/bloodhound-cli/releases/latest/download/bloodhound-cli-linux-amd64.tar.gz
```

:::note
Substitute `amd64` with your system architecture if needed.
:::

### 3. Extract the Archive

```bash
tar -xvzf bloodhound-cli-linux-amd64.tar.gz
```

### 4. Install BloodHound CE

Navigate to the extracted binary directory and execute:

```bash
./bloodhound-cli install
```

This configures the necessary Docker containers.

### 5. Access BloodHound CE

After installation, the terminal displays:
- A randomly generated admin password
- The UI access URL, typically: `http://127.0.0.1:8080/ui/login`

:::warning
Preserve the generated password displayed in the terminal.
:::

### 6. Log In and Update Password

Access the login URL in your browser using:
- **Username:** admin
- **Password:** (generated during installation)

You'll be required to establish a new password upon initial login.

## References

- [Official Quickstart Guide](https://bloodhound.specterops.io/get-started/quickstart/community-edition-quickstart#install-bloodhound-ce)
