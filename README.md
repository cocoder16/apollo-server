# Reference

## Apollo

- tutorial: https://www.apollographql.com/tutorials/fullstack-quickstart/introduction

## Apollo Server

https://www.apollographql.com/docs/apollo-server/getting-started

- naming convention: https://www.apollographql.com/docs/apollo-server/schema/schema#naming-conventions
- query-driven schema design: https://www.apollographql.com/docs/apollo-server/schema/schema#query-driven-schema-design

```
client의 query 필요에 의해 schema가 설계된다.
query -> type 순 설게
```

- mutation design: https://www.apollographql.com/docs/apollo-server/schema/schema#designing-mutations

```
mutation response는 mutation이 수정한 data를 포함하는 것이 client 코드 효율성을 위해 좋다.
```

## TypeGraphQL

https://typegraphql.com/docs/introduction.html

**필요한 이유**

typescript + graphQL은 관리포인트가 많다. 뭐하나 수정하려면 type, interface, schema, resolver의 parameter, return type 등을 다 바꿔줘야한다.<br />
TypeGraphQL의 main idea는 진실의 소스는 오직 하나만 가진다는 것이다.

**버린 이유**

GraphQL 최신 버전과 호환이 안된다. (16버전부터 호환안됨) TypeGraphQL 마지막 릴리즈가 2020년 11월이다.<br />
2021년 10월 프리 릴리즈가 있긴한데 아직도 릴리즈가 안되고 있는걸 보면 관리가 굉장히 느린 라이브러리이다.

## 고려사항

- GraphQL 사용시 프레임워크와 서드파티 라이브러리들이 많이 필요
- 관리포인트가 많다. 변경사항이 생기면 type, interface, SDL(schema definition language), resolver을 모두 바꿔야 한다. <br />
  TypGraphQL이 대안이 될 줄 알았지만, 관리가 잘 안되고 있는 라이브러리이므로 다른 대안을 찾아야 한다.
