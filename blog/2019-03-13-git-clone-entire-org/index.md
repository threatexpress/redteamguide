---
title: Clone all repos
authors: [james]
tags:
  - tools
slug: git-clone-entire-org
---

![](./20180125_132744_attack.png)

This is a short form post resulting from conversations over single line cloning and/or pulling of all organizational repos.

<!-- truncate -->
In short, I once needed a quick and easy bash method for pulling all repos under an organizational tree. The following three one-liners were used (and have been used many times since). I regularly use the last to pull all repos before beginning any additions or mods to ThreatExpress.

As usual, you can find the raw script and get the latest version of tools on our GitHub repository: https://github.com/threatexpress.

---

**Clone all public repos**

```
for line in $(curl https://api.github.com/orgs/threatexpress/repos | grep -o "git@github.com:threatexpress/[^ ,\"]\+");do echo git clone $line;done
```

**Clone private repos as well**

```
for line in $(curl https://api.github.com/orgs/threatexpress/repos?access_token=<EnterTokenHere> | grep -o "git@github.com:threatexpress/[^ ,\"]\+");do git clone $line;done
```

:::note
Generate your personal access token in your github profile > Developer Settings > Personal Access Tokens
:::

---

**Pull all repos within a hierarchical folder structure**

```
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull \;
```

:::note
I store all repos within organizational folders in a designated location. Change depth to accommodate your structure
:::
