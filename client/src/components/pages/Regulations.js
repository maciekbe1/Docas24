import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import euroDotation from '../../images/ue_dof_grafika.png';
import '../../styles/regulations.css'

class Regulations extends Component {

    render() {
        return (
            <div className="container regulations">
                <div className="row justify-content-md-center">
                    <div className="col-md-7 d-flex justify-content-center">
                        <img className="regulation-euro-image" alt="dotation" src={euroDotation}/>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="font-weight-bold text-justify">Firma MP NEW sp. z o.o. w LEŻAJSKU realizuje projekt w ramach działania 1.4.1 Wsparcie MŚP, poddziałanie 1.4.1 Dotacje Bezpośrednie, Regionalny Program Operacyjny Województwa Podkarpackiego na lata 2014-2020.</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <h3>Regulamin Serwisu docas24.com</h3>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Wstęp – art. 1</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">Niniejszy Regulamin został sporządzony w oparciu o przepisy prawne obowiązujące na terytorium Rzeczypospolitej Polskiej, a przedmiotem jego regulacji są warunki korzystania oraz funkcjonowania Serwisu internetowego docas24.com znajdującego się pod adresem internetowym docas24.com. Regulamin określa prawa i obowiązki Użytkowników Serwisu, a także prawa, obowiązki i zakres odpowiedzialności Zarządzającego Serwisem. Każdy potencjalny Użytkownik z chwilą rejestracji zobowiązany jest zapoznać się z treścią Regulaminu, a następnie może podejmować dalsze czynności po uprzednim wyrażeniu zgody i akceptacji wszystkich jego postanowień.</p>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Definicje – art. 2</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p>Użyte w Regulaminie pojęcia oznaczają odpowiednio:</p>
                        <p className="text-justify">2.1.	<span className="font-weight-bold">Regulamin Serwisu</span> oznacza niniejszy Regulamin normujący prawa i obowiązki Użytkowników oraz Zarządzającego Serwisem. Regulamin stanowi niniejszy dokument oraz załączniki będące jego integralną częścią.</p>
                        <p className="text-justify">2.2.	<span className="font-weight-bold">Serwis</span> oznacza portal informacyjny, figurujący pod adresem internetowym docas24.com, będący platformą internetową i umożliwiający Użytkownikom korzystanie z systemu Docas24, który jest serwisem internetowym wspierającym wypełnianie, składanie i archiwizowanie dokumentów elektronicznych przygotowywanych dla urzędów, banków i innych instytucji.</p>
                        <p className="text-justify">2.3.	<span className="font-weight-bold">Zarządzający Serwisem</span> — podmiot świadczący usługę udostępnienia zasobów Serwisu na rzecz Użytkowników, którym jest firma MP NEW sp. z o.o. w LEŻAJSKU z siedzibą w Rzeszowie przy ul. Tulipanowej 22; REGON: 367543704; NIP: 8161705454; KRS: 0000682921.</p>
                        <p className="text-justify">2.4.	<span className="font-weight-bold">Baza Kont Użytkowników Docas24,</span> oznacza zbiór danych udostępnionych przez Użytkowników, które są za ich zgodą gromadzone, przetwarzane w uporządkowany sposób w systemie informatycznym, na potrzeby świadczonych przez Zarządzającego Serwisem usług oraz dla potrzeb Serwisu Docas24.</p>
                        <p className="text-justify">2.5.	<span className="font-weight-bold">Konto</span> oznacza dostępne dla Użytkownika miejsce w Serwisie, za pośrednictwem, którego wprowadza on dane i zarządza nimi. Konto zawiera dobrowolnie udostępnione dane przez Użytkownika w Serwisie, które mogą być wykorzystywane przez Zarządzającego Serwisem na warunkach określonych w niniejszym Regulaminie wraz z załącznikami.</p>
                        <p className="text-justify">2.6.	<span className="font-weight-bold">Osoba</span> oznacza osobę fizyczną lub prawną, a także jednostkę organizacyjną nieposiadającą osobowości prawnej, której przepisy prawa przyznają zdolność prawną.</p>
                        <p className="text-justify">2.7.	<span className="font-weight-bold">Poczta</span> oznacza elektroniczną skrzynkę pocztową służącą do komunikacji między Użytkownikami.</p>
                        <p className="text-justify">2.8.	<span className="font-weight-bold">Użytkownik</span> oznacza pełnoletnią osobę fizyczną posiadającą pełną zdolność do czynności prawnych, która poprzez akceptację Regulaminu oraz rejestrację uzyskała dostęp do usług oferowanych przez Serwis Docas24. Użytkownikiem może być również osoba niepełnoletnia i/lub nieposiadająca pełnej zdolności do czynności prawnych, pod warunkiem uzyskania zgody przedstawiciela ustawowego. Użytkownik, aby móc w pełni korzystać z usług oferowanych przez Serwis musi dokonać rejestracji Konta.</p>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Techniczne warunki korzystania z Serwisu – art. 3</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">3.1	Właścicielem Serwisu jest firma MP NEW sp. z o.o. w LEŻAJSKU z siedzibą w Rzeszowie przy ul. Tulipanowej 22; REGON: 367543704; NIP: 8161705454; KRS: 0000682921.</p>
                        <p className="text-justify">3.2	W celu prawidłowego korzystania z Serwisów, Użytkownik powinien spełniać następujące warunki: posiadać komputer osobisty, tablet, telefon komórkowy lub smartfon, wyposażony w kartę sieciową lub modem umożliwiające dostęp do Internetu, posiadać przeglądarkę internetową obsługującą szyfrowane połączenia SSL, aplikację JavaScript i pliki cookies w najnowszej wersji, posiadać łącze z siecią Internet.</p>
                        <p className="text-justify">3.3	Nazwa Serwisu, jego koncepcja, wygląd graficzny, oprogramowanie oraz baza danych podlegają ochronie prawnej.</p>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Warunki uczestnictwa w Serwisie – art. 4</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">4.1	Użytkownikami Serwisu są jego Użytkownicy.</p>
                        <p className="text-justify">4.2	Utworzenie i korzystanie z Konta w Serwisie jest dobrowolne i bezpłatne.</p>
                        <p className="text-justify">4.3	Odpłatne usługi będą świadczone przez Zarządzającego Serwisem Serwisu na rzecz Użytkowników po złożeniu zamówienia i wniesieniu opłaty określonej w Załączniku nr 2.</p>
                        <p className="text-justify">4.4	Procedura rejestracji oraz utworzenie Konta następuje poprzez wypełnienie formularza rejestracyjnego dostępnego pod adresem internetowym docas24.com. Umowa o świadczenie usług drogą elektroniczną zostaje zawarta z chwilą rejestracji, na czas nieokreślony.</p>
                        <p className="text-justify">4.5	Użytkownik Konta zobowiązuje się do podania w formularzu rejestracyjnym danych zgodnych z prawdą.</p>
                        <p className="text-justify">4.6	Akceptacja Regulaminu przez Użytkownika Konta jest równoznaczna ze złożeniem oświadczeń następujących treści:</p>
                        <p className="text-justify pl-5">a.	Zapoznałem (zapoznałam) się z Regulaminem Serwisu i akceptuję wszystkie ich postanowienia wraz z załącznikami,</p>
                        <p className="text-justify pl-5">b.	Dobrowolnie przystąpiłem (przystąpiłam) do korzystania z usług Serwisu Docas24,</p>
                        <p className="text-justify pl-5">c.	Dane zawarte w formularzu rejestracyjnym oraz na Koncie są zgodne z prawdą,</p>
                        <p className="text-justify pl-5">d.	Wyrażam zgodę na przetwarzanie moich danych osobowych przez Zarządzającego Serwisem, przekazanych w formularzu rejestracyjnym oraz podawanych Zarządzającemu Serwisem dla celów należytego wykonania umowy o świadczeniu usług drogą elektroniczną,</p>
                        <p className="text-justify pl-5">e.	Wyrażam zgodę na przetwarzanie przez Zarządzającego Serwisem danych zawartych w formularzu rejestracyjnym oraz podawanych Zarządzającemu Serwisem w celach marketingowo promocyjnych, a w szczególności na otrzymywanie materiałów marketingowych i reklamowych. Informacje te mogą zostać przesyłane w dowolnej postaci określonej przez Zarządzającego Serwisem przy wykorzystaniu moich danych będących w posiadaniu Zarządzającego Serwisem,</p>
                        <p className="text-justify pl-5">f.	Wyrażam zgodę na otrzymywanie informacji systemowych, wiadomości od Zarządzającego Serwisem oraz informacji o utrudnieniach, zmianach czy przerwach technicznych w działaniu Serwisu,</p>
                        <p className="text-justify pl-5">g.	Umieszczenie na Koncie danych osobowych oraz informacji, dotyczących innych osób nastąpiło w sposób legalny, dobrowolny oraz za ich zgodą.</p>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Polityka Prywatności – art. 5</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">5.1	W momencie rejestracji Użytkownik wyraża zgodę na umieszczenie i przetwarzanie jego danych osobowych przez Zarządzającego Serwisem, zgodnie z warunkami określonymi w Polityce Prywatności Serwisu (załącznik nr 1).</p>
                        <p className="text-justify">5.2	Zarządzający Serwisem danych osobowych to firma MP NEW sp. z o.o. w LEŻAJSKU z siedzibą w Rzeszowie przy ul. Tulipanowej 22, która dokonuje przetwarzania danych osobowych Użytkowników zgodnie z przepisami ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych (t. jedn. Dz.U. z 2002 r., nr 101, poz. 926 ze zm.) oraz ustawy z dnia 18 lipca 2002 roku o świadczeniu usług drogą elektroniczną (Dz.U. nr 144, poz. 1204 ze zm.).</p>
                        <p className="text-justify">5.3	Dane zawarte w formularzu rejestracyjnym oraz podane Zarządzającemu Serwisem wykorzystywane będą przez Zarządzającego Serwisem do zawarcia, zmiany, rozwiązania umowy z Użytkownikiem oraz zapewnienia jak najwyższej jakości świadczonych usług w ramach Serwisu Docas24 w zakresie określonym Regulaminem Serwisu.</p>
                        <p className="text-justify">5.4	Użytkownik ma prawo wglądu do przetwarzanych danych w każdym czasie, jak również prawo do ich poprawiania oraz żądania ich usunięcia z Bazy Kont Użytkowników Docas24.</p>
                        <p className="text-justify">5.5	Użytkownik ma obowiązek aktualizować dane podane w formularzu rejestracyjnym oraz profilu użytkownika niezwłocznie po każdej zmianie tych danych.</p>
                        <p className="text-justify">5.6	W przypadku wątpliwości Zarządzającego Serwisem, co do zgodności z prawdą bądź aktualności podanych przez Użytkownika danych w formularzu rejestracyjnym, może on podjąć następujące czynności:</p>
                        <p className="text-justify pl-5">a.	Wezwać Użytkownika do niezwłocznego usunięcia nieprawdziwych danych bądź aktualizacji danych,</p>
                        <p className="text-justify pl-5">b.	Zablokować Konto Użytkownika do czasu wyjaśnienia sprawy.</p>
                        <p className="text-justify">5.7	Zarządzający Serwisem uprawniony jest do ujawnienia danych osobowych wyłącznie podmiotom upoważnionym na podstawie właściwych przepisów prawa, zgodnie z zasadami Polityki Prywatności Serwisu Docas24, postanowieniami niniejszego Regulaminu oraz obowiązującymi przepisami prawa.</p>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Warunki korzystania z Serwisu – art. 6</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">6.1	Niedopuszczalne są działania, które mogą utrudniać lub destabilizować działanie Serwisu. W przypadku stwierdzenia dopuszczenia się takich działań przez Użytkownika, Zarządzający Serwisem ma prawo do natychmiastowego zablokowania Konta Użytkownika. Działania Użytkownika polegające na próbie destabilizacji Serwisu stanowią czyn zabroniony w myśl obowiązujących przepisów. Zarządzający Serwisem może wówczas podjąć stosowne czynności, w tym zmierzające do naprawienia poniesionej przez niego szkody.</p>
                        <p className="text-justify">6.2	Zawierając umowę z Zarządzającym Serwisem, Użytkownik zobowiązuje się w szczególności do:</p>
                        <p className="text-justify pl-5">a.	Przestrzegania autorskich praw majątkowych oraz praw wynikających z rejestracji wynalazków, patentów, znaków towarowych, wzorów użytkowych i przemysłowych Zarządzającego Serwisem oraz innych Osób,</p>
                        <p className="text-justify pl-5">b.	Powstrzymywania się od jakichkolwiek działań, które naruszałyby prywatność innych Użytkowników, przede wszystkim polegających na zbieraniu, przetwarzaniu i rozpowszechnianiu informacji o innych Użytkownikach bez ich wyraźnej zgody, z wyjątkiem sytuacji, gdy czynności te są zgodne z przepisami prawa i postanowieniami niniejszego Regulaminu,</p>
                        <p className="text-justify pl-5">c.	Powstrzymywania się od jakichkolwiek działań, które mogłyby utrudniać lub zakłócać funkcjonowanie Serwisu, a także działań polegających na niszczeniu, zmianie, usuwaniu, uszkadzaniu, utrudnianiu dostępu do Kont innych Użytkowników,</p>
                        <p className="text-justify pl-5">d.	Nie podejmowania jakichkolwiek działań na szkodę Zarządzającego Serwisem, Użytkowników oraz innych Osób.</p>
                        <p className="text-justify">6.3	Użytkownik oświadcza, że wszelkie treści oraz dane osobowe, umieszczane przez niego w Serwisie, są prawdziwe i nie naruszają jakichkolwiek praw autorskich i osobistych. Użytkownik oświadcza również, że uzyskał zgodę innych osób na umieszczenie przez niego treści, przedstawiających lub odnoszących się do tych Osób.</p>
                        <p className="text-justify">6.4	Użytkownik, umieszczając na Koncie dane oraz inne treści, wyraża zgodę na wgląd w te informacje przez Zarządzającego Serwisem, a także upoważnia Zarządzającego Serwisem do ich wykorzystania zgodnie z art. 4.6 Regulaminu. W przypadku umieszczenia w Serwisie treści, mających charakter utworu w rozumieniu ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (t. jedn. Dz. U. z 2006 r., nr 90, poz. 631 ze zm.) Użytkownik udziela Zarządzającemu Serwisem nieodpłatnej, niewyłącznej licencji do wykorzystania udostępnionych danych dla potrzeb świadczenia usług w Serwisie Docas24, a także zrzeka się wszelkich roszczeń w stosunku do Zarządzającego Serwisem w przypadku ich wykorzystania, w tym kopiowania w celach związanych z działalnością Serwisu Docas24.</p>
                        <p className="text-justify">6.5	Zabrania się wykorzystywania Serwisu w sposób sprzeczny lub niewłaściwy z jego celem. </p>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Odpowiedzialność – art. 7</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">7.1	Zarządzający Serwisem zobowiązany jest do zapewnienia jak najwyższej jakości świadczonych usług. Zarządzający Serwisem nie ponosi odpowiedzialności za zakłócenia w funkcjonowaniu Serwisu Docas24 wywołane siłą wyższą, awarią sprzętu lub niedozwoloną ingerencją Użytkowników, nawet w przypadku, który spowodowałyby utratę danych na Kontach Użytkowników.</p>
                        <p className="text-justify">7.2	Zarządzający Serwisem nie ponosi odpowiedzialności za czasową niemożność korzystania przez Użytkowników z niektórych funkcji Serwisu, wynikającą z dokonywania zmian i ulepszeń w systemie. O przerwach technicznych i czasie ich trwania Użytkownicy zostaną powiadomieni.</p>
                        <p className="text-justify">7.3	Zarządzający Serwisem nie ponosi odpowiedzialności za treści przekazywane przez Użytkowników. Treści przekazywane przez Użytkowników nie są poglądami i opiniami twórców Serwisu. Zarządzający Serwisem zastrzega sobie jednak prawo do: redagowania, skracania tekstów bądź usuwania treści zabronionych przez prawo, wulgarnych, obraźliwych lub w inny sposób naruszających zasady współżycia społecznego. Użytkownik przesyłający treści zabronione może ponieść odpowiedzialność karną oraz cywilną względem Zarządzającego Serwisem bądź innych Osób.</p>
                        <p className="text-justify">7.4	Zarządzający Serwisem nie ponosi odpowiedzialności za działania innych Osób, ani za wykorzystanie przez nich danych Użytkowników niezgodnie z celem działania Serwisu.</p>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Warunki Reklamacji– art. 8</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">8.1	Wszelkie zakłócenia w funkcjonowaniu Serwisu mogą być reklamowane przez Użytkownika poprzez zgłoszenie tego Zarządzającemu Serwisem.</p>
                        <p className="text-justify">8.2	Zgłoszenia reklamacyjne będą rozpatrywane przez Zarządzającego Serwisem w terminie 14 dni od dnia zgłoszenia reklamacji. Zarządzający Serwisem zastrzega sobie jednak prawo do pozostawienia reklamacji bez rozpoznania, jeżeli wynikać one będą z nieznajomości postanowień niniejszego Regulaminu lub przepisów prawa.</p>
                        <p className="text-justify">8.3	Zarządzający Serwisem zastrzega sobie prawo do ingerencji w Konto Użytkownika w celu usunięcia nieprawidłowości w funkcjonowaniu Serwisu oraz zakłóceń lub problemów w funkcjonowaniu Konta.</p>
                        <p className="text-justify">8.4	Zarządzający Serwisem pozostawi bez rozpoznania składane reklamacje dotyczące usług świadczonych przez inne Osoby przy wykorzystaniu funkcji Serwisu. Zarządzający Serwisem nie ma również obowiązku przekazywania reklamacji podmiotowi właściwemu do realizacji reklamacji.</p>
                    </div>
                    <div className="col-md-7">
                        <p className="font-weight-bold text-center">Zapisy Końcowe – art. 9</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">9.1	Aktualny Regulamin jest dostępny pod adresem internetowym docas24.com.</p>
                        <p className="text-justify">9.2	Zarządzający Serwisem zastrzega sobie prawo do jednostronnej zmiany postanowień Regulaminu w każdej chwili i bez konieczności uzasadniania przyczyny.</p>
                        <p className="text-justify">9.3	W przypadku dokonania zmian w Regulaminie, Zarządzający Serwisem poinformuje o tym niezwłocznie Użytkowników poprzez publikację jednolitego tekstu Regulaminu na stronach Serwisu określonych w art. 9.1.</p>
                        <p className="text-justify">9.4	Jeżeli zostały wprowadzone zmiany do Regulaminu warunkiem dalszego korzystania z Serwisu jest zaakceptowanie Regulaminu w całości wraz z wprowadzonym zmianami. Po zapoznaniu się z nową treścią Regulaminu, Użytkownik składa oświadczenie następującej treści: Oświadczam, iż zapoznałem się z nową treścią Regulaminu i akceptuję jego wszystkie postanowienia. Złożenie oświadczenia jest jednoznaczne z oświadczeniem woli o kontynuowaniu umowy z Zarządzającym Serwisem. W przypadku braku akceptacji zmian w Regulaminie, Użytkownik rozwiązuje tym samym umowę z Zarządzającym Serwisem, co jest równoznaczne z usunięciem Konta.</p>
                        <p className="text-justify">9.5	Regulamin wchodzi w życie z dniem ogłoszenia na stronie internetowej Serwisu. Umowy zawarte pomiędzy Użytkownikami, a Zarządzającym Serwisem przed dniem wejścia w życie Regulaminu podlegają jego postanowieniom z chwilą akceptacji Regulaminu przez Użytkownika.</p>
                        <p className="text-justify">9.6	W razie zmiany lub unieważnienia, wskutek prawomocnego orzeczenia sądu, któregokolwiek z postanowień niniejszego Regulaminu, pozostałe jego postanowienia pozostają w mocy i wiążą strony.</p>
                        <p className="text-justify">9.7	Załączniki do Regulaminu:</p>
                        <p className="text-justify pl-5">Załącznik nr 1 — <Link to="/privacy-policy">Polityka Ochrony Prywatności;</Link></p>
                        <p className="text-justify pl-5">Załącznik nr 2 — <Link to="/payments">Wysokość opłat</Link> za usługi świadczone przez Zarządzający Serwisem na rzecz Użytkowników.</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Regulations;