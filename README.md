![메인.png](https://user-images.githubusercontent.com/63515344/102211715-59e66080-3f17-11eb-8b81-87e45ba710fe.png)

**Easy Travel**은 외국인과 **의사소통**하거나 메뉴판, 안내문과 같은
이미지에 대한 **언어 장벽을 해결**에 도움을 주는 앱입니다.

### 🛠 사용 기술

- front-end: `react-native`
- apis: `google vision` `google translate` `weather`

### 🏷️ **구현 기능**

- **이미지 번역**

  vision api로 이미지의 텍스트를 추출한 후 translate api로 번역
  ![이미지번역.gif](https://user-images.githubusercontent.com/63515344/102209787-a3817c00-3f14-11eb-9f02-bd30cf3962ec.gif)

- **음성 번역**

  react-native-android-voice로 보이스를 텍스트로 전환 후 translate api로 번역
  ![음성번역 (1).gif](https://user-images.githubusercontent.com/63515344/102211465-fe1bd780-3f16-11eb-9413-62d9d406820e.gif)

- **날씨**

  사용자가 위치한 지역의 날씨를 weather api를 이용해 보여줌
  ![날씨.png](https://user-images.githubusercontent.com/63515344/149717735-45673338-bda3-431c-b64b-acd144ac93f7.png)
