import React from 'react';
import { Modal, Button } from 'antd';

class OurModal extends React.Component{
    state = {
        visible: false
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

    handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
    render() {
        return(
        <div>
        <Button type="primary" onClick={this.showModal}>
            {this.props.textButton}
        </Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer ={[]}
        >
            {this.props.children}
        </Modal>
      </div>
    )
    }

}
export default OurModal;