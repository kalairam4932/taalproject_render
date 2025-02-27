import React from 'react'
import classNames from 'classnames'
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "../css/dashbord.css"
import { FaEye } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { BsFuelPumpFill } from "react-icons/bs";
import { LuPlaneLanding } from "react-icons/lu";
import { TbHours12 } from "react-icons/tb";
import { SiFueler } from "react-icons/si";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
    
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
     
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      }, 
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
    
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
     
      activity: 'Last week',
    },
  ]

  return (
    <>                    <div className='row' >

    
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card ">
                            <div className="card border-0 mb-4  p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal"> RVSN - Height Keeping
                                </h6>
                                <h5 className="mb-4 text-dark font-weight-bold"> ( Due &lt; 100 Hrs )</h5>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                      <linearGradient id="progress-order">
                                        <stop offset="0%" stopColor="#1579ff"/>
                                        <stop offset="100%" stopColor="#7922e5"/>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                    <CircularProgressbarWithChildren className="progress-order" value={85}
                                        
                                    
                                    >
                                      <div className='mt-2'>
                                      <FaEye className='FaEye'/>
                                        
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  
                                </div>
                                <p className="mt-4 mb-0">Completed</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">85%</h3>
                              </div>
                            </div>
                          </div>


                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal">LH and RH Main Landing</h6>
                                <h5 className="mb-4 text-dark font-weight-bold"> ( Due &lt; 100 Hours )</h5>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                    <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#b4ec51"/>
                                          <stop offset="100%" stopColor="#429321"/>
                                        </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                  <CircularProgressbarWithChildren   className="progress-order"
                                    value={50}
                                    styles={{

                                      path: { 
                                        stroke: "url(#progress-visitors)", // Apply gradient
                                        // strokeWidth: 4 // Reduce border thickness
                                      }, 
                                      trail: { 
                                        stroke: "#e0e0e0",
                                        // strokeWidth: 4 // Reduce trail thickness
                                      }
                                    }}>
                                      <div className='mt-2' >
                                      
                                      <LuPlaneLanding className='FaUserCircle' />
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  
                                </div>
                                <p className="mt-4 mb-0">Completed</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">50%</h3>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal"> Engine operating hours</h6>
                                <h5 className="mb-4 text-dark font-weight-bold"> ( Due &lt; 100 Hours)</h5>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                    <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#fad961"/>
                                          <stop offset="100%" stopColor="#f76b1c"/>
                                    </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                  <CircularProgressbarWithChildren
                                    className="progress-order"
                                    value={25}
                                    styles={{
                                      path: { stroke: "url(#progress-impressions)" }, // Apply gradient
                                      trail: { stroke: "#e0e0e0" }, // Change background color
                                    }}
                                  >
                                    <div className='mt-2'>
                                    {/* <IoIosAlert  className='IoIosAlert'/> */}
                                    <TbHours12  className='IoIosAlert'/>
                                    </div>
                                  </CircularProgressbarWithChildren>

                                  
                                </div>
                                <p className="mt-4 mb-0">Completed</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">25%</h3>
                              </div>
                            </div>
                          </div>

                          </div>


                          <div className='row '>

                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard" >
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal">Fuel MBT Test</h6>
                                <h5 className="mb-4 text-dark font-weight-bold">( Due &lt; 100 Days )</h5>
                                <div className="px-4 d-flex align-items-center">
                                <svg width="0" height="0">
                                    <defs>
                                      <linearGradient id="progress-order">
                                        <stop offset="0%" stopColor="#1579ff"/>
                                        <stop offset="100%" stopColor="#7922e5"/>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                    <CircularProgressbarWithChildren className="progress-order" value={65}
                                        
                                    
                                    >
                                      <div className='mt-2'>
                                     
                                      <BsFuelPumpFill className='FaUserCircle '/>
                                        
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  
                                  
                                </div>
                                <p className="mt-4 mb-0">Completed</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">65%</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal">Fuel MC </h6>
                                <h5 className="mb-4 text-dark font-weight-bold"> ( Due &lt; 100 Days )</h5>
                                <div className="px-4 d-flex align-items-center">
                                <svg width="0" height="0">
                                    <defs>
                                    <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#b4ec51"/>
                                          <stop offset="100%" stopColor="#429321"/>
                                        </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                  <CircularProgressbarWithChildren   className="progress-order"
                                    value={35}
                                    styles={{

                                      path: { 
                                        stroke: "url(#progress-visitors)", // Apply gradient
                                        // strokeWidth: 4 // Reduce border thickness
                                      }, 
                                      trail: { 
                                        stroke: "#e0e0e0",
                                        // strokeWidth: 4 // Reduce trail thickness
                                      }
                                    }}>
                                      <div className='mt-2' >
                                      
                                      <SiFueler className='FaUserCircle'/>
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  
                                </div>
                                <p className="mt-4 mb-0">Completed</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">35%</h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal">List of Required 14 CFR</h6>
                                <h5 className="mb-4 text-dark font-weight-bold">( Due &lt; 100 Days )</h5>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                    <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#fad961"/>
                                          <stop offset="100%" stopColor="#f76b1c"/>
                                    </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                  <CircularProgressbarWithChildren
                                    className="progress-order"
                                    value={15}
                                    styles={{
                                      path: { stroke: "url(#progress-impressions)" }, // Apply gradient
                                      trail: { stroke: "#e0e0e0" }, // Change background color
                                    }}
                                  >
                                    <div className='mt-2'>
                                    <IoIosAlert  className='IoIosAlert'/>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                  
                                </div>
                                <p className="mt-4 mb-0">Completed</p>
                                <h3 className="mb-0 font-weight-bold mt-2 text-dark">15%</h3>
                              </div>
                            </div>
                          </div>
                          

                          </div>
      {/* <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <WidgetsBrand className="mb-4" withCharts /> */}
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>User Log Details</CCardHeader>
            <CCardBody>


              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Country
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
                    {/* <CTableHeaderCell className="bg-body-tertiary text-center">
                      Payment Method
                    </CTableHeaderCell> */}
                    <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">Last login</div>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
