FROM mcr.microsoft.com/playwright:v1.57.0-noble-amd64

WORKDIR /tests

COPY package*.json ./
RUN npm ci

COPY . .
RUN mkdir -p test-results/screenshots

CMD ["npx", "playwright", "test"]