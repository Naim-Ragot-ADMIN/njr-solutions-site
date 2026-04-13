# Déploiement Cloudflare Pages - NJR Solutions

## 1) Préparer le build statique

```bash
npm install
npm run build
```

Le site statique est généré dans `out/`.

## 2) Déployer en direct (Wrangler)

```bash
npm run deploy:pages
```

Ce script publie `out/` sur le projet Cloudflare Pages `njrsolutions`.

Si vous êtes dans un terminal non interactif :

```powershell
$env:CLOUDFLARE_API_TOKEN="votre_token_cloudflare"
npm run deploy:pages
```

## 3) Lier le domaine personnalisé

Dans Cloudflare Dashboard :

1. `Workers & Pages` → Projet `njrsolutions` → `Custom domains`
2. Ajouter `njrsolutions.fr`
3. Ajouter `www.njrsolutions.fr`
4. Définir la redirection `www` → racine (`https://njrsolutions.fr`) via `Bulk Redirects` ou `Rules > Redirect Rules`

## 4) Vérifications finales

- `https://njrsolutions.fr` charge bien le nouveau site.
- `https://www.njrsolutions.fr` redirige vers `https://njrsolutions.fr`.
- `https://njrsolutions.fr/robots.txt` et `/sitemap.xml` sont accessibles.
- `https://njrsolutions.fr/nos-produits` redirige vers `/boutique` (via `_redirects`).
