FROM node:22-slim

WORKDIR /app

# Install dependencies needed for Astro/Sharp (for image optimization)
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
