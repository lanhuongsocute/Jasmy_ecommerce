import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
class Notification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Fragment>
         <div className="text-center">
            <h2>Không có thông báo</h2>
            <img src="https://i.pinimg.com/originals/79/ee/27/79ee27e736c6876c0a5ab3cb07dc4389.gif"
                alt="this slowpoke moves" width="250" />
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <h6>
              <i className="fa fa-bell"></i> Date:11/05/2021
            </h6>
          </Modal.Header>
          <Modal.Body>
            <h6>Woohoo, you're reading this text in a modal!</h6>
            <p>
              Each course has been hand-tailored to teach a specific skill. I
              hope you agree! Whether you’re trying to learn a new skill from
              scratch or want to refresh your memory on something you’ve learned
              in the past, you’ve come to the right place.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Notification;
