# Training Log RSS Feed

## Todo

- 해외, 국내로 리스트를 4개로 만들기
- 리스트에 sns링크 추가하기
- 블로거 썸네일 이미지 가져오기
- 피드 last updated 추가하기
- rss 묶어서 opml 생성하기
- opml은 db에 올려두기
- 타입스크립트 리팩토링

## Endpoints

`GET /blog`

- yml 목록 데이터에서 유튜브 목록을 읽어옵니다.
- 플랫폼에 따라 rss주소를 만듭니다.
- rss주소별 피드를 뽑아서 json으로 저장합니다.

`PUT /blog`

- 기존에 있던 collection에 바뀐 부분을 업데이트합니다.

`POST /blog/feed/save/to/file`

- yml 목록 데이터에서 블로그 목록을 읽어옵니다.
- 플랫폼에 따라 rss주소를 만듭니다.
- rss주소별 피드를 뽑아서 json으로 저장합니다.

`POST /blog/feed/save/to/mongo`

- mongodb에 yml 목록 데이터를 입력합니다.

`GET /youtube`

- yml 목록 데이터에서 유튜브 목록을 읽어옵니다.
- 플랫폼에 따라 rss주소를 만듭니다.
- rss주소별 피드를 뽑아서 json으로 저장합니다.

`PUT /youtube`

- 기존에 있던 collection에 바뀐 부분을 업데이트합니다.

`POST /youtube/feed/save/to/file`

- yml 목록 데이터에서 유튜브 목록을 읽어옵니다.
- 플랫폼에 따라 rss주소를 만듭니다.
- rss주소별 피드를 뽑아서 json으로 저장합니다.

`POST /youtube/feed/save/to/mongo`

- mongodb에 yml 목록 데이터를 입력합니다.

## Summary

[![](https://res.cloudinary.com/yangeok/image/upload/v1554888938/training-log/11.jpg)](https://res.cloudinary.com/yangeok/image/upload/v1554888938/training-log/11.jpg)

[![](https://res.cloudinary.com/yangeok/image/upload/v1558403801/portfolio/screencapture-training-front-netlify-2019-05-21-10_54_21.png)](https://res.cloudinary.com/yangeok/image/upload/v1558403801/portfolio/screencapture-training-front-netlify-2019-05-21-10_54_21.png)
