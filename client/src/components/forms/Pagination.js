import React, { Component } from 'react';

class Pagination extends Component {
    pages = () =>  {
        let items = [];
        for (let i = 0; i < this.props.coutPage; i++) {
          items.push(i);
        }
        return items.map((item, index) => {
            return <li className="page-link" key={index} onClick={this.props.pager}>{item+1}</li>
        });
    }
    render() {
        
        return (
            <div className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className="page-link" aria-label="Previous" onClick={this.props.firstPage}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </li>
                    {this.pages(this)}
                    <li className="page-link" aria-label="Next" onClick={this.props.lastPage}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </li>
                </ul>
            </div>
        );
    }

}

export default Pagination;