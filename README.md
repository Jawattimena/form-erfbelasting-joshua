# form-erfbelasting-joshua

## Dag 1

Vandaag zijn we begonnen met Browsetech. We hebben de opdracht gekregen om een webformulier te maken in de stijl van NS. Daar heb ik vandaag een begin mee gemaakt.

Ik ben gestart met het stylen van een tekstinvoer. Op dit moment heb ik dus één tekstveld met basisstyling. Ik denk dat het handiger is om eerst alle inputs te maken en ze daarna pas te stylen.

Ik heb ook een gesprek gehad met Jeppe, die me uitleg gaf over het schrijven van droge code. Dat is erg handig om te weten, omdat het helpt om de styling van de hele website overzichtelijk en makkelijk aanpasbaar te houden.

Morgen ga ik eerst alle inputs van het formulier in HTML zetten. Dat lijkt me slimmer en efficiënter.

## Dag 2

Vandaag ben ik bezig geweest met de HTML. Ik heb alle invoervelden in de HTML geplaatst. Dit duurde ongeveer drie uur.

We hebben een wekelijkse Geek-sessie gevolgd en daarnaast een workshop over deze HTML-elementen. Daar hebben we onder andere geleerd wat het *name*-attribuut precies doet en hebben we verschillende pseudo-classes besproken, zoals `:invalid` en `:valid`.

Ook ben ik begonnen met de styling van het formulier. Ik heb een div om de input en het label geplaatst, wat het animeren van het label een stuk makkelijker maakt. De tekstinput en het label zijn nu geanimeerd. Ik ontdekte dat wanneer je het label eerst goed in het midden plaatst (`align-self: center`) en de div wat extra padding boven en onder geeft, de animatie vrij kan bewegen zonder dat er iets verspringt. Door de standaardpositie `transform: translateY(0%)` te gebruiken, creëer je als het ware een startpunt. Wanneer je vervolgens de `:focus`-state gebruikt met `translateY(-100%)`, verplaats je het label naar een gekozen positie tijdens focus.

Volgende keer gaan we leren over de styling van valideren en wil ik verder met de styling van de radio buttons.

## WEEK 1

Deze week ben ik gestart met het vak **Browser Technologies**, waarbij de focus ligt op het bouwen van moderne, toegankelijke webinterfaces.

### Start van het project

Aan het begin van de week kregen we de opdracht om een webformulier te ontwikkelen in de stijl van de Nederlandse Spoorwegen. Ik ben begonnen met het maken en stylen van een tekstinvoer. Uiteindelijk had ik één invoerveld met basisstyling staan. Tijdens het werken merkte ik dat het waarschijnlijk efficiënter is om eerst alle invoervelden in HTML op te zetten en ze daarna pas gezamenlijk te stylen.

Daarnaast heb ik een gesprek gehad met Jeppe over het schrijven van “droge code” (DRY-principe). Dit was erg leerzaam, omdat het helpt om styling overzichtelijk te houden en toekomstige aanpassingen eenvoudiger te maken.

### Structuur en HTML

De volgende dag heb ik me volledig gericht op de HTML-structuur van het formulier. Alle invoervelden zijn toegevoegd aan de pagina, wat ongeveer drie uur werk kostte.

We volgden ook een Weekly Geek-sessie en een workshop over HTML-elementen. Hierin leerden we onder andere:

- Het doel en nut van het *name*attribuut bij formuliervelden
- Het gebruik van CSS pseudo-classes zoals `:valid` en `:invalid` voor validatie en gebruikersfeedback

### Styling en animaties

Na het opzetten van de HTML ben ik gestart met de vormgeving van het formulier. Ik heb elke input en het bijbehorende label in een aparte div geplaatst. Dit maakt het eenvoudiger om animaties toe te passen.

De tekstinput en labels hebben nu een animatie waarbij het label verschuift wanneer het invoerveld focus krijgt. Door het label eerst netjes te centreren met `align-self: center` en extra padding aan de container toe te voegen, kan de animatie vloeiend bewegen zonder dat elementen verspringen.

Met `transform: translateY(0%)` heb ik een duidelijke beginpositie ingesteld. Vervolgens wordt met de `:focus`-state en `translateY(-100%)` het label omhoog verplaatst zodra de gebruiker in het veld klikt. Dit zorgt voor een nette en moderne interactie.

### Vooruitblik

In de volgende lessen gaan we werken aan validatiestyling. Zelf wil ik daarnaast verder met de vormgeving van de radiobuttons.

Deze week stond vooral in het teken van een sterke basis leggen: het correct structureren van HTML, efficiënt leren werken en het toepassen van interactieve styling.

## Dag 3

Vandaag heb ik me gefocust op de styling van de website. Daarbij heb ik de legends en fieldsets aangepast. Ook heb ik toffe animaties toegevoegd aan de radiobuttons. Deze zien er nu uit als selectievlakken waarop je kunt klikken en die vervolgens de juiste styling weergeven. Dit heeft zeker een paar uur gekost, omdat je je gemakkelijk kunt verliezen in de details.

Morgen wil ik beginnen met de styling van de datepicker. Daarnaast ga ik me richten op het weergeven van bepaalde blokken en het verbergen van andere blokken.

## Dag 4

Weekly geek: wij kregen de opdracht om de <a> element te onderoeken en wat het allemaal inhoud en wat er voor nodig is om een <a> te maken en het te laten werken als een <a> zonder de <a> te gebruiken.

De dingen die je niet kan doen is

- visited styling
- openen in een nieuwe tabblad
- SEO vertrouwd
- browser gedrag zoals drag en drop van links
- rechtermuisknop met context
- url preview bij status bar
- en screen readers die link lijsten tonen op basis van echte links missen em soms of behandelen het anders.

Verder heb ik vandaag de progressive disclosure aan de praat gekregen maar nog niet per fieldset blok, en ik heb de datepicker kunnnen vormgeven met wat validati styling voor de inputs.

## WEEK 2

Deze week heb ik verder gewerkt aan de ontwikkeling en verfijning van de website, met een sterke focus op styling, gebruiksvriendelijkheid en interactieve elementen.

### Styling en interactie

Ik heb me beziggehouden met het verbeteren van de vormgeving van verschillende onderdelen van de interface. Zo heb ik de *legends* en *fieldsets* opnieuw gestyled om de structuur duidelijker en visueel aantrekkelijker te maken. Daarnaast heb ik animaties toegevoegd aan de radiobuttons. Deze zijn omgevormd tot selectievlakken waarop gebruikers kunnen klikken, waarna direct de bijbehorende styling zichtbaar wordt. Dit zorgde voor een modernere en gebruiksvriendelijkere uitstraling. Het uitwerken van deze details kostte meerdere uren, omdat kleine visuele aanpassingen veel precisie vereisen.

Ook ben ik gestart met de vormgeving van de datepicker. Hierbij heb ik meteen validatiestyling toegevoegd aan de invoervelden, zodat gebruikers duidelijke feedback krijgen bij foutieve of onvolledige invoer.

### Functionaliteit en weergave

Daarnaast heb ik gewerkt aan *progressive disclosure*. Deze functionaliteit zorgt ervoor dat bepaalde onderdelen van de pagina zichtbaar of juist verborgen worden op basis van gebruikersinteractie. De basis hiervan werkt inmiddels, al moet de functionaliteit nog verder worden uitgewerkt zodat dit correct per fieldset-blok toegepast kan worden.

### Weekly Geek – Onderzoek naar het `<a>`element

Tijdens de Weekly Geek heb ik onderzoek gedaan naar het HTML-`<a>`-element en wat erbij komt kijken om een link correct te laten functioneren. Ook heb ik gekeken of het mogelijk is om het gedrag van een `<a>`-element na te bootsen zonder daadwerkelijk een `<a>`-tag te gebruiken.

Hieruit bleek dat sommige functionaliteiten niet volledig te repliceren zijn zonder een echte link. Zo zijn de volgende zaken niet (goed) mogelijk:

- Styling voor bezochte links (_visited state_)
- Het openen van links in een nieuw tabblad
- Betrouwbare SEO-herkenning
- Standaard browsergedrag zoals drag-and-drop van links
- Rechtermuisknop-opties en contextmenu’s
- URL-preview in de statusbalk van de browser
- Optimale ondersteuning door screenreaders, zoals het tonen van linklijsten

Dit onderzoek gaf meer inzicht in het belang van semantische HTML en correcte toegankelijkheid.

### Vooruitblik

Volgende week ga ik verder met het verfijnen van de datepicker en richt ik me op het dynamisch tonen en verbergen van specifieke contentblokken.

Al met al stond deze week in het teken van detailverbetering, gebruikerservaring en het verdiepen van mijn kennis van HTML-functionaliteit.

## Dag 5

Vandaag ben ik bezig geweest met het maken van de validatie. Ik heb een begin gemaakt met de HTML- en CSS-validatie en ook met de JavaScript-validatie. De HTML- en CSS-validatie is wat makkelijker en werkt al redelijk goed. De JavaScript-validatie werkt nog niet helemaal; daar moet ik nog verder naar kijken.

Het valideren duurde langer dan verwacht en is moeilijker dan ik dacht. Tot nu toe heb ik alleen nog maar validaties voor tekstvelden en nog geen validaties voor radiobuttons.

Morgen ga ik verder met het valideren van de rest van het formulier en ik wil dan alle validaties afronden.

## Dag 6

Vandaag heb ik mij gefocust op validatie en heb ik het tweede pattern toegevoegd (vraag 2a).

Ik had in het begin moeite met het correct selecteren van het pattern. Uiteindelijk heb ik classes toegevoegd aan de HTML-elementen, zodat het voor mij overzichtelijker en beter leesbaar werd. Dit bleek een werkbare oplossing, al vraag ik me nog af of dit de beste aanpak is.Daarnaast heb ik de drie opties netjes naast elkaar geplaatst bij een bepaalde schermgrootte, zodat de layout er verzorgd uitziet op grotere schermen.

Ook heb ik mij verdiept in validatie met JavaScript. Ik heb de datepicker aangepast, waarbij de maximale datum is ingesteld op vandaag en de minimale datum op acht maanden terug. Dit komt overeen met de wettelijke termijn waarbinnen erfbelasting na een overlijden mag worden ingevoerd.

Volgende week ga ik mij verder verdiepen in JavaScript-validatie en aanvullende validatie voor verplichte invoervelden.

## Dag 7

Vandaag ben ik bezig geweest met het verbeteren van de progressive disclosure. Het is me gelukt om de vragen die niet meer van toepassing zijn (alle kinderen van het HTML-element) te sluiten, zodat de overbodige vragen niet meer zichtbaar zijn. Ook heb ik de vormgeving van (vraag 1 van 5 etc.) aangepast. Deze zijn nu als labels vormgegeven.

Verder ben ik bezig geweest met een verbetering in JavaScript om de foutmeldingen van niet-ingevulde verplichte invoervelden weer te geven. Dit is nog niet gelukt; daar ga ik morgen hulp voor vragen aan de docent.

## Dag 8

Vandaag heb ik nog gewerkt aan JavaScript validatie en ben ik naar victor geweest om daar vragen over te stellen omdat ik het niet begreep. Bleek dat ik de constante met de class naam een div selecteerde inplaats van de input. dit is nu gefixed.

Ik ben ook bezig geweest met CSS om een extra thema toe te voegen en ik heb de website responsive gemakt.
