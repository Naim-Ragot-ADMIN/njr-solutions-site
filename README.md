# NJR Solutions

Site vitrine premium développé avec Next.js, TypeScript et Tailwind CSS pour NJR Solutions, service local à domicile spécialisé dans les solutions utiles pour la maison, le jardin et l'informatique du quotidien.

Services présentés :

- installation de robot tondeuse
- optimisation WiFi
- sécurité connectée simple
- assistance informatique à domicile
- PC sur mesure / prêt à l'emploi

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Scripts utiles

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run deploy:pages
```

## Déploiement Cloudflare Pages

Le projet est configuré pour un export statique Next.js (`out/`) compatible Cloudflare Pages.

1. Build de production :

```bash
npm run build
```

2. Déploiement direct vers Cloudflare Pages :

```bash
npm run deploy:pages
```

Si vous êtes dans un environnement non interactif, définissez un token API Cloudflare avant la commande :

```bash
$env:CLOUDFLARE_API_TOKEN="votre_token"
npm run deploy:pages
```

Dossier publié : `out/`

## Structure

```text
app/                Pages App Router, metadata, sitemap et robots
components/         Header, footer, cartes services, formulaire et composants réutilisables
lib/                Données métier, SEO et validation du formulaire
public/             Assets statiques
```

## Points d'édition rapides

- Coordonnées, zones desservies, services et textes globaux : `lib/site-data.ts`
- Validation et structure du formulaire : `lib/contact-form.ts`
- Connexion future du formulaire à un backend ou CRM : `components/contact-form.tsx`
- Thème visuel, boutons et styles partagés : `app/globals.css`

## SEO local intégré

Le projet inclut :

- metadata par page
- `robots.ts`
- `sitemap.ts`
- données structurées `LocalBusiness`

## Formulaire de contact

Le formulaire est validé côté front et simule actuellement l'envoi. Pour brancher un envoi réel :

1. créez une route API Next.js ou un webhook externe
2. remplacez la promesse simulée dans `components/contact-form.tsx`
3. ajoutez ensuite votre logique d'envoi email, CRM ou stockage

## Vérification conseillée avant mise en production

- compléter les mentions légales
- confirmer le nom commercial, l'email et le domaine final dans `lib/site-data.ts`
- brancher l'envoi réel du formulaire
- ajuster les visuels et photos si vous souhaitez utiliser vos propres images métier
