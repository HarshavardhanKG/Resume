Drop these files here:

1. resume.pdf        — your current resume (linked from hero, navbar, /resume page)
2. og-image.png      — 1200×630 social link preview (Twitter/LinkedIn/iMessage card)
3. favicon.ico       — browser tab icon (32×32 minimum)
4. avatar.png        — OPTIONAL. Square portrait or stylized bust. To wire up:
                        edit src/components/ui/ParallaxAvatar.tsx and swap
                        the inline <svg>...</svg> for:
                        <Image src="/avatar.png" alt={profile.name} width={420} height={420} priority />

Until you add resume.pdf, the hero CTA and /resume page will 404 the PDF (but the rest of the site works fine).
