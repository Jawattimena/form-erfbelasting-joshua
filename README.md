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

## Dag 5

Vandaag ben ik bezig geweest met het maken van de validatie. Ik heb een begin gemaakt met de HTML- en CSS-validatie en ook met de JavaScript-validatie. De HTML- en CSS-validatie is wat makkelijker en werkt al redelijk goed. De JavaScript-validatie werkt nog niet helemaal; daar moet ik nog verder naar kijken.

Het valideren duurde langer dan verwacht en is moeilijker dan ik dacht. Tot nu toe heb ik alleen nog maar validaties voor tekstvelden en nog geen validaties voor radiobuttons.

Morgen ga ik verder met het valideren van de rest van het formulier en ik wil dan alle validaties afronden.
