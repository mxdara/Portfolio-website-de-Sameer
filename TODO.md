# Next.js Conversion Plan

## Project Overview
Convert React+Vite project to Next.js App Router

## Tasks

### Phase 1: Project Setup
- [x] 1.1 Create package.json with Next.js dependencies
- [x] 1.2 Create next.config.js configuration
- [x] 1.3 Create jsconfig.json for path aliases
- [x] 1.4 Create .gitignore for Next.js

### Phase 2: App Structure
- [x] 2.1 Create app/layout.js (Root layout with Providers)
- [x] 2.2 Create app/globals.css (Global styles)
- [x] 2.3 Create app/page.js (Main landing page)
- [x] 2.4 Create app/studio/page.js (Studio page)

### Phase 3: Component Migration
- [x] 3.1 Create app/components/Navbar.js
- [x] 3.2 Create app/components/Hero.js
- [x] 3.3 Create app/components/Who.js
- [x] 3.4 Create app/components/Works.js
- [x] 3.5 Create app/components/Contact.js
- [x] 3.6 Create app/components/WebDesign.js
- [x] 3.7 Create app/components/Development.js
- [x] 3.8 Create app/components/ProductDesign.js
- [x] 3.9 Create app/components/Publication.js
- [x] 3.10 Create app/components/SocialMedia.js
- [x] 3.11 Create app/components/Cube.js
- [x] 3.12 Create app/components/Mac.js
- [x] 3.13 Create app/components/Shoe.js
- [x] 3.14 Create app/components/Linkedin.js
- [x] 3.15 Create app/components/Aphrodite.js
- [x] 3.16 Create app/components/Atom.js
- [x] 3.17 Create app/components/Map.js

### Phase 4: Public Assets
- [ ] 4.1 Move public/img/ files
- [ ] 4.2 Move public/*.glb files
- [ ] 4.3 Move public/features.json
- [ ] 4.4 Update GLB paths in components

### Phase 5: Testing
- [ ] 5.1 Install dependencies
- [ ] 5.2 Test build
- [ ] 5.3 Test development server

## Notes
- Using App Router (Next.js 13+)
- Keeping styled-components
- Converting react-router-dom to Next.js Link
- Client components marked with 'use client'

