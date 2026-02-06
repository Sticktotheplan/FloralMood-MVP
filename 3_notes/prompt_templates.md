# Prompt Templates - FloralMood Prestations

**Version:** 1.0
**Date:** 6 février 2026

Ce document contient les templates de prompts pour chaque type de prestation. Ces templates servent de base au Prompt Generator Agent qui les personnalise avec le Portfolio Profile et le Client Brief.

---

## 📋 STRUCTURE GÉNÉRALE D'UN TEMPLATE

Chaque template inclut:
- **Base Structure:** Format général du prompt
- **Variables:** Éléments à injecter (flower ratios, colors, style)
- **Prestation-Specific Details:** Détails propres au type d'arrangement
- **Example Output:** Exemple de prompt généré

**Format Variables:**
- `{FLOWER_1_PERCENTAGE}` - Ratio de la fleur principale (ex: 35%)
- `{FLOWER_1_NAME}` - Nom de la fleur (ex: garden roses)
- `{FLOWER_1_COLOR}` - Couleur (ex: blush pink)
- `{FLOWER_1_PLACEMENT}` - Placement (ex: positioned asymmetrically left-heavy)
- `{STYLE}` - Style arrangement (ex: organic_asymmetric → loose organic)
- `{SEASON}` - Saison (spring/summer/autumn/winter)
- `{CAMERA_SPEC}` - Spécification caméra (ex: Nikon D850 natural bokeh)
- `{LIGHTING}` - Description éclairage (ex: soft afternoon sunlight)

---

## 1. CEREMONY ARCH - FULL COVERAGE

### Template

```
Real photograph from {LOCATION} wedding ceremony, {ARCH_STRUCTURE} decorated with {STYLE} floral arrangement, composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} {FLOWER_1_PLACEMENT}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} {FLOWER_2_PLACEMENT}, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} {FOLIAGE_PLACEMENT}, {ACCENT_PERCENTAGE}% {ACCENT_FLOWER} {ACCENT_PLACEMENT}, {DENSITY_DESCRIPTION} arrangement with {GAP_DESCRIPTION}, {SEASON} {LOCATION} setting, {LIGHTING}, shot during ceremony setup, {CAMERA_SPEC}, {FILM_AESTHETIC}, candid documentary style

NEGATIVE: no CGI, no 3D render, no perfect symmetry, no oversaturated colors, no AI generated look, no studio lighting, no flawless arrangement, no {SEASONAL_EXCLUSIONS}, no text, no watermark
```

### Variables Spécifiques

- `{LOCATION}`: outdoor garden / indoor chapel / beach / vineyard / barn
- `{ARCH_STRUCTURE}`: natural wooden circular arch / metal geometric arbor / natural branch structure / rectangular wooden arbor
- `{DENSITY_DESCRIPTION}`: airy / lush / moderate
- `{GAP_DESCRIPTION}`: intentional gaps showing structure / minimal gaps full coverage / balanced gaps and flowers

### Example Output (Summer Garden Romantic)

```
Real photograph from outdoor garden wedding ceremony, natural wooden circular arch decorated with loose organic floral arrangement, composition: 35% blush pink garden roses in clusters of 3-4 blooms positioned asymmetrically left-heavy, 25% ivory ranunculus scattered throughout right side, 20% sage eucalyptus trailing and filling gaps, 15% dusty mauve hellebores accent pieces lower portion, 5% blue tweedia delicate touches upper left, airy arrangement with 35% intentional gaps showing natural wood arch structure, asymmetric cascading right, summer garden setting, soft afternoon sunlight filtering through trees, shot during ceremony setup, Nikon D850 natural bokeh, Kodak Portra 400 film aesthetic, slight grain, authentic imperfections, candid documentary style

NEGATIVE: no CGI, no 3D render, no perfect symmetry, no oversaturated neon colors, no AI generated look, no studio lighting, no flawless tight arrangement, no tropical flowers (orchids, anthurium), no winter flowers (amaryllis, poinsettia), no text, no watermark
```

---

## 2. CEREMONY ARCH - ACCENT CORNERS

### Template

```
Real photograph from {LOCATION} wedding ceremony, {ARCH_STRUCTURE} with floral arrangements clustered at {CORNER_PLACEMENT}, {STYLE} composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} {FLOWER_1_PLACEMENT}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} {FLOWER_2_PLACEMENT}, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} creating organic flow, {ACCENT_PERCENTAGE}% {ACCENT_FLOWER} delicate accents, {DENSITY_DESCRIPTION} clusters leaving arch structure visible, {SEASON} ceremony setting, {LIGHTING}, {CAMERA_SPEC}, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no full arch coverage, no symmetrical identical sides, no studio lighting, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{CORNER_PLACEMENT}`: both bottom corners / upper corners / asymmetric left base and right top / corners and center

### Example Output (Autumn Rustic)

```
Real photograph from outdoor vineyard wedding ceremony, wooden rectangular arbor with floral arrangements clustered at both bottom corners, loose organic composition: 30% rust orange dahlias in natural clusters positioned base left, 25% golden yellow marigolds accent right base, 25% dried wheat stalks adding height and texture, 15% burgundy amaranth trailing naturally, 5% bronze oak leaves filling gaps, airy clusters leaving wooden arbor structure visible with intentional negative space, autumn vineyard ceremony setting, warm golden hour light, Canon 5D Mark IV 50mm f/1.8, Kodak Ektar warm tones, rustic harvest aesthetic

NEGATIVE: no CGI, no 3D render, no full arch coverage, no symmetrical identical sides, no studio lighting, no spring flowers (tulips, peonies), no text
```

---

## 3. BRIDAL BOUQUET - CASCADING

### Template

```
Real photograph of {STYLE} cascading bridal bouquet held by bride, composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} creating focal point upper portion, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} layered throughout, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} trailing downward {TRAIL_LENGTH}, {ACCENT_PERCENTAGE}% {ACCENT_FLOWER} delicate accents, {DENSITY_DESCRIPTION} arrangement, {STEM_TREATMENT}, bride's hands visible holding bouquet at waist level, {BRIDE_CONTEXT}, {LOCATION} setting, {LIGHTING}, {CAMERA_SPEC} shallow depth of field, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no tight round shape, no floating bouquet, no studio backdrop, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{TRAIL_LENGTH}`: 12-18 inches below hands / dramatic 24-inch cascade / moderate 15-inch trail
- `{STEM_TREATMENT}`: long stems wrapped in ivory silk ribbon / natural stems bound with lace / satin ribbon tied in bow
- `{BRIDE_CONTEXT}`: bride's lace wedding dress visible softly blurred / elegant manicure visible / bride standing in natural light

### Example Output (Romantic Spring)

```
Real photograph of romantic cascading bridal bouquet held by bride, composition: 40% soft pink peonies creating focal point upper portion in lush clusters, 25% white ranunculus layered throughout center, 20% eucalyptus trailing downward 18 inches below hands, 10% sweet peas delicate purple accents, 5% lily of the valley tiny white blooms, lush romantic arrangement, long stems wrapped in ivory silk ribbon with trailing ends, bride's hands visible holding bouquet at waist level, elegant manicure visible, bride's lace wedding dress visible softly blurred in background, spring garden setting, soft natural window light, Canon 5D Mark IV 85mm f/1.4 shallow depth of field, Fuji Pro 400H soft color palette, fine art bridal photography style

NEGATIVE: no CGI, no 3D render, no tight round shape, no floating bouquet, no studio backdrop, no autumn flowers (dahlias, mums), no text
```

---

## 4. BRIDAL BOUQUET - ROUND HANDTIED

### Template

```
Real photograph of {STYLE} round hand-tied bridal bouquet, compact dome shape, composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} creating rounded center, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} filling evenly throughout, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} collar around perimeter, {ACCENT_PERCENTAGE}% {ACCENT_FLOWER} accent blooms, {DENSITY_DESCRIPTION} tight arrangement, {STEM_TREATMENT}, {BOUQUET_CONTEXT}, {LIGHTING}, {CAMERA_SPEC} focusing on bouquet details, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no cascading trailing stems, no loose asymmetric shape, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{BOUQUET_CONTEXT}`: held by bride at waist / resting on white linen surface / bride's hands visible holding / displayed on vintage chair

### Example Output (Classic White Winter)

```
Real photograph of classic round hand-tied bridal bouquet, compact dome shape, composition: 50% white garden roses creating rounded center in perfect dome, 25% white ranunculus filling evenly throughout, 15% silver dollar eucalyptus collar around perimeter, 10% white freesia delicate accent blooms, lush full tight arrangement, stems wrapped in ivory satin ribbon tied in elegant bow, held by bride at waist level with elegant manicure visible, indoor setting near large window, soft morning sunlight creating gentle shadows, Nikon D850 focusing on rose layers and texture, Kodak Portra 160 soft color rendition, professional bridal editorial style

NEGATIVE: no CGI, no 3D render, no cascading trailing stems, no loose asymmetric shape, no summer flowers (dahlias, sunflowers), no text
```

---

## 5. CENTERPIECE - LOW TABLE

### Template

```
Real photograph of {STYLE} low table centerpiece on {TABLE_SURFACE}, {VESSEL_DESCRIPTION}, composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} {FLOWER_1_PLACEMENT}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} {FLOWER_2_PLACEMENT}, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} {FOLIAGE_PLACEMENT}, {ACCENT_PERCENTAGE}% {ACCENT_FLOWER} scattered accents, {DENSITY_DESCRIPTION} low arrangement {HEIGHT_SPEC}, {TABLE_CONTEXT}, {SEASON} reception setting, {LIGHTING}, shot from {ANGLE}, {CAMERA_SPEC}, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no tall blocking height, no studio backdrop, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{TABLE_SURFACE}`: wooden farm table / white linen tablecloth / rustic wood / marble tabletop / natural wood with grain visible
- `{VESSEL_DESCRIPTION}`: matte terracotta pot with visible patina / clear glass cylinder vase / vintage brass compote / reclaimed wood box
- `{HEIGHT_SPEC}`: 8-12 inches allowing conversation across table / compact 6-8 inch height / 10-14 inch moderate height
- `{TABLE_CONTEXT}`: white linen tablecloth, gold flatware visible / rustic wood, burlap runner / marble surface, elegant place setting
- `{ANGLE}`: slight angle showing depth / centered frontal view / 45-degree angle

### Example Output (Rustic Autumn)

```
Real photograph of rustic low table centerpiece on wooden farm table, matte terracotta pot with visible patina and weathered texture, composition: 30% rust orange dahlias with dark centers clustered asymmetrically left side, 20% golden yellow marigolds scattered throughout, 20% dried wheat stalks adding height and texture right side, 15% trailing burgundy amaranth draping over vessel edge, 15% bronze oak leaves filling gaps, loose airy arrangement 10-12 inches height allowing conversation across table, rustic wood table with burlap runner partially visible, autumn barn reception setting, warm golden hour sunlight streaming through windows, shot from 45-degree angle showing arrangement depth, Nikon D750 50mm f/2.8, Kodak Ektar warm tones, authentic harvest aesthetic

NEGATIVE: no CGI, no 3D render, no tall blocking height, no studio backdrop, no spring flowers (tulips, peonies), no text
```

---

## 6. CENTERPIECE - TALL STATEMENT

### Template

```
Real photograph of {STYLE} tall statement centerpiece, {VESSEL_DESCRIPTION}, dramatic vertical composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} {FLOWER_1_PLACEMENT}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} creating height, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} {FOLIAGE_PLACEMENT}, {ACCENT_PERCENTAGE}% {ACCENT_FLOWER} throughout, {DENSITY_DESCRIPTION} arrangement {HEIGHT_SPEC}, {TABLE_CONTEXT}, {SEASON} reception, {LIGHTING}, {CAMERA_SPEC} capturing full height, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no low compact arrangement, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{HEIGHT_SPEC}`: 24-30 inches tall dramatic height / 36+ inches monumental scale / 28-32 inches elegant height

### Example Output (Luxe Modern Winter)

```
Real photograph of luxe modern tall statement centerpiece, clear glass cylinder vase 18 inches tall showing stems, dramatic vertical composition: 40% white calla lilies with sculptural curves positioned throughout full height, 30% white phalaenopsis orchids creating elegant vertical rhythm, 20% silver dollar eucalyptus providing metallic sheen and texture, 10% white ranunculus clustered at base, structured architectural arrangement 32 inches tall dramatic height, white linen tablecloth with silver chargers visible at base, modern winter reception, soft diffused natural light from tall windows, Nikon Z6 II capturing full arrangement height and reflection on table, Fuji Pro 400H color palette, sophisticated editorial style

NEGATIVE: no CGI, no 3D render, no low compact arrangement, no summer flowers (dahlias, sunflowers), no rustic wildflower style, no text
```

---

## 7. AISLE MARKERS

### Template

```
Real photograph of {STYLE} aisle marker floral arrangement, {ATTACHMENT_METHOD}, composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} {FLOWER_1_PLACEMENT}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME}, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} {FOLIAGE_PLACEMENT}, {DENSITY_DESCRIPTION} compact arrangement, {ATTACHMENT_CONTEXT}, ceremony aisle setting, {LOCATION} venue, {LIGHTING}, {CAMERA_SPEC}, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no large installation scale, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{ATTACHMENT_METHOD}`: tied to chair with ribbon / shepherd's hook ground stake / mason jar hanging / glass vase on pew end
- `{ATTACHMENT_CONTEXT}`: white folding chair visible / natural wood pew / outdoor shepherd's hook in grass

### Example Output (Garden Spring)

```
Real photograph of romantic garden aisle marker floral arrangement, tied to white folding chair with ivory ribbon, composition: 35% soft pink garden roses in small cluster, 30% white ranunculus filling body, 25% eucalyptus trailing downward 8 inches, 10% sweet peas delicate purple accents, airy compact arrangement 6-8 inches diameter, tied to white folding chair with flowing ivory silk ribbon, natural grass aisle visible, spring outdoor garden ceremony setting, dappled afternoon sunlight, Canon 5D Mark IV 50mm, Kodak Portra 400, soft romantic aesthetic

NEGATIVE: no CGI, no 3D render, no large installation scale, no autumn flowers (dahlias, mums), no text
```

---

## 8. RECEPTION ENTRANCE INSTALLATION

### Template

```
Real photograph of {STYLE} reception entrance floral installation, {INSTALLATION_TYPE}, monumental composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} {FLOWER_1_PLACEMENT}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} creating visual impact, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} {FOLIAGE_PLACEMENT}, {ACCENT_PERCENTAGE}% {ACCENT_FLOWER} throughout, {DENSITY_DESCRIPTION} large-scale arrangement {SCALE_SPEC}, {STRUCTURAL_ELEMENT}, {VENUE_CONTEXT}, {LIGHTING}, {CAMERA_SPEC} capturing full installation, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no small tabletop scale, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{INSTALLATION_TYPE}`: floor-standing welcome arrangement / suspended overhead / statement wall backdrop / entrance arch
- `{SCALE_SPEC}`: 6-foot width 8-foot height / monumental 10-foot scale / dramatic 7-foot tall
- `{STRUCTURAL_ELEMENT}`: natural branch armature visible / steel geometric frame / organic vine base
- `{VENUE_CONTEXT}`: elegant ballroom entrance / rustic barn doorway / modern gallery space / garden pavilion

### Example Output (Dramatic Summer)

```
Real photograph of luxe dramatic reception entrance floral installation, floor-standing statement arrangement flanking double doors, monumental composition: 35% coral charm peonies (substituted for season: coral dahlias) in large clustered masses, 25% white hydrangeas creating lush fullness and volume, 25% trailing jasmine vine with delicate white blooms cascading, 15% burgundy smoke bush adding depth and texture, lush abundant large-scale arrangement 7-foot height 5-foot width each side, natural branch armature creating organic structural flow, elegant ballroom entrance with white double doors, summer evening reception, warm uplighting creating dramatic shadows, Nikon D850 wide angle capturing full installation scale, Kodak Portra 400, fine art wedding photography style

NEGATIVE: no CGI, no 3D render, no small tabletop scale, no winter flowers (amaryllis, paperwhites), no text
```

---

## 9. SWEETHEART TABLE RUNNER

### Template

```
Real photograph of {STYLE} sweetheart table floral runner, {TABLE_SURFACE}, low garland composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} {FLOWER_1_PLACEMENT}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} interspersed throughout {RUNNER_LENGTH}, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} creating continuous garland base, {ACCENT_PERCENTAGE}% {ACCENT_FLOWER} delicate accents, {DENSITY_DESCRIPTION} low runner {HEIGHT_SPEC}, {TABLE_CONTEXT}, {SEASON} reception, {LIGHTING}, shot from {ANGLE}, {CAMERA_SPEC}, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no tall centerpiece style, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{RUNNER_LENGTH}`: spanning 6-foot table length / continuous 8-foot garland / 5-foot table runner
- `{HEIGHT_SPEC}`: 4-6 inches height maintaining low profile / 6-8 inches with dimensional variation
- `{TABLE_CONTEXT}`: white linen tablecloth, gold chiavari chairs / rustic wood king's table / modern acrylic table
- `{ANGLE}`: straight-on frontal view showing full length / slight angle showing depth / overhead view

### Example Output (Romantic Blush Summer)

```
Real photograph of romantic blush sweetheart table floral runner, white linen tablecloth, low organic garland composition: 35% blush garden roses in clusters of 2-3 blooms positioned every 12 inches along runner, 25% white spray roses filling gaps throughout 8-foot garland length, 30% seeded eucalyptus creating continuous garland base with flowing movement, 10% blush ranunculus delicate accents scattered organically, airy flowing low runner 5-6 inches height maintaining sightlines, white linen tablecloth with subtle folds, gold chiavari chairs framing, summer garden reception, soft golden hour backlighting, straight-on frontal view showing full runner length and symmetry, Canon EOS R5 RF 50mm, Kodak Portra 400 film aesthetic, romantic editorial style

NEGATIVE: no CGI, no 3D render, no tall centerpiece style, no autumn flowers (dahlias, chrysanthemums), no text
```

---

## 10. CAKE FLOWERS

### Template

```
Real photograph of {CAKE_STYLE} wedding cake decorated with fresh floral accents, {CAKE_DESCRIPTION}, floral composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} {CAKE_PLACEMENT}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} {CAKE_PLACEMENT_2}, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} creating organic flow, {DENSITY_DESCRIPTION} delicate cake florals, {CAKE_CONTEXT}, {SEASON} reception, {LIGHTING}, {CAMERA_SPEC} focusing on cake details, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no artificial sugar flowers, no oversized florals overpowering cake, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{CAKE_STYLE}`: three-tier elegant / rustic naked / modern minimalist / classic white
- `{CAKE_DESCRIPTION}`: white buttercream smooth finish / semi-naked with visible cake layers / fondant modern / textured buttercream
- `{CAKE_PLACEMENT}`: cascading down tiers / clustered at base / accent top tier / scattered on each tier
- `{CAKE_CONTEXT}`: on marble cake stand / rustic wood slice / modern acrylic stand / vintage gold stand

### Example Output (Garden Romantic Spring)

```
Real photograph of three-tier elegant wedding cake decorated with fresh garden floral accents, white buttercream with smooth finish, floral composition: 40% soft pink garden roses in small blooms cascading down right side of tiers, 30% white ranunculus clustered at base tier, 20% eucalyptus sprigs creating organic flow between tiers, 10% sweet peas delicate purple accents top tier, delicate romantic cake florals proportioned to complement not overpower, displayed on vintage white cake stand with scalloped edge, spring garden reception on dessert table, soft natural window light creating gentle shadows on cake texture, Canon 5D Mark IV 85mm f/2 focusing on frosting texture and petal details, Fuji Pro 400H soft color palette, fine art cake photography

NEGATIVE: no CGI, no 3D render, no artificial sugar flowers, no oversized florals overpowering cake, no autumn flowers (dahlias, mums), no neon colors, no text
```

---

## 11. BOUTONNIERE

### Template

```
Real photograph of {STYLE} boutonniere, compact composition: {FLOWER_FOCAL} single bloom as focal point, {ACCENT_ELEMENT} delicate accent, {FOLIAGE_ELEMENT} greenery base, {SCALE_DESCRIPTION}, {STEM_WRAP}, {WEARING_CONTEXT}, {LIGHTING}, {CAMERA_SPEC} macro focus, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no large scale, no multiple large blooms, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{FLOWER_FOCAL}`: single garden rose / single ranunculus / single dahlia / single calla lily
- `{ACCENT_ELEMENT}`: single sprig of baby's breath / small berry cluster / delicate tweedia bloom
- `{FOLIAGE_ELEMENT}`: single eucalyptus leaf / small olive sprig / ivy leaf
- `{SCALE_DESCRIPTION}`: compact 2-3 inch total size / delicate small-scale 2.5 inches / minimal 2-inch proportion
- `{STEM_WRAP}`: wrapped in natural twine / bound with ivory thread / green floral tape with pin
- `{WEARING_CONTEXT}`: pinned to navy suit lapel / on charcoal gray jacket / on black tuxedo lapel

### Example Output (Classic Romantic)

```
Real photograph of classic romantic boutonniere, compact composition: single blush garden rose as focal point with petals slightly open, single sprig of baby's breath delicate accent tucked beside rose, two small eucalyptus leaves greenery base, compact 2.5-inch total size maintaining elegant proportion, stem wrapped in ivory thread with boutonniere pin visible, pinned to navy blue suit lapel with visible fabric texture, soft natural light near window, Canon 5D Mark IV 100mm macro focusing on rose petal texture and baby's breath details, Kodak Portra 160 soft color rendition, fine art detail photography

NEGATIVE: no CGI, no 3D render, no large scale, no multiple large blooms, no autumn mums, no neon colors, no text
```

---

## 12. CORSAGE - WRIST

### Template

```
Real photograph of {STYLE} wrist corsage, delicate composition: {FLOWER_1} focal blooms, {FLOWER_2} accent flowers, {FOLIAGE} greenery, {SCALE_DESCRIPTION}, {RIBBON_ATTACHMENT}, {WEARING_CONTEXT}, {LIGHTING}, {CAMERA_SPEC} focusing on corsage details, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no oversized blooms, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{SCALE_DESCRIPTION}`: compact 3-4 inch delicate wrist arrangement / minimal 3-inch diameter / romantic 4-inch
- `{RIBBON_ATTACHMENT}`: ivory satin ribbon tie / blush silk ribbon with trailing ends / natural jute ribbon
- `{WEARING_CONTEXT}`: on wrist with soft pink dress sleeve / mother's elegant wrist with jewelry / bridesmaid's arm

### Example Output (Garden Spring)

```
Real photograph of romantic garden wrist corsage, delicate composition: two small blush spray roses focal blooms positioned close together, three white ranunculus buds accent flowers, small eucalyptus sprigs and ivy leaves greenery creating organic texture, compact 3.5-inch diameter delicate wrist arrangement, ivory satin ribbon tie with subtle sheen and trailing 6-inch ends, on wrist with mother-of-bride soft pink dress sleeve visible and elegant pearl bracelet, spring wedding, soft natural indoor light near window, Canon 5D Mark IV 85mm f/1.8 focusing on rose centers and ribbon texture, Fuji Pro 400H soft palette, detail-oriented bridal photography

NEGATIVE: no CGI, no 3D render, no oversized blooms, no autumn dahlias, no neon colors, no text
```

---

## 13. FLOWER CROWN

### Template

```
Real photograph of {STYLE} floral crown, circular delicate composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME} small blooms distributed evenly, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME} accent flowers, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE} creating continuous base, {DENSITY_DESCRIPTION} crown, {CROWN_CONTEXT}, {SEASON} wedding, {LIGHTING}, {CAMERA_SPEC}, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no large oversized blooms, no heavy thick crown, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{DENSITY_DESCRIPTION}`: delicate airy / full romantic / minimalist scattered / bohemian abundant
- `{CROWN_CONTEXT}`: worn by bride with flowing hair / displayed on white surface / on flower girl / on mannequin head

### Example Output (Boho Wildflower Summer)

```
Real photograph of bohemian wildflower floral crown, circular delicate composition: 30% small white daisies distributed evenly creating base pattern, 25% lavender small purple blooms accent flowers scattered organically, 25% baby's breath creating airy texture throughout, 20% mixed wildflower grasses and delicate foliage creating continuous flexible base, airy bohemian crown with intentional gaps and natural loose aesthetic, worn by bride with long flowing wavy brown hair partially visible, soft natural outdoor lighting, summer garden wedding, Canon EOS R5 85mm focusing on delicate flower details and hair texture, Kodak Portra 400, romantic natural style

NEGATIVE: no CGI, no 3D render, no large oversized blooms like big roses or dahlias, no heavy thick crown, no winter evergreens, no text
```

---

## 14. WELCOME SIGN FLOWERS

### Template

```
Real photograph of {SIGN_STYLE} welcome sign with floral accent, {SIGN_DESCRIPTION}, floral composition: {FLOWER_ARRANGEMENT_DESCRIPTION} positioned {PLACEMENT_ON_SIGN}, {DENSITY_DESCRIPTION} compact floral cluster, {SIGN_CONTEXT}, {SEASON} {LOCATION} wedding, {LIGHTING}, {CAMERA_SPEC}, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no overpowering florals covering sign text, no {SEASONAL_EXCLUSIONS}, no text overlay
```

### Variables Spécifiques

- `{SIGN_STYLE}`: rustic wooden / acrylic modern / vintage framed / chalkboard
- `{SIGN_DESCRIPTION}`: wooden board with painted calligraphy / clear acrylic with white lettering / vintage gold frame
- `{PLACEMENT_ON_SIGN}`: clustered upper left corner / corner arrangement / base accent / asymmetric side
- `{SIGN_CONTEXT}`: on wooden easel / leaning against stone wall / displayed on vintage table

### Example Output (Rustic Autumn)

```
Real photograph of rustic wooden welcome sign with floral accent, reclaimed wood board with painted white calligraphy "Welcome to our beginning", floral composition: small cluster of rust orange dahlias, golden marigolds, dried wheat stalks, burgundy amaranth and bronze oak leaves positioned upper right corner creating organic flowing accent, compact rustic floral cluster 8-10 inches proportioned to complement not cover signage, displayed on wooden easel, autumn outdoor vineyard wedding entrance, warm golden hour sunlight, Nikon D750 50mm capturing sign text clearly with florals as elegant accent, Kodak Ektar warm tones, authentic rustic wedding style

NEGATIVE: no CGI, no 3D render, no overpowering florals covering sign text completely, no spring tulips, no text overlay, no watermark
```

---

## 15. COCKTAIL TABLE ACCENTS

### Template

```
Real photograph of {STYLE} cocktail table floral accent, {VESSEL_DESCRIPTION}, petite composition: {FLOWER_1_PERCENTAGE}% {FLOWER_1_COLOR} {FLOWER_1_NAME}, {FLOWER_2_PERCENTAGE}% {FLOWER_2_COLOR} {FLOWER_2_NAME}, {FOLIAGE_PERCENTAGE}% {FOLIAGE_TYPE}, {DENSITY_DESCRIPTION} small-scale arrangement {HEIGHT_SPEC}, {TABLE_CONTEXT}, {SEASON} cocktail hour, {LIGHTING}, {CAMERA_SPEC}, {FILM_AESTHETIC}

NEGATIVE: no CGI, no 3D render, no large centerpiece scale, no {SEASONAL_EXCLUSIONS}, no text
```

### Variables Spécifiques

- `{VESSEL_DESCRIPTION}`: small glass bud vase / mini terracotta pot / vintage brass cup / small mercury glass
- `{HEIGHT_SPEC}`: 6-8 inches total height / compact 5-6 inches / petite 4-5 inch scale
- `{TABLE_CONTEXT}`: on high cocktail table with white linen / on wooden barrel top / on modern acrylic table

### Example Output (Modern Minimalist)

```
Real photograph of modern minimalist cocktail table floral accent, small clear glass cylinder vase 4 inches tall, petite composition: 50% single white calla lily creating sculptural focal point, 30% two white ranunculus supporting blooms, 20% small eucalyptus sprig accent, clean minimalist small-scale arrangement 7 inches total height, on high cocktail table with crisp white linen and modern edge, contemporary winter cocktail hour, soft diffused natural light, Nikon Z6 II focusing on calla lily curve and glass reflection, Fuji Pro 400H clean palette, modern elegant style

NEGATIVE: no CGI, no 3D render, no large centerpiece scale, no summer dahlias, no rustic wildflower style, no text
```

---

## 🔧 NOTES D'UTILISATION

### Comment le Prompt Generator Agent Utilise ces Templates

1. **Selection:** Choisit le template correspondant à la prestation demandée
2. **Variable Injection:** Remplace les variables avec données du Portfolio Profile + Client Brief
3. **Seasonal Validation:** Vérifie que les fleurs sont disponibles pour la saison, substitue si nécessaire
4. **Style Application:** Applique le style arrangement du portfolio (loose_organic, lush_full, etc.)
5. **Quality Check:** Passe le prompt généré au Quality Validator
6. **Output:** Retourne 2-3 variations pour sélection

### Variables Communes à Tous Templates

Ces variables sont disponibles pour tous les templates:

```javascript
{
  // Flowers (jusqu'à 5 types)
  FLOWER_1_PERCENTAGE, FLOWER_1_NAME, FLOWER_1_COLOR, FLOWER_1_PLACEMENT,
  FLOWER_2_PERCENTAGE, FLOWER_2_NAME, FLOWER_2_COLOR, FLOWER_2_PLACEMENT,
  ACCENT_PERCENTAGE, ACCENT_FLOWER, ACCENT_PLACEMENT,

  // Foliage
  FOLIAGE_PERCENTAGE, FOLIAGE_TYPE, FOLIAGE_PLACEMENT,

  // Style & Composition
  STYLE, // Maps to arrangement_style from portfolio
  DENSITY_DESCRIPTION, // airy / lush / moderate
  GAP_DESCRIPTION, // intentional gaps / minimal gaps / balanced

  // Photography
  CAMERA_SPEC, // From rules database
  FILM_AESTHETIC, // From rules database
  LIGHTING, // From rules database based on time/location

  // Context
  SEASON, // spring / summer / autumn / winter
  LOCATION, // outdoor garden / indoor / beach / etc.

  // Exclusions
  SEASONAL_EXCLUSIONS // Flowers to exclude based on season
}
```

### Ajout de Nouveaux Templates

Pour ajouter un nouveau type de prestation:

1. Identifier les **variables spécifiques** à ce type
2. Rédiger le **template structure** suivant le format établi
3. Créer **2-3 example outputs** pour différents styles/saisons
4. Ajouter **negative prompts** appropriés
5. Tester avec Prompt Generator Agent

---

**Document Version:** 1.0
**Last Updated:** 2026-02-06
**Templates Count:** 15
