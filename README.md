# Todo 애플리케이션 프로젝트

이 프로젝트는 리액트 스터디를 위한 Todo 애플리케이션 과제입니다. 각자 UI 디자인을 참고하여 자신만의 Todo 애플리케이션을 구현해 보세요.

## 1. 프로젝트 세팅

### 패키지 설치

```bash
yarn install
```

### 개발 서버 실행

```bash
yarn dev
```

### 빌드

```bash
yarn build
```

### 테스트 실행

```bash
yarn test
```

## 2. Todo 과제 설명

UI 디자인은 [이 링크](https://creatie.ai/file/153927849366846?fileOpenFrom=home&fileTileSwitch=false&page_id=M)를 참고하여 구현합니다. 각자 이 디자인을 토대로 자신만의 Todo 애플리케이션을 만들어보세요.

위 링크는 제 개인 creatie 프로젝트입니다. 과제하시기 전에 저에게 메일을 알려주시면 접근권한을 드리도록 하겠습니다.

## 3. API 명세 (MSW Mock API)

이 프로젝트는 실제 백엔드를 구현하지 않고 MSW(Mock Service Worker)를 사용하여 API를 모킹하고 있습니다. 아래는 사용 가능한 API 엔드포인트와 데이터 형식입니다.

### Todo 데이터 모델

```typescript
type TodoStatus = "notStarted" | "inProgress" | "done";

type Todo = {
  id: string;
  title: string;
  content: string;
  status: TodoStatus;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  assignee: string;
};
```

### API 엔드포인트

#### 1. Todo 목록 조회

- **URL**: `/api/todos`
- **Method**: GET
- **Query Parameters**:
  - `status`: (선택) "notStarted", "inProgress", "done" 중 하나로 필터링
  - `assignee`: (선택) 담당자 이름으로 필터링
- **응답**: Todo 객체 배열

#### 2. 단일 Todo 조회

- **URL**: `/api/todos/:id`
- **Method**: GET
- **URL Parameters**:
  - `id`: Todo ID
- **응답**: Todo 객체 또는 404 에러

#### 3. Todo 생성

- **URL**: `/api/todos`
- **Method**: POST
- **Body**:
  ```typescript
  {
    title: string;
    content: string;
    status: TodoStatus;
    startDate: string;
    endDate: string;
    assignee: string;
  }
  ```
- **응답**: 생성된 Todo 객체

#### 4. Todo 수정

- **URL**: `/api/todos/:id`
- **Method**: PUT
- **URL Parameters**:
  - `id`: Todo ID
- **Body**: 수정할 필드 (부분 업데이트 가능)
- **응답**: 수정된 Todo 객체 또는 404 에러

#### 5. Todo 삭제

- **URL**: `/api/todos/:id`
- **Method**: DELETE
- **URL Parameters**:
  - `id`: Todo ID
- **응답**: 삭제된 Todo 객체 또는 404 에러

## 4. 프로젝트 구조

프로젝트는 다음과 같은 구조로 구성됩니다:

- `src/pages`: 각 페이지 컴포넌트를 위치시킵니다.
- `src/components`: 재사용 가능한 컴포넌트들을 위치시킵니다.
- `src/mocks`: MSW를 사용한 API 모킹 파일들이 위치합니다.
- `src/types`: TypeScript 타입 정의 파일들이 위치합니다.

## 5. 시작하기

1. 저장소를 클론합니다.
2. `yarn install`로 의존성을 설치합니다.
3. `yarn dev`로 개발 서버를 실행합니다.
4. 브라우저에서 `http://localhost:5173`(또는 터미널에 표시된 URL)으로 접속합니다.
5. 자신만의 Todo 애플리케이션을 구현해보세요!

## 참고사항

- MSW는 개발 환경에서만 활성화됩니다.
- 각 API 요청에는 지연 시간이 추가되어 있어 실제 API와 유사한 경험을 제공합니다.
- 모든 데이터는 메모리에 저장되므로 페이지를 새로고침하면 초기화됩니다.
