import React, { Component } from 'react';

class VideoList extends Component {
    
    state = {
        count: 4
    }

    showMore = () => {
        this.setState({ count: this.state.count + 3})
    }
    
    render() {
        const { video } = this.props;
        return (
            <section className='container video-tutorials-filter'>
                <div className="row flex-wrap">
                    {video.slice(0, this.state.count).map(video => {
                        if (video.id === 1) {
                            return (
                               <div className={video.type + " first-video"} key={video.id}>
                                   <div className="first-video-content">
                                       <i className="fas fa-play-circle fa-10x"></i>
                                   </div>
                                   <h3 className="font-weight-bold">{video.name}</h3>
                                   <p className="font-weight-bold">{video.description}</p>
                               </div>
                           )
                        } else {
                             return (
                                <div className={video.type + " next-video"} key={video.id}>
                                    <div className="next-video-content">
                                        <i className="fas fa-play-circle fa-4x"></i>
                                    </div>
                                    <h5 className="font-weight-bold">{video.name}</h5>
                                </div>
                            )
                        }
                    })}
                </div>
            </section>
        );
    }

}

export default VideoList;