Express 바탕의 Node.js의 프레임워크

cmd에서 npm i -g @nestjs/cli 를 입력해서 Nestjs CLI 설치

클래스에 기능을 추가하는 데코레이터(함수 형태) - Spring의 Annotation과 비슷한 역할

```tsx
// app.module.ts
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [AppService], //Dependency Injection이 일어나는 부분, Injectable Decorator
})
```

@Get, @Post 등 Method 경로에 :name 형태로 쿼리, 파라미터 추출 가능

@Query(’name’), @Param(’name’), @Body()

Controller의 역할은 URL과 Service의 Business 로직(함수)를 연결시켜주는 것에서 끝

validation을 위해 설치

npm i class-validator class-transformer 

```tsx
// main.ts
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // decorator가 없다면 걸러질 것
    forbidNonWhitelisted: true, // whiltelist에 걸렸다면 요청 자체를 막음
    transform: true, // controller에서 명시한 타입으로 변환
  }));
```

타입 변환(PartialType 함수 사용)을 위해 설치

npm i @nestjs/mapped-types

Entity → 데이터베이스와 매핑되는 객체, 비즈니스 로직에 사용되기도 함

DTO → 컨트롤러와 서비스간의 데이터 전달에 사용, 비즈니스 로직에 사용되지 않음

# Testing

jest → npm의 Javascript 테스팅 패키지, spec.ts 파일을 찾아서 테스트 

Unit Testing → 서비스에서 분리된 유닛을 테스트 describe(문단), it(문장) → 함수를 호출해서 원하는 값이 나오는지 테스트함.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/ede7a07b-7763-4831-ad5d-0806131219aa/ccb739c2-ec74-4760-8686-c2a9757015f9/image.png)

E2E Testing → 서비스 전체의 흐름을 처음부터 끝까지 테스트 → 요청을 통해 원하는 값이 나오는지 테스트함.

테스팅 환경과 실제 구동 환경이 다를 수 있음(main.ts의 GlobalPipe)

test:e2e