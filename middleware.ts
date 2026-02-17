import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middleware = createNextAuthMiddleware({
    users: [
        {
            name: "demo",
            password: "demo",
        }
    ]
});

export const config = {
    matcher: ["/(.*)"],
};