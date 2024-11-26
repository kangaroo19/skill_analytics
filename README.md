## commit message

- FEAT: 새로운 기능을 추가, 또는 작업

- FIX: 코드 내 버그를 수정

- DOCS: 코드에 영향을 주지 않는 문서 작업(예: README 수정)

- STYLE: CSS 작업, 퍼블리싱

- REFACTOR: 버그 수정이나 기능 추가가 아닌, 코드 구조나 로직을 개선할 때 사용

- TEST: 테스트 코드를 추가하거나 기존 테스트를 수정할 때 사용

- CHORE: 빌드 작업, 패키지 설정 등 코드와 직접 연관되지 않은 작업을 할 때 사용

## 폴더 구조

src 폴더: root 디렉토리

- assets
- components: 앱 전체에서 공유되는 모든 컴포넌트
- hooks: 앱 전체에서 공유되는 모든 hook
- config: 앱 설정 파일
- features: 앱의 features를 포함하는 폴더. 이 폴더 안에 대부분의 앱 코드가 저장됨
- lib: 앱에서 사용되는 써드 파티 라이브러리 설정 파일
- services: services를 담는 폴더
- stores: 전역 state stores
- test: mocks, helpers, utilities, configurations를 위한 테스트 코드
- types: 공유되는 타입스크립트 타입
- utils: 공유되는 utility 함수들 (애플리케이션 전반에 걸쳐 재사용될 수 있는 범용적인 함수나 유틸리티를 제공한다.)
- providers: Context 주입을 위해 사용되는 Provider들

현재는 참고용 개발해가면서 수정할 예정

https://velog.io/@koreanthuglife/%EA%B7%B8%EB%8C%80-Next.js-14-%ED%8F%B4%EB%8D%94-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%EB%A5%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%A0%EA%B2%83%EC%9D%B8%EA%B0%80-feat.-medium