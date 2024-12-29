# Learn to use Dotenv Vault in Next.js

This is a simple example of how to use dotenv vault to manage environment variables in a Next.js project.

## Getting Started

First, install the dotenv package

```bash
npm install dotenv --save
```

## Logging in to Dotenv Vault

```bash
npx dotenv-vault@latest login
```

## Creating a New Vault

```bash
npx dotenv-vault@latest new
```

## Managing Your Vault

### Pushing the vault to the cloud

```bash
npx dotenv-vault@latest push
```

### Pulling the vault from the cloud

```bash
npx dotenv-vault@latest pull
```

## Production Environment

### Pushing to the production vault

1. First, edit the `.env.production` file with your production values
2. Then push to the production vault:

```bash
npx dotenv-vault@latest push production
```

### Pulling from the production vault

```bash
npx dotenv-vault@latest pull production
```

## Configuration

### Setting scripts in package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "node -r dotenv/config ./node_modules/.bin/next dev",
    "build": "DOTENV_CONFIG_PATH=.env.production node -r dotenv/config ./node_modules/.bin/next build",
    "start": "DOTENV_CONFIG_PATH=.env.production node -r dotenv/config ./node_modules/.bin/next start"
  }
}
```
