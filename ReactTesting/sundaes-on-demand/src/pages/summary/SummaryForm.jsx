import { useState } from 'react';
import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap';
const SummaryForm = () => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Content>
                No ice cream will actually be delivered
            </Popover.Content>
        </Popover>

    );

    const checkboxLabel= (
        <span>
            I agree to 
            <OverlayTrigger placement="right" overlay={popover}>
                <span style={{color: 'blue'}}>Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    );

    const[tcChecked, setTcChecked] = useState(false);  


    return (
        <Form>
            <Form.Group controlId="terms and conditions">
                <Form.Check
                    type="checkbox"
                    label={checkboxLabel}
                    onChange={(e) => {setTcChecked(e.target.checked)}}
                    />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                disabled = {!tcChecked}>
                    Confirm Order
            </Button>
        </Form>
    )
}
export default SummaryForm;