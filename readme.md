# QR Code Generator Verzija 1.0

## Opis projekta

QR Code Generator je jednostavna web aplikacija koja omogućava korisnicima da generišu QR kodove sa bilo kojim tekstom koji unesu. Aplikacija koristi **TypeScript** za razvoj i **Webpack** kao bundler. Aplikacija takođe omogućava preuzimanje generisanog QR koda kao sliku u PNG formatu. Ovaj alat je koristan za generisanje QR kodova koji se mogu koristiti za pakovanje proizvoda, marketing, ili integraciju u druge aplikacije.

## Funkcionalnosti

- **Generisanje QR koda**: Korisnik unosi tekst u input polje, a zatim generiše QR kod.
- **Preuzimanje QR koda**: Omogućava preuzimanje generisanog QR koda kao PNG sliku.
- **Live reload**: Tokom razvoja, aplikacija automatski osvežava promene u realnom vremenu.
- **Podrška za hot-reloading**: Kada se izvrše promene u kodu, aplikacija se dinamički ažurira bez ponovnog učitavanja stranice.

## Planirane dorade na aplikaciji

- **Duplo preuzimanje**: Trenutno aplikacija 2 puta preuzima PNG fajl i skladišti na računar korisnika.
- **Kreiranje aplikacije za App Store i Play Store**: Aplikacija će moći da se preuzme iz prodavnice za vaš mobilni uređaj.