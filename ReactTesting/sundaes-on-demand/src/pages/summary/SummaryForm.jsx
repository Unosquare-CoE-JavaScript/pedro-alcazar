import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const SummaryForm = () => {
    const checkboxLabel= (
        <span>
            I agree to <span style={{color:'blue'}}>Terms and Conditions</span>
        </span>
    )

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