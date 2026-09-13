# Sport Test App – PWA-wrapper

Deze map bevat een minimale PWA-wrapper rond je bestaande Google Apps Script
webapp. De Google Sheet blijft de enige plek waar data wordt opgeslagen; deze
bestanden maken alleen een installeerbare "schil" rond je webapp.

## Bestanden
- `index.html` – laadt je Apps Script webapp in een full-screen iframe
- `manifest.json` – maakt de site installeerbaar als app
- `service-worker.js` – cachet enkel de schil, niet de data
- `icons/icon-192.png`, `icons/icon-512.png` – placeholder-iconen (vervang gerust door je eigen logo, zelfde bestandsnamen en afmetingen aanhouden)

## Installatie-stappen

1. **Vul je Apps Script-URL in**
   Open `index.html` en vervang:
   ```
   src="PLAK_HIER_JE_APPS_SCRIPT_EXEC_URL"
   ```
   door je eigen `/exec`-URL (Apps Script editor > Implementeren > Implementaties beheren).

2. **Zet deze map in een GitHub-repo**
   Maak een nieuwe repository aan en push deze bestanden naar de `main`-branch
   (in de root van de repo, niet in een submap).

3. **Activeer GitHub Pages**
   Ga naar Settings > Pages, kies branch `main` en map `/ (root)`, klik Save.
   Na een paar minuten is je site bereikbaar op:
   ```
   https://<gebruikersnaam>.github.io/<repo-naam>/
   ```

4. **Genereer de APK**
   Ga naar https://www.pwabuilder.com, vul de GitHub Pages-URL in, laat
   analyseren en kies "Android" als pakket. Download de APK/AAB.

5. **Testen**
   Zet "onbekende bronnen toestaan" aan op een Android-toestel en installeer
   de APK.

## Eigen icoon gebruiken
Vervang `icons/icon-192.png` en `icons/icon-512.png` door je eigen logo
(zelfde bestandsnamen en vierkante afmetingen: 192×192 en 512×512 pixels).
