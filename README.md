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
