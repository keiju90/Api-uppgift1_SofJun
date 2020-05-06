# Api-uppgift1_SofJun

Teori och praktiska API

#####
Teoretisk del


Svara på följande frågor

    1. Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, 
    response code och body som skickas in och svarar. 
    
    Svar:
    Metod GET för att få en respons från länken.  
    Path: djur1/kor1
    URI: https://www.bondeniskolan.se/djur1/kor1/
    Response code och body: Svarar tillbaka med response code 200 och är i html. 
    
    2. Beskriv HTTP-protokollets vanligaste metoder och vad de gör.
    GET: Klienten ber servern att skicka en viss fil, till exempel en HTML-sida eller en bild. Detta är det vanligaste HTTP-kommandot.
HEAD: Klienten ber servern att berätta mer om innehållet utan att skicka över det.
POST: Klienten ber servern att lagra viss information, till exempel i samband med uppladdning av fil eller då ett formulär skickas.
PUT: Klienten laddar upp en fil på servern. Det kan hända att servern nekar förfrågan.
DELETE: Klienten säger åt servern att ta bort en fil. Används nästan aldrig.
TRACE: Klienten ber servern att skicka tillbaks förfrågan. Kan användas för att kontrollera ifall tredje part manipulerat den ursprungliga förfrågan.
OPTIONS: Visar en lista över serverns samtliga HTTP-kommandon.
CONNECT: Omvandlar förfrågan till en TCP/IP-tunnel, till exempel för att möjliggöra SSL/HTTPS.
PATCH: Ett sätt att delvis byta ut innehållet i en fil på servern.
    
    3. "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.
    
    http: är schemat.
     "localhost:300" är en authority.
     "/users" är en path.
     ?username=something är query.
     
    4. På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.
    path header och query 
