# Stayge web boilerplate

## tech stack

| Type            | LibraryName                                         |
| --------------- | --------------------------------------------------- |
| package manager | yarn                                                |
| store           | recoil                                              |
| immutable state | immer                                               |
| css library     | [tailwind](https://tailwindcss.com/docs/)           |
| datetime        | [dayjs](https://day.js.org/)                        |
| util hooks      | [react-use](https://github.com/streamich/react-use) |

## 개발 환경에서 프로그램 실행 방법

1. node_modules를 설치합니다.

   ```shell
   yarn
   ```

2. 프로그램을 개발환경으로 실행시킵니다.

   ```shell
   yarn dev
   ```

3. 브라우저에서 아래 주소를 엽니다.

   [http://localhost:3000](http://localhost:3000) 열기

### 개발 규칙

#### Commits

[conventional commits](https://www.conventionalcommits.org/ko/v1.0.0/) 룰로 커밋할 것

#### components

- 리액트 컴포넌트
- props에 전적으로 의존해야 한다
- 디자인 시스템은 해당 폴더 내부에서만 의존해야 한다.

##### 하위 구성

- common
  - 컴포넌트를 구성하는 최소단위
- complex
  - common이 n개 이상 모인, 화면보다는 작은 컴포넌트

#### containers

- 리액트 컴포넌트
- 앱 상태와 props에 의존하는 컴포넌트
  - 예) app theme와 alert state에 의존하는 Alert 컨테이너

### recoil debugging

아래 문서를 참고하며 디버깅한다

- <https://recoiljs.org/ko/docs/guides/dev-tools/>

## 배포
### 배포 방법

1. node_modules를 설치합니다.

   ```shell
   yarn
   ```

2. 프로그램을 번들링 합니다.

   ```shell
   yarn build
   ```

3. 프로그램을 릴리즈 합니다.

   ```shell
   yarn release
   ```

4. 태그를 리모트에 올립니다.

   ```shell
   git push origin --tags
   ```