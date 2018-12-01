import { Form, FormGroup, Label, Input } from 'reactstrap';
import {Card,CardBody,Button} from 'reactstrap';
import { Row, Col } from 'reactstrap';


export default ({profile}) => (
    <Card className="profileCard">
        <CardBody>
            <h3>My Profile</h3>
            <hr />
            <Form>
                <FormGroup>
                    <Label for="firstname">Firstname</Label>
                    <Input type="text" name="firstname" value={profile.firstname} readOnly />
                </FormGroup>
                <FormGroup>
                    <Label for="lastname">Lastname</Label>
                    <Input type="text" name="lastname" id="lastname" value={profile.lastname} readOnly />
                </FormGroup>
                <FormGroup>
                    <Label for="Year">Year</Label>
                    <Input type="number" name="year" id="Year" value={profile.year} readOnly />
                </FormGroup>
                <FormGroup>
                    <Label for="Department">Department</Label>
                    <Input type="text" name="department" id="department" value={profile.department} readOnly />
                </FormGroup>
                <FormGroup>
                    <Label for="Faculty">Faculty</Label>
                    <Input type="text" name="faculty" id="faculty" value={profile.faculty} readOnly />
                </FormGroup>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <Button className="backToHome"  size="lg" block>Back to Home</Button>
                    </Col>
                </Row>
            </Form>
        </CardBody>
    </Card>
)