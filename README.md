# Hun Jeong 포트폴리오 사이트

첨부된 디자인 레퍼런스 톤을 반영해 구성한 개인 포트폴리오 사이트입니다.

## 구성

- 메인 페이지: `app/page.tsx`
- 스타일: `app/globals.css`
- 프로필 사진: `public/profile-photo.jpg` (원본 비율 유지)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## Vercel 배포

1. GitHub 저장소를 Vercel에 연결
2. 프로젝트 루트를 `portfolio-site`로 지정
3. Build Command: `npm run build` (기본값)
4. Output: Next.js 기본 설정 사용
5. 배포 후 도메인 연결

CLI 배포:

```bash
npm i -g vercel
vercel
vercel --prod
```

## 문서 정리

기존 포트폴리오 마크다운 문서는 상위 `docs` 폴더로 정리했습니다.
