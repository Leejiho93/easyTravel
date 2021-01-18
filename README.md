## 개발 의도
해외 여행 중 현지인과 의사소통하거나 메뉴판, 안내문 등 이미지에 대한 언어 장벽을 해결해 편한 여행을 하기 위해 개발하게 되었습니다.

<br/>

## APIS 

* google vision api
* google translate api
* weather api
  
- react-native-image-crop-picker<br>
- react-native-vector-icons<br/>
- react-native-power-translator<br/>
- react-native-android-voice<br/>
- react-native-location<br/>
- react-native-tts<br/>
- react-native-splash-screen<br/>
- react-navigation<br/>
- react-navigation-stack<br/>
- axios<br/><br/>


## 메인화면
<br/>

![메인화면](https://user-images.githubusercontent.com/63515344/102211715-59e66080-3f17-11eb-8b81-87e45ba710fe.png)

<br/>
<br/>

## 실행영상
<br/>

- 이미지 번역
<br/>

image-crop-picker를 이용해 이미지를 원하는 만큼 자른 후 google vision api로 이미지에 있는 텍스트를 추출하고 google translate api로 텍스트를 원하는 언어로 번역함

 ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/63515344/102209787-a3817c00-3f14-11eb-9f02-bd30cf3962ec.gif)

기본값: 이미지 텍스트의 언어를 자동 감지 한 후 한국어로 번역

<br/>
<br/>

- 보이스 번역
<br/>

react-native-android-voice를 이용해 보이스를 텍스트로 전환 후 google translate api로 텍스트를 원하는 언어로 번역함
  
 ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/63515344/102211465-fe1bd780-3f16-11eb-9413-62d9d406820e.gif)


기본값: 보이스 언어를 자동 감지 한 후 영어로 번역

<br/>
<br/>

- 날씨 정보
<br/>

react-navigation로 현재 위도 경도를 찾은 후 weather api를 사용해 현재 날씨와 온도를 알려줌
