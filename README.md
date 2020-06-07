# Api-uppgift1_SofJun

Teori och praktiska API

#####
Teoretisk del

1. Hur används HTTP-protokollet när du surfar in på en websida? Beskriv vilken metod, path, URI, response code och body som skickas in och svarar. 
```sh
Svar:
Metod GET för att få en respons från länken.  
Path: djur1/kor1
URI: https://www.bondeniskolan.se/djur1/kor1/
Response code och body: Svarar tillbaka med response code 200 och är i html. 
```
    
2. Beskriv HTTP-protokollets vanligaste metoder och vad de gör.
```sh
Svar:
GET: Klienten ber servern att skicka en viss fil, till exempel en HTML-sida eller en bild. Detta är det vanligaste HTTP-kommandot.
HEAD: Klienten ber servern att berätta mer om innehållet utan att skicka över det.
POST: Klienten ber servern att lagra viss information, till exempel i samband med uppladdning av fil eller då ett formulär skickas.
PUT: Klienten laddar upp en fil på servern. Det kan hända att servern nekar förfrågan.
DELETE: Klienten säger åt servern att ta bort en fil. Används nästan aldrig.
PATCH: Ett sätt att delvis byta ut innehållet i en fil på servern.
```
    
3. "http://localhost:3000/users?username=something" är en URI, beskriv vilka delar den består av och vad de kallas.
```sh
Svar:
http: är schemat.
"localhost:300" är en authority.
"/users" är en path.
?username=something är query.
     
Exempel:
            userinfo          host        port
        ┌───────┴───────┐ ┌────┴────────┐ ┌┴┐
 http://john.doe:password@www.example.com:123/forum/questions/?tag=networking&order=newest#top
 └─┬─┘ └───────────┬────────────────────────┘└─┬─────────────┘└────────┬──────────────────┘└┬─┘
 scheme         authority                      path                  query             fragment
```

 
4. På vilka tre sätt kan man skicka in parametrar i en HTTP-request? Ge exempel med curl.
```sh
Svar:
path header och query. 

curl -s "localhost:3000/someparam?keyWithoutValue&keyWithvalue=value" -H "some: header" | jq
path parameter  =  /:someparam,
query parameter =  /someparam?keyWithoutValue&keyWithvalue=value
header parameter = / -H "some: header"
```

Feedback på kursen: 
```sh
Kursens takt- Takten på kursen har varit väldigt intensiv med många övnings- & inlämningsuppgifter. För mycket information.
Kursmaterial - Bra med kursboken. Finns mycket information på nätet.  
Format - Det har tagit lång tid för mig att förstå grunderna och jag upplever upplägget som ganska så rörigt med många moment.
Jag tycker vi kunde haft fler steg för steg genomgångar/uppgifter där det förklarades exakt hur man skulle göra vissa moment. Jag upplevede även att detta inte riktigt var en kurs för nybörjare då jag har haft svårt att "hänga med" redan från första början. 
Det som har varit bra är att läraren funnits tillgänglig och varit kunnig inom ämnet. 
```

