# Raport/sprawozdanie

Repozytorium zawiera aplikację wdrożoną na platformę Azure App Service.

Zadaniem aplikacji jest zapisywanie linków RSS, parsowanie z nich treści informacji oraz budowa i wysłanie maila z tymi informacjami na dowolny adres email podany w aplikacji.

Aplikacja została wdrożona na platformę Azure App Service i uruchamia się. Aplikacja wykorzystuje także bazę danych utworzoną za pomoca usługi Azure cosmosDB.

![Alt text](./raport/Azure_services.PNG?raw=true "Services")

Działanie wdrożonej aplikacji:

![Alt text](./raport/App_works.PNG?raw=true "Working")

## Testy ociazeniowe

Aplikacja została poddana testom obciążeniowym z użyciem aplikacji jmeter.

Wyniki testów prezentują się następująco:

Ustawienia Jmeter:

![Alt text](./raport/Capture1.PNG?raw=true "Settings")

Test 1

![Alt text](./raport/Capture3.PNG?raw=true "Result1")


Test 2

![Alt text](./raport/Capture.PNG?raw=true "Result2")


Autor: Piotr Burdka, nr indeksu: 65901
