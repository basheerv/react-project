import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../asset/css/custom.css';
export default function TopBanner() {
    return (
        <>
            <Container className="topFixedBanner p-0" >
              <div className="topBannerOverlay">
                <Container className="topContent">
                <Row>
                    <Col className="text-center">
                     <div className="mx-auto">
                    <h1 className="topTitle">Easy Learning..</h1>
                    <h4 className="topSubTitle">Easy Learning..</h4>
                    </div>
                    <Button variant="primary">Learn More</Button>
                    
               </Col>
                </Row>
                </Container>
              </div>
            </Container>
        </>
    )
}
