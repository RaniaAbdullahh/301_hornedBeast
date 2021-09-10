import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    };
  }
  clickHandler = () => {
    this.setState({
      clicked: this.state.clicked + 1,
    });

    console.log(this.state);
  };
  selectHandler=()=>{
    console.log('hii Rania');
    // console.log(this.props.title,this.props.image_url,this.props.description);
    this.props.selectHandler(this.props.title,this.props.image_url,this.props.description);
    this.props.show();
  }

  render() {
    const mystyle = {
      width: "433px",
      height: "250px",
      border: "1px solid red",
    };

    return (
      <>
        <Col>
          <Card  >
            <Card.Img
              variant="top"
              src={this.props.image_url}
              style={mystyle}
              onClick={this.clickHandler}
            />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
              <Card.Text>
                {" "}
                <span>💗 : {this.state.clicked}</span>🦄 :{this.props.horns}
              </Card.Text>
              <Button variant="secondary" size="lg" active onClick={this.selectHandler} >
                show more{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default HornedBeasts;
