export const config = {
  matcher: ["/(.*)"], // すべてのパスに対してミドルウェアを適用
};

export default function middleware(request) {
  const authorizationHeader = request.headers.get("authorization");

  // 環境変数からユーザー名とパスワードを取得
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  if (authorizationHeader) {
    const [scheme, encodedCredentials] = authorizationHeader.split(" ");
    if (scheme === "Basic") {
      const [providedUsername, providedPassword] =
        atob(encodedCredentials).split(":");

      // 認証チェック
      if (providedUsername === username && providedPassword === password) {
        return new Response(null, { status: 200 });
      }
    }
  }

  // 認証が失敗した場合、401エラーを返す
  return new Response("Basic Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
