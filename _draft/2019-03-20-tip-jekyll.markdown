---
layout: post
title:  "[알쓸팁]jekyll 블로그 새 글쓰기 shell script"
subtitle:   "jekyll 블로그 새 글쓰기 shell script"
categories: tip
tags: shell script linux

---

언제까지 할지는 모르겠지만 기록용 블로그를 시작,

예전에 클론 받아둔 jekyll theme를 사용 해보려고하는데

( 출처 : <https://github.com/isme2n/isme2n.github.io> )

보통 새 글을 쓸때는 _drafts 폴더 안에 파일을 만들고 작성을 하다가 다 쓰고나면 옮기는 식으로 사용하는 것 같았다.

뭔가 매번 finder혹은 vscode로 해당 위치를 키고서 파일을 만드는 것이 귀찮을꺼 같다고 생각되었음

그래서 그냥 함수를 하나 만들고 .zshrc에 넣어둔 뒤 사용해야겠다고 생각했다.

```shell
alias goblog="cd /your_repository_path"

function blog(){
  goblog;
  if [ -z "$2" ]; then
    echo "파라미터 넣어주세요"
  else
    local file_path="_draft/$(date "+%Y-%m-%d")-$1-$2.markdown"
    echo $file_path
    if [ -f $file_path ]; then
      echo "이미 파일이 존재"
    else
      cp _draft/sample.markdown $file_path;
    fi
      open $file_path;
  fi
};


```



별건없고 그냥 jekyll 형식에 맞춰서 



