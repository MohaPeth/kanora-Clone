# Kanora

Site vitrine de **Kanora**, une entreprise sociale sénégalaise basée à Dakar qui forme, encadre et met en relation des familles avec des **KaNora Ladies** vérifiées pour le ménage, la cuisine et la garde d'enfants.

Construit avec [Next.js](https://nextjs.org) (App Router) et [Tailwind CSS](https://tailwindcss.com).

## Stack technique

- **Next.js 15** (App Router, Turbopack)
- **React 18** + TypeScript
- **Tailwind CSS** avec palette de marque Kanora (orange `#D94E1A` + neutres chauds)
- **next/font** (Fraunces pour les titres, Inter pour le corps de texte, auto-hébergées)
- **lucide-react** pour les icônes
- **Biome** + **ESLint** pour le lint/format

## Démarrage

```bash
pnpm install
pnpm dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

Autres scripts :

```bash
pnpm build   # build de production
pnpm start   # sert le build de production
pnpm lint    # vérification TypeScript + ESLint
pnpm format  # formatage avec Biome
```

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx       # layout racine, fonts, métadonnées
│   ├── page.tsx         # assemblage des sections de la page d'accueil
│   ├── icon.tsx          # favicon généré (monogramme "K")
│   └── globals.css      # variables de couleur, styles de base, animations
├── components/
│   ├── Header.tsx        # navigation + menu mobile
│   ├── Hero.tsx           # section d'accueil
│   ├── CategorySearch.tsx # présentation des 3 services (ménage, cuisine, garde d'enfants)
│   ├── Membership.tsx     # carrousel "Comment ça marche" + bandeau de chiffres clés
│   ├── FreeSearch.tsx     # argumentaire vs. bouche à oreille
│   ├── Comparison.tsx     # tableau comparatif Kanora vs. informel
│   ├── PricingSimulator.tsx # simulateur de tarifs interactif (FCFA)
│   ├── Community.tsx      # témoignages et indicateurs de confiance
│   ├── CTA.tsx             # appel à l'action final
│   ├── Footer.tsx          # pied de page (zones desservies, liens, mentions légales)
│   └── Logo.tsx            # logo et monogramme de marque
├── hooks/
│   └── useReveal.ts        # animations de révélation au scroll
└── lib/
    └── utils.ts             # helper de fusion de classes Tailwind (cn)
```

## Charte graphique

- **Couleur primaire** : `#D94E1A` (orange)
- **Neutres** : encre `#241712`, crème `#F6F0EA` / `#FAF6F1`
- **Typographies** : Fraunces (titres), Inter (texte courant)
