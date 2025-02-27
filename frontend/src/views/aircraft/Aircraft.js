import React, { useState } from 'react'
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from 'react-hot-toast';

const Aircraft = () => {

    const [formData, setFormData] = useState({
        regno: "",
        category: "",
        owner: "",
        hourtype: "",
        operator: "",
        manufacture: "",
        model: "",
        serialno: "",
        maintananceservice: "",
        warrantystartdate: "",
        warrantyenddate: "",
        aircraftunderwarranty: false,
    })

    const handleChange = (e) => {
        const {name,value,type,checked}= e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
          });
    }



        // API function to send data
        const postAircraftData = async (data) => {
            const response = await axios.post("https://taal.onrender.com/api/aircraft/postaircraftdata", data);
            return response.data;
        };

        // useMutation for API call
        const mutation = useMutation({
            mutationFn: postAircraftData,
            onSuccess: (data) => {

                toast.success("Data Submited")
                setFormData({
                    regno: "",
                    category: "",
                    owner: "",
                    hourtype: "",
                    operator: "",
                    manufacture: "",
                    model: "",
                    serialno: "",
                    maintananceservice: "",
                    warrantystartdate: "",
                    warrantyenddate: "",
                    aircraftunderwarranty: false,
                })
                
                
             
            },
            onError: (error) => {
              alert("Error saving aircraft data.");
              console.error("Error:", error);
            }
          });
          

    const handleSubmit =(e) => {
        e.preventDefault();
        mutation.mutate(formData);
       
    }

  return (
    <div className="container mt-4 border p-4 rounded shadow">
        <form onSubmit={handleSubmit}>
            <h4 className="text-center mb-3">Aircraft (VT-TVM)</h4>
            <div className='row'>
                {/* Aircraft Registration Details */}
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5'>
                    <h6 className="bg-primary text-white text-center p-2 rounded">Aircraft Registration Details</h6>
                    <div className='row '>
                        <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                            <Form.Group >
                                <label className='mt-3'>Reg No</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Category</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Owner</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-4'>Hour Type</label>
                            </Form.Group>
                            <Form.Group >
                                <label className='mt-3'>Operator/Customer</label>
                            </Form.Group>
                        </div>
                        <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                            <Form.Group className='mt-2'>
                                <input type="text" name='regno' className='form-control' value={formData.regno} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='category' className='form-control' value={formData.category} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='owner' className='form-control' value={formData.owner} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='hourtype' className='form-control'value={formData.hourtype} onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <input type="text" name='operator' className='form-control' value={formData.operator} onChange={handleChange} />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='row my-2'>
                        <h6 className="bg-primary text-white text-center p-2 rounded">Aircraft Details</h6>
                        <div className='row '>
                            <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                                <Form.Group >
                                    <label className='mt-3'>Manufacture</label>
                                </Form.Group>
                                <Form.Group >
                                    <label className='mt-3'>Model</label>
                                </Form.Group>
                                <Form.Group >
                                    <label className='mt-3'>Serial No</label>
                                </Form.Group>
                                <Form.Group >
                                    <label className='mt-4'>Maintanance Service</label>
                                </Form.Group>
                            </div>
                            <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                                <Form.Group className='mt-2'>
                                    <input type="text" name='manufacture' className='form-control' value={formData.manufacture} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className='mt-2'>
                                    <input type="text" name='model' className='form-control' value={formData.model} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className='mt-2'>
                                    <input type="text" name='serialno' className='form-control' value={formData.serialno} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className='mt-2'>
                                    <input type="text" name='maintananceservice' className='form-control' value={formData.maintananceservice} onChange={handleChange} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='row my-2 '>
                            <h6 className="bg-primary text-white text-center p-2 rounded">Warranty Details</h6>
                            <div className='row '>
                                <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5'>
                                    <Form.Group >
                                        <label className='mt-3'>Is Aircraft Under Warranty?</label>
                                    </Form.Group>
                                    <Form.Group >
                                        <label className='mt-3'>Warranty Start Date</label>
                                    </Form.Group>
                                    <Form.Group >
                                        <label className='mt-3'>Warranty End Date</label>
                                    </Form.Group>
                                </div>
                                <div className='col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7'>
                                    <Form.Group className='mt-2 mb-4'>
                                        <input type="checkbox" name='aircraftunderwarranty' label="Is Aircraft Under Warranty?" value={formData.aircraftunderwarranty} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className='mt-4'>
                                        <input type="date" name='warrantystartdate' className='form-control' value={formData.warrantystartdate} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className='mt-4'>
                                        <input type="date" name='warrantyenddate' className='form-control' value={formData.warrantyenddate} onChange={handleChange} />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <h6 className="bg-primary text-white text-center p-2 rounded">Tech log Page</h6>
                            <div className='d-flex align-items-center'>
                                <label className='mx-2'>
                                    <input type="checkbox" />
                                    Single Sector
                                </label>
                                <label className='mx-2'>
                                    <input type="checkbox" />
                                    Multiple Sector
                                </label>
                                <label className='mx-2'>
                                    <input type="checkbox" />
                                    Only Airbome Time Entry
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7'>
                    {/* Total Weight and Capacity */}
                    <Row className="mb-3 text-center">
                        <Col md={12} className="bg-primary text-white p-2 rounded">
                        Total Weight and Capacity
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Empty Weight</Form.Label>
                            <Form.Control type="text" value="3524.47 KG" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>All Up Weight</Form.Label>
                            <Form.Control type="text" value="5699.00 KG" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Fuel Capacity</Form.Label>
                            <Form.Control type="text" value="2200.00 Ltr" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Empty Weight</Form.Label>
                            <Form.Control type="text" value="3524.47 KG" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>All Up Weight</Form.Label>
                            <Form.Control type="text" value="5699.00 KG" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Fuel Capacity</Form.Label>
                            <Form.Control type="text" value="2200.00 Ltr" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Empty Weight</Form.Label>
                            <Form.Control type="text" value="3524.47 KG" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>All Up Weight</Form.Label>
                            <Form.Control type="text" value="5699.00 KG" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Fuel Capacity</Form.Label>
                            <Form.Control type="text" value="2200.00 Ltr" readOnly />
                        </Form.Group>
                        </Col>
                    </Row>
                    {/* Time Since New Values */}
                    <Row className="mb-3">
                        <Col md={12} className="bg-primary text-white p-2 rounded mt-3 mx-1">
                        Time Since New Values of Aircraft (TNS)
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>As On Date</Form.Label>
                            <Form.Control type="text" value="19-Feb-2011" readOnly />
                        </Form.Group>
                        </Col>
                        <Col md={12}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Periods</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Hours</td>
                                <td>42.08</td>
                            </tr>
                            <tr>
                                <td>Manufacturing Date</td>
                                <td>21-Jan-2011</td>
                            </tr>
                            <tr>
                                <td>Landings</td>
                                <td>28</td>
                            </tr>
                            </tbody>
                        </Table>
                        </Col>
                    </Row>

                    {/* Warranty Details */}
                    <Row className="mb-3">
                        <Col md={12} className="bg-primary text-white p-2 rounded">
                        Warranty Details
                        </Col>
                        <Col md={4}>
                        <Form.Check type="checkbox" label="Is Aircraft Under Warranty?" />
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Warranty Start Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group>
                            <Form.Label>Warranty End Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        </Col>
                    </Row>

                    {/* Other Details */}
                    <Row className="mb-3">
                        <Col md={12} className="bg-primary text-white p-2 rounded">
                        Other Details
                        </Col>
                        <Col md={4}>
                        <Form.Check type="checkbox" label="Aircraft not in use" />
                        </Col>
                        <Col md={4}>
                        <Form.Check type="checkbox" label="Mark this Aircraft as ReadOnly" />
                        </Col>
                        <Col md={4}>
                        <Form.Check type="checkbox" label="Is Flight Log Under UTC?" />
                        </Col>
                    </Row>

                    {/* Buttons */}
                    <Row className="mt-3 text-center">
                        <Col>
                        {/* <Button variant="primary" className="me-2">
                            Attach Dent and Buckle Chart
                        </Button> */}
                        {/* <Button variant="danger" className="me-2">
                            Remove Attachment
                        </Button> */}
                        <Button type='submit' variant="success" className="me-2">
                            Save
                        </Button>
                        {/* <Button variant="secondary" className="me-2">
                            Print
                        </Button> */}
                        <Button variant="dark">Close</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Aircraft