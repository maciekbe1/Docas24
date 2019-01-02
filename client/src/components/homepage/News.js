import React, { Component } from 'react';
import newsImage from '../../images/news.png'


class News extends Component {
    render() {
        return (
            <div className="container-fluid news">
                <h2>Aktualności</h2>
                <div className="row">
                    <div className="news-content">
                        <div className="news-square d-flex justify-content-center align-items-center">
                            <img alt="news" src={newsImage} />
                        </div>
                        <div className="news-text">
                            <h3>Nowe formularze - 28.12.2018 r.</h3>
                            <p>Dodaliśmy nowe formularze - wnioski dla pracowników. Od dziś możesz w łatwy sposób tworzyć różnego rodzaju wnioski dotyczące urlopów i zmian godzin pracy.</p>
                        </div>
                    </div>
                    <div className="news-content">
                        <div className="news-square d-flex justify-content-center align-items-center">
                        <img alt="news" src={newsImage} />
                        </div>
                        <div className="news-text">
                            <h3>Automatyczne wypełnianie danych</h3>
                            <p>Nuży Cię ciągłe wpisywanie tych samych danych osobowych w różnego rodzaju dokumentach? W Docas24 wystarczy, że uzupełnisz je jeden raz, a następnie automatycznie pojawią się w kolejnych formularzach.</p>
                        </div>
                    </div>
                    <div className="news-content">
                        <div className="news-square d-flex justify-content-center align-items-center">
                            <img alt="news" src={newsImage} />
                        </div>
                        <div className="news-text">
                            <h3>Witamy na Docas24.com!</h3>
                            <p>Witamy na Docas24 - nowym serwisie, który w szybki i intuicyjny sposób pomoże Ci kompleksowo zarządzać dokumentami - od ich wypełnienia, przez podpisanie aż po archiwizację. Zapraszamy do skorzystania z naszych usług.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default News;