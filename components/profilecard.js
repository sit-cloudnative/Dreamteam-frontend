import { Form, FormGroup, Label, Input } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Row, Col } from 'reactstrap';


export default (props) => (
    <Card>
        {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
        <CardBody>
            <h3>My Profile</h3>
            <hr />
            <Form>
                <FormGroup>
                    <Label for="firstname">Firstname</Label>
                    <Input type="text" name="firstname" value="Tanapat" disabled />
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">Lastname</Label>
                    <Input type="text" name="lastname" id="lastname" value="Choochot" disabled />
                </FormGroup>
                <FormGroup>
                    <Label for="Year">Year</Label>
                    <Input type="number" name="year" id="Year" value="3" disabled />
                </FormGroup>
                <FormGroup>
                    <Label for="Department">Department</Label>
                    <Input type="text" name="department" id="department" value="IT" disabled />
                </FormGroup>
                <FormGroup>
                    <Label for="Faculty">Faculty</Label>
                    <Input type="text" name="faculty" id="faculty" value="SIT" disabled />
                </FormGroup>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <Button color="primary" size="lg" block>Back to Home</Button>
                    </Col>
                </Row>
            </Form>
        </CardBody>
    </Card>
)