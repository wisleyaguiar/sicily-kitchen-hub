FROM node:22-slim AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Troca o preset do Nitro de "cloudflare" (padrão do Lovable) para "node-server",
# que gera um servidor Node comum em vez de um Cloudflare Worker.
ENV NITRO_PRESET=node-server
RUN npm run build

FROM node:22-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# O preset node-server empacota tudo (servidor SSR + assets estáticos) dentro de .output
COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
