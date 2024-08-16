import { next } from "@vercel/edge";

export const config = {
  matcher: ["/", "/:path*"],
};

export default function middleware(request) {
  // const isProduction = process.env.VERCEL_ENV === 'production';
  const authorizationHeader = request.headers.get("authorization");

  // if (!isProduction) {
  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(" ")[1];
    const [user, password] = atob(basicAuth).toString().split(":");

    if (user === process.env.USERNAME && password === process.env.PASSWORD) {
      return next();
    }
  }

  return new Response("Basic Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
  // }
}
