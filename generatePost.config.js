const fs = require('fs');
const fullNow = new Date().toISOString();
const now = fullNow.substr(0, 10);
const POST = `---
title: XXXXXXXXXXXXX
description: XXXXXXXX...
author: Alvaro
date: '${now}'
modified_date: '${now}'
image: /assets/images/posts/random-img.jpg
tags:
  - XXXXXXXXXXX
---   






______

> XXXXXXXXXXXXXXXX  
`;

const POSTname = `${fullNow}`;

fs.writeFileSync(`./_posts/${POSTname}.md`, POST);
console.log('\n\nPost Criado!\n\n');
