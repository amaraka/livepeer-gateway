import React from 'react'
import close from '../../static/close.svg';
import classNames from 'classnames';

class Modal extends React.Component {
    getClassState = () =>
        // toDo animation via ReactCSSTransitionGroup
         classNames({
             modal: true,
             'modal-open': this.props.show
         })

    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        return (
          <section className={this.getClassState()}>
            <header className="modal-header">
              <button
                className="modal-btn-close withBorder withBorder-light circle"
                onClick={() => this.props.onClose()}
              >
                <i className="modal-btn-close-icon" dangerouslySetInnerHTML={{ __html: close }} />
              </button>
            </header>
            <content className="modal-content">
              {this.props.children}
            </content>
          </section>
        );
    }
}

export default Modal
