import React, { Component } from 'react';
import euroDotation from '../../images/ue_dof_grafika.png';


class Payments extends Component {

    render() {
        return (
            <div className="container privacy-policy">
                <div className="row justify-content-md-center">
                    <div className="col-md-7 d-flex justify-content-center">
                        <img className="regulation-euro-image" alt="dotation" src={euroDotation}/>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="font-weight-bold text-justify">Firma MP NEW sp. z o.o. w LEŻAJSKU realizuje projekt w ramach działania 1.4.1 Wsparcie MŚP, poddziałanie 1.4.1 Dotacje Bezpośrednie, Regionalny Program Operacyjny Województwa Podkarpackiego na lata 2014-2020.</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <h3 className="text-justify">Załącznik nr 2 do Regulaminu Serwisu docas24.com – Wysokość opłat za usługi świadczone przez Zarządzającego Serwisem na rzecz Użytkowników</h3>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">Utworzenie i korzystanie z Konta w Serwisie jest dobrowolne i bezpłatne. Odpłatne usługi będą świadczone przez Zarządzającego Serwisem Serwisu na rzecz Użytkowników po złożeniu zamówienia i wniesieniu opłaty określonej poniżej.</p>
                        <p className="text-justify">Dostępne pakiety płatne dla indywidualnych Użytkowników:</p>
                    </div>
                    <div className="col-md-7 my-5">
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col"><h5 className="font-weight-bold">Nazwa pakietu</h5></th>
                                    <th scope="col"><h5 className="font-weight-bold">Rodzaj pakietu</h5></th>
                                    <th scope="col"><h5 className="font-weight-bold">Cena pakietu</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><h5 className="font-weight-bold">STANDARD</h5></th>
                                    <td><h5>Miesięczny(30 dni)</h5></td>
                                    <td><h5>8,13 PLN</h5></td>
                                </tr>
                                <tr>
                                    <th scope="row"><h5 className="font-weight-bold">STANDARD</h5></th>
                                    <td><h5>Roczny (365 dni)</h5></td>
                                    <td><h5>100 PLN</h5></td>
                                </tr>
                                <tr>
                                    <th scope="row"><h5 className="font-weight-bold">PREMIUM</h5></th>
                                    <td><h5>Miesięczny(30 dni)</h5></td>
                                    <td><h5>25 PLN</h5></td>
                                </tr>
                                <tr>
                                    <th scope="row"><h5 className="font-weight-bold">PREMIUM</h5></th>
                                    <td><h5>Roczny (365 dni)</h5></td>
                                    <td><h5>250 PLN</h5></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-7 my-5">
                        <p className="text-justify">Administrator zastrzega sobie prawo do aktualizacji cen oraz uzupełnienia danych wskazanych w niniejszym załączniku.</p>
                        <p className="text-justify">Podane ceny są cenami brutto.</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Payments;