import React, { Component } from 'react';
import VideoList from './VideoList';
import lines_right from '../../images/01_Home_bg_line_2.png';

class VideoTutorials extends Component {
    
    state = {
        activeItem: 'Wszystkie',
        video: this.props.video,
        items: ['Wszystkie', 'Wypełnianie formularzy', 'Panel użytkownika', 'Rejestracja', 'Płatności']
    }
    
    findForm = (item) => {
        if (item === 'Wszystkie') {
            this.setState({video: this.props.video, activeItem: item});
        } else {
            this.setState({activeItem: item, video: this.props.video.filter(form => {
                return form.type === item;
            })});
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className=" row video-tutorials">
                <img src={lines_right} alt="lines" />
                    <h2 className="text-center">Poradniki wideo</h2>
                        <div className="video-tutorials-btns-filters">
                            {this.state.items.map(item => {
                                return (
                                    <button className={this.state.activeItem === item ? 'btn btn-primary' : 'btn btn-link'} key={item} onClick={() => this.findForm(item)}>{item}</button>
                                )
                            })}
                        </div>
                        <VideoList video={this.state.video} />
                </div>
            </div>
        );
    }

}

export default VideoTutorials;