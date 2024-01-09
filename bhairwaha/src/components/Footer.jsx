import React, { useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext';

const Footer = (props) => {
  const { Footer, Links } = useContext(NoteContext);

  return (
    <>
      <section class="footer">
        <div class="container laptop-footer">
          <div class="row pb-4">
            <div class="col-sm-12 col-md-4 col-lg-5 address-div">
              <h4>Address</h4>
              <p>{Footer.Address},{Footer.City}</p>

              <div class="foot-btn-div">
                <Link to='' class="direction-btn">Direction</Link>
              </div>

            </div>
            <div class="col-sm-12 col-md-5 col-lg-4 d-flex flex-column" style={{ gap: '5px' }}>
              <h4>Contact</h4>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path
                    d="M1.58399 4.93194C1.29015 3.31997 2.65835 1.86957 4.74845 1.33738C5.11955 1.24295 5.52001 1.26978 5.86813 1.4124C6.21626 1.55503 6.48582 1.8027 6.62182 2.10489L7.29204 3.59248C7.3998 3.83176 7.41912 4.09236 7.34753 4.34084C7.27593 4.58932 7.11669 4.81436 6.89022 4.98709L4.89653 6.50737C4.7982 6.58247 4.72493 6.67745 4.68385 6.78307C4.64276 6.88869 4.63526 7.00135 4.66207 7.1101L4.67981 7.17678L4.72917 7.34414C4.77313 7.4852 4.83946 7.68397 4.93278 7.92122C5.11788 8.3925 5.41327 9.026 5.85288 9.65887C6.2925 10.2917 6.80461 10.8214 7.20258 11.1901C7.40984 11.382 7.62649 11.5668 7.85197 11.744L7.91367 11.7915C8.0134 11.8649 8.13429 11.9156 8.26459 11.9387C8.39488 11.9617 8.53013 11.9563 8.65716 11.9229L11.2378 11.2478C11.531 11.1711 11.845 11.1691 12.1397 11.2418C12.4343 11.3146 12.696 11.4589 12.8913 11.6562L14.1122 12.8886C14.6213 13.4016 14.5611 14.1556 13.9757 14.6089C12.3761 15.8484 10.1765 16.1029 8.64637 15.0796C6.77079 13.8219 5.18961 12.2881 3.98182 10.5546C2.76405 8.82232 1.95054 6.91512 1.58399 4.93194ZM6.27784 7.19409L7.93296 5.93221C8.38589 5.58676 8.70438 5.13668 8.84757 4.63972C8.99076 4.14276 8.95212 3.62157 8.7366 3.14299L8.06561 1.65541C7.79187 1.04764 7.24963 0.549531 6.54943 0.262636C5.84923 -0.0242588 5.04377 -0.0783456 4.29726 0.111401C1.70199 0.772479 -0.381934 2.70698 0.0592237 5.12366C0.454875 7.26656 1.33327 9.32817 2.64832 11.2003C3.95103 13.0696 5.65639 14.7237 7.67921 16.0798C9.97369 17.6123 13.0387 17.0897 15.0277 15.5476C15.5969 15.1066 15.9422 14.5017 15.9934 13.8563C16.0445 13.2109 15.7977 12.5736 15.3031 12.0743L14.0822 10.8419C13.6915 10.4472 13.1678 10.1585 12.5784 10.013C11.989 9.86741 11.3608 9.8716 10.7743 10.025L8.63248 10.5854C8.53661 10.5034 8.44276 10.4198 8.35098 10.3347C7.91081 9.92983 7.52137 9.48876 7.1887 9.01831C6.86484 8.54348 6.59996 8.04247 6.39816 7.52303C6.35537 7.41429 6.31525 7.30484 6.27784 7.19474"
                    fill="#282828" />
                </svg>&nbsp;
                {Footer.Phone}
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                  <mask id="path-1-inside-1_70_375" fill="white">
                    <path
                      d="M0.5 0.5V0C0.367392 0 0.240215 0.0526785 0.146447 0.146447C0.0526785 0.240215 0 0.367392 0 0.5H0.5ZM18.5 0.5H19C19 0.367392 18.9473 0.240215 18.8536 0.146447C18.7598 0.0526785 18.6326 0 18.5 0V0.5ZM0.5 1H18.5V0H0.5V1ZM18 0.5V12.5H19V0.5H18ZM16.5 14H2.5V15H16.5V14ZM1 12.5V0.5H0V12.5H1ZM2.5 14C2.10218 14 1.72064 13.842 1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H0C0 13.163 0.263392 13.7989 0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V14ZM18 12.5C18 12.8978 17.842 13.2794 17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V15C17.163 15 17.7989 14.7366 18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H18Z" />
                  </mask>
                  <path
                    d="M0.5 0.5V0C0.367392 0 0.240215 0.0526785 0.146447 0.146447C0.0526785 0.240215 0 0.367392 0 0.5H0.5ZM18.5 0.5H19C19 0.367392 18.9473 0.240215 18.8536 0.146447C18.7598 0.0526785 18.6326 0 18.5 0V0.5ZM0.5 1H18.5V0H0.5V1ZM18 0.5V12.5H19V0.5H18ZM16.5 14H2.5V15H16.5V14ZM1 12.5V0.5H0V12.5H1ZM2.5 14C2.10218 14 1.72064 13.842 1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H0C0 13.163 0.263392 13.7989 0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V14ZM18 12.5C18 12.8978 17.842 13.2794 17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V15C17.163 15 17.7989 14.7366 18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H18Z"
                    fill="white" />
                  <path
                    d="M18 13H19V12H18V13ZM2 14V15H3V14H2ZM17 15V14H16V15H17ZM0 13H1V12H0V13ZM0.5 0.5V1.5H1.5V0.5H0.5ZM18.5 0.5H17.5V1.5H18.5V0.5ZM0.5 1H-0.5V2H0.5V1ZM18.5 1V2H19.5V1H18.5ZM18 0.5V-0.5H17V0.5H18ZM16.5 15V16V15ZM1 0.5H2V-0.5H1V0.5ZM1.5 0.5V0H-0.5V0.5H1.5ZM0.5 -1C0.102175 -1 -0.279356 -0.841964 -0.56066 -0.56066L0.853553 0.853553C0.759786 0.947321 0.632609 1 0.5 1V-1ZM-0.56066 -0.56066C-0.841964 -0.279356 -1 0.102175 -1 0.5H1C1 0.632609 0.947321 0.759786 0.853553 0.853553L-0.56066 -0.56066ZM0 1.5H0.5V-0.5H0V1.5ZM18.5 1.5H19V-0.5H18.5V1.5ZM20 0.5C20 0.102177 19.842 -0.279354 19.5607 -0.56066L18.1464 0.853553C18.0527 0.759784 18 0.632607 18 0.5H20ZM19.5607 -0.56066C19.2794 -0.841965 18.8978 -1 18.5 -1V1C18.3674 1 18.2402 0.947322 18.1464 0.853553L19.5607 -0.56066ZM17.5 0V0.5H19.5V0H17.5ZM0.5 2H18.5V0H0.5V2ZM19.5 1V0H17.5V1H19.5ZM18.5 -1H0.5V1H18.5V-1ZM-0.5 0V1H1.5V0H-0.5ZM17 0.5V12.5H19V0.5H17ZM20 12.5V0.5H18V12.5H20ZM19 -0.5H18V1.5H19V-0.5ZM16.5 13H2.5V15H16.5V13ZM2.5 16H16.5V14H2.5V16ZM2 12.5V0.5H0V12.5H2ZM1 -0.5H0V1.5H1V-0.5ZM-1 0.5V12.5H1V0.5H-1ZM2.5 13C2.36739 13 2.24022 12.9473 2.14645 12.8536L0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V13ZM2.14645 12.8536C2.05268 12.7598 2 12.6326 2 12.5H0C0 13.163 0.263393 13.7989 0.732233 14.2678L2.14645 12.8536ZM-1 12.5C-1 13.4283 -0.631251 14.3185 0.0251263 14.9749L1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H-1ZM0.0251263 14.9749C0.681504 15.6313 1.57174 16 2.5 16V14C2.10218 14 1.72064 13.842 1.43934 13.5607L0.0251263 14.9749ZM17 12.5C17 12.6326 16.9473 12.7598 16.8536 12.8536L18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H17ZM16.8536 12.8536C16.7598 12.9473 16.6326 13 16.5 13V15C17.163 15 17.7989 14.7366 18.2678 14.2678L16.8536 12.8536ZM16.5 16C17.4283 16 18.3185 15.6313 18.9749 14.9749L17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V16ZM18.9749 14.9749C19.6313 14.3185 20 13.4283 20 12.5H18C18 12.8978 17.842 13.2794 17.5607 13.5607L18.9749 14.9749Z"
                    fill="#282828" mask="url(#path-1-inside-1_70_375)" />
                  <path d="M0.5 0.5L9.5 9.5L18.5 0.5" stroke="#282828" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>&nbsp;
                {Footer.Email}
              </a>
              <div class="social-div">
                <Link to={Links.Linkedin} target='_blank'><i class="fa-brands fa-linkedin-in"></i></Link>
                <Link to={Links.Instagram} target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57427 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57427 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09783 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09783 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z"
                      fill="#282828" />
                  </svg></Link>
                <Link to={Links.Facebook} target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M9.101 23.734V15.7247H6.627V12.0442H9.101V10.4583C9.101 6.35831 10.949 4.45835 14.959 4.45835C15.36 4.45835 15.914 4.5005 16.427 4.56173C16.8112 4.60141 17.1924 4.6668 17.568 4.75744V8.09468C17.3509 8.07435 17.133 8.0623 16.915 8.05855C16.6707 8.05218 16.4264 8.04917 16.182 8.04952C15.475 8.04952 14.923 8.14587 14.507 8.35965C14.2273 8.50048 13.9922 8.71664 13.828 8.98394C13.57 9.40549 13.454 9.9826 13.454 10.7424V12.0442H17.373L16.987 14.1549L16.7 15.7247H13.454V24C19.396 23.2794 24 18.2017 24 12.0442C24 5.39277 18.627 0 12 0C5.373 0 0 5.39277 0 12.0442C0 17.6929 3.874 22.4323 9.101 23.734Z"
                      fill="#282828" />
                  </svg>
                </Link>
                <Link to={Links.Tripadvisors} target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16"
                    fill="none">
                    <path
                      d="M12.006 1.41041e-06C9.336 1.41041e-06 6.668 0.814018 4.361 2.44309H0L1.963 4.65983C1.06861 5.50591 0.441617 6.6131 0.1644 7.83595C-0.112816 9.0588 -0.0272945 10.3401 0.409731 11.5116C0.846756 12.683 1.61484 13.6898 2.61309 14.3997C3.61134 15.1096 4.79306 15.4894 6.003 15.4892C7.51482 15.4905 8.97095 14.8969 10.078 13.8279L12 16L13.922 13.83C15.0284 14.8979 16.4834 15.4907 17.994 15.4892C19.585 15.4892 21.1108 14.8331 22.2359 13.6653C23.3611 12.4974 23.9935 10.9134 23.994 9.26152C23.9949 8.3952 23.8213 7.53826 23.4843 6.74576C23.1472 5.95327 22.6543 5.24274 22.037 4.65983L24 2.44309H19.65C17.3962 0.850066 14.7325 -0.0012648 12.006 1.41041e-06ZM12 2.03504C13.531 2.03504 15.063 2.34964 16.504 2.97262C13.943 3.99014 12 6.36989 12 9.14212C12 6.36885 10.058 3.99014 7.496 2.97262C8.92314 2.35503 10.4539 2.0357 12 2.03504ZM6.002 5.04815C6.53504 5.04815 7.06285 5.15716 7.55531 5.36895C8.04777 5.58075 8.49523 5.89118 8.87215 6.28252C9.24906 6.67387 9.54804 7.13846 9.75203 7.64978C9.95601 8.16109 10.061 8.70911 10.061 9.26256C10.061 9.816 9.95601 10.364 9.75203 10.8753C9.54804 11.3867 9.24906 11.8512 8.87215 12.2426C8.49523 12.6339 8.04777 12.9444 7.55531 13.1562C7.06285 13.368 6.53504 13.477 6.002 13.477C4.92549 13.477 3.89306 13.0329 3.13185 12.2426C2.37064 11.4522 1.943 10.3803 1.943 9.26256C1.943 8.14483 2.37064 7.07288 3.13185 6.28252C3.89306 5.49217 4.92549 5.04815 6.002 5.04815ZM17.994 5.05023C18.5268 5.05002 19.0545 5.15879 19.5469 5.37032C20.0392 5.58184 20.4866 5.89199 20.8635 6.28304C21.2404 6.6741 21.5395 7.1384 21.7436 7.64945C21.9477 8.1605 22.0528 8.70828 22.053 9.26152C22.0532 9.81476 21.9484 10.3626 21.7447 10.8738C21.541 11.385 21.2423 11.8496 20.8656 12.2409C20.489 12.6323 20.0418 12.9427 19.5496 13.1546C19.0574 13.3665 18.5298 13.4757 17.997 13.4759C16.9209 13.4763 15.8887 13.0329 15.1275 12.2431C14.3663 11.4533 13.9384 10.382 13.938 9.26463C13.9376 8.14732 14.3647 7.0756 15.1254 6.28524C15.886 5.49489 16.9179 5.05064 17.994 5.05023ZM6.002 7.05412C5.43762 7.05412 4.89635 7.2869 4.49728 7.70126C4.0982 8.11562 3.874 8.67761 3.874 9.2636C3.874 9.84958 4.0982 10.4116 4.49728 10.8259C4.89635 11.2403 5.43762 11.4731 6.002 11.4731C6.56638 11.4731 7.10765 11.2403 7.50672 10.8259C7.9058 10.4116 8.13 9.84958 8.13 9.2636C8.13 8.67761 7.9058 8.11562 7.50672 7.70126C7.10765 7.2869 6.56638 7.05412 6.002 7.05412ZM17.994 7.05412C17.4296 7.05412 16.8884 7.2869 16.4893 7.70126C16.0902 8.11562 15.866 8.67761 15.866 9.2636C15.866 9.84958 16.0902 10.4116 16.4893 10.8259C16.8884 11.2403 17.4296 11.4731 17.994 11.4731C18.5584 11.4731 19.0996 11.2403 19.4987 10.8259C19.8978 10.4116 20.122 9.84958 20.122 9.2636C20.122 8.67761 19.8978 8.11562 19.4987 7.70126C19.0996 7.2869 18.5584 7.05412 17.994 7.05412Z"
                      fill="#282828" />
                  </svg>
                </Link>
              </div>
            </div>
            <div class="col-sm-12 col-md-3 col-lg-3 d-flex flex-column foot-links">
              <h4>Links</h4>
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to={props.slug[0]}>About Us</Link></Nav.Link>
              <Nav.Link><Link to={props.slug[12]}>Rooms</Link></Nav.Link>
              <Nav.Link><Link to={props.slug[7]}>Gallery</Link></Nav.Link>
              <Nav.Link><Link to={props.slug[5]}>Facilities</Link></Nav.Link>
              <Nav.Link><Link to={props.slug[3]}>Contact Us</Link></Nav.Link>
            </div>
          </div>
        </div>

        <div className="mobile-foot-accordian">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Address</Accordion.Header>
              <Accordion.Body>
                <p>{Footer.Address},{Footer.City}</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Contact</Accordion.Header>
              <Accordion.Body>
                <div class="d-flex flex-column" style={{ gap: '5px' }}>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                      <path
                        d="M1.58399 4.93194C1.29015 3.31997 2.65835 1.86957 4.74845 1.33738C5.11955 1.24295 5.52001 1.26978 5.86813 1.4124C6.21626 1.55503 6.48582 1.8027 6.62182 2.10489L7.29204 3.59248C7.3998 3.83176 7.41912 4.09236 7.34753 4.34084C7.27593 4.58932 7.11669 4.81436 6.89022 4.98709L4.89653 6.50737C4.7982 6.58247 4.72493 6.67745 4.68385 6.78307C4.64276 6.88869 4.63526 7.00135 4.66207 7.1101L4.67981 7.17678L4.72917 7.34414C4.77313 7.4852 4.83946 7.68397 4.93278 7.92122C5.11788 8.3925 5.41327 9.026 5.85288 9.65887C6.2925 10.2917 6.80461 10.8214 7.20258 11.1901C7.40984 11.382 7.62649 11.5668 7.85197 11.744L7.91367 11.7915C8.0134 11.8649 8.13429 11.9156 8.26459 11.9387C8.39488 11.9617 8.53013 11.9563 8.65716 11.9229L11.2378 11.2478C11.531 11.1711 11.845 11.1691 12.1397 11.2418C12.4343 11.3146 12.696 11.4589 12.8913 11.6562L14.1122 12.8886C14.6213 13.4016 14.5611 14.1556 13.9757 14.6089C12.3761 15.8484 10.1765 16.1029 8.64637 15.0796C6.77079 13.8219 5.18961 12.2881 3.98182 10.5546C2.76405 8.82232 1.95054 6.91512 1.58399 4.93194ZM6.27784 7.19409L7.93296 5.93221C8.38589 5.58676 8.70438 5.13668 8.84757 4.63972C8.99076 4.14276 8.95212 3.62157 8.7366 3.14299L8.06561 1.65541C7.79187 1.04764 7.24963 0.549531 6.54943 0.262636C5.84923 -0.0242588 5.04377 -0.0783456 4.29726 0.111401C1.70199 0.772479 -0.381934 2.70698 0.0592237 5.12366C0.454875 7.26656 1.33327 9.32817 2.64832 11.2003C3.95103 13.0696 5.65639 14.7237 7.67921 16.0798C9.97369 17.6123 13.0387 17.0897 15.0277 15.5476C15.5969 15.1066 15.9422 14.5017 15.9934 13.8563C16.0445 13.2109 15.7977 12.5736 15.3031 12.0743L14.0822 10.8419C13.6915 10.4472 13.1678 10.1585 12.5784 10.013C11.989 9.86741 11.3608 9.8716 10.7743 10.025L8.63248 10.5854C8.53661 10.5034 8.44276 10.4198 8.35098 10.3347C7.91081 9.92983 7.52137 9.48876 7.1887 9.01831C6.86484 8.54348 6.59996 8.04247 6.39816 7.52303C6.35537 7.41429 6.31525 7.30484 6.27784 7.19474"
                        fill="#282828" />
                    </svg>&nbsp;
                    {Footer.Phone}
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                      <mask id="path-1-inside-1_70_375" fill="white">
                        <path
                          d="M0.5 0.5V0C0.367392 0 0.240215 0.0526785 0.146447 0.146447C0.0526785 0.240215 0 0.367392 0 0.5H0.5ZM18.5 0.5H19C19 0.367392 18.9473 0.240215 18.8536 0.146447C18.7598 0.0526785 18.6326 0 18.5 0V0.5ZM0.5 1H18.5V0H0.5V1ZM18 0.5V12.5H19V0.5H18ZM16.5 14H2.5V15H16.5V14ZM1 12.5V0.5H0V12.5H1ZM2.5 14C2.10218 14 1.72064 13.842 1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H0C0 13.163 0.263392 13.7989 0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V14ZM18 12.5C18 12.8978 17.842 13.2794 17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V15C17.163 15 17.7989 14.7366 18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H18Z" />
                      </mask>
                      <path
                        d="M0.5 0.5V0C0.367392 0 0.240215 0.0526785 0.146447 0.146447C0.0526785 0.240215 0 0.367392 0 0.5H0.5ZM18.5 0.5H19C19 0.367392 18.9473 0.240215 18.8536 0.146447C18.7598 0.0526785 18.6326 0 18.5 0V0.5ZM0.5 1H18.5V0H0.5V1ZM18 0.5V12.5H19V0.5H18ZM16.5 14H2.5V15H16.5V14ZM1 12.5V0.5H0V12.5H1ZM2.5 14C2.10218 14 1.72064 13.842 1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H0C0 13.163 0.263392 13.7989 0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V14ZM18 12.5C18 12.8978 17.842 13.2794 17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V15C17.163 15 17.7989 14.7366 18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H18Z"
                        fill="white" />
                      <path
                        d="M18 13H19V12H18V13ZM2 14V15H3V14H2ZM17 15V14H16V15H17ZM0 13H1V12H0V13ZM0.5 0.5V1.5H1.5V0.5H0.5ZM18.5 0.5H17.5V1.5H18.5V0.5ZM0.5 1H-0.5V2H0.5V1ZM18.5 1V2H19.5V1H18.5ZM18 0.5V-0.5H17V0.5H18ZM16.5 15V16V15ZM1 0.5H2V-0.5H1V0.5ZM1.5 0.5V0H-0.5V0.5H1.5ZM0.5 -1C0.102175 -1 -0.279356 -0.841964 -0.56066 -0.56066L0.853553 0.853553C0.759786 0.947321 0.632609 1 0.5 1V-1ZM-0.56066 -0.56066C-0.841964 -0.279356 -1 0.102175 -1 0.5H1C1 0.632609 0.947321 0.759786 0.853553 0.853553L-0.56066 -0.56066ZM0 1.5H0.5V-0.5H0V1.5ZM18.5 1.5H19V-0.5H18.5V1.5ZM20 0.5C20 0.102177 19.842 -0.279354 19.5607 -0.56066L18.1464 0.853553C18.0527 0.759784 18 0.632607 18 0.5H20ZM19.5607 -0.56066C19.2794 -0.841965 18.8978 -1 18.5 -1V1C18.3674 1 18.2402 0.947322 18.1464 0.853553L19.5607 -0.56066ZM17.5 0V0.5H19.5V0H17.5ZM0.5 2H18.5V0H0.5V2ZM19.5 1V0H17.5V1H19.5ZM18.5 -1H0.5V1H18.5V-1ZM-0.5 0V1H1.5V0H-0.5ZM17 0.5V12.5H19V0.5H17ZM20 12.5V0.5H18V12.5H20ZM19 -0.5H18V1.5H19V-0.5ZM16.5 13H2.5V15H16.5V13ZM2.5 16H16.5V14H2.5V16ZM2 12.5V0.5H0V12.5H2ZM1 -0.5H0V1.5H1V-0.5ZM-1 0.5V12.5H1V0.5H-1ZM2.5 13C2.36739 13 2.24022 12.9473 2.14645 12.8536L0.732233 14.2678C1.20107 14.7366 1.83696 15 2.5 15V13ZM2.14645 12.8536C2.05268 12.7598 2 12.6326 2 12.5H0C0 13.163 0.263393 13.7989 0.732233 14.2678L2.14645 12.8536ZM-1 12.5C-1 13.4283 -0.631251 14.3185 0.0251263 14.9749L1.43934 13.5607C1.15804 13.2794 1 12.8978 1 12.5H-1ZM0.0251263 14.9749C0.681504 15.6313 1.57174 16 2.5 16V14C2.10218 14 1.72064 13.842 1.43934 13.5607L0.0251263 14.9749ZM17 12.5C17 12.6326 16.9473 12.7598 16.8536 12.8536L18.2678 14.2678C18.7366 13.7989 19 13.163 19 12.5H17ZM16.8536 12.8536C16.7598 12.9473 16.6326 13 16.5 13V15C17.163 15 17.7989 14.7366 18.2678 14.2678L16.8536 12.8536ZM16.5 16C17.4283 16 18.3185 15.6313 18.9749 14.9749L17.5607 13.5607C17.2794 13.842 16.8978 14 16.5 14V16ZM18.9749 14.9749C19.6313 14.3185 20 13.4283 20 12.5H18C18 12.8978 17.842 13.2794 17.5607 13.5607L18.9749 14.9749Z"
                        fill="#282828" mask="url(#path-1-inside-1_70_375)" />
                      <path d="M0.5 0.5L9.5 9.5L18.5 0.5" stroke="#282828" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>&nbsp;
                    {Footer.Email}
                  </a>
                  <div class="social-div">
                    <Link to={Links.Linkedin} target='_blank'><i class="fa-brands fa-linkedin-in"></i></Link>
                    <Link to={Links.Instagram} target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57427 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57427 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09783 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09783 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z"
                          fill="#282828" />
                      </svg></Link>
                    <Link to={Links.Facebook} target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M9.101 23.734V15.7247H6.627V12.0442H9.101V10.4583C9.101 6.35831 10.949 4.45835 14.959 4.45835C15.36 4.45835 15.914 4.5005 16.427 4.56173C16.8112 4.60141 17.1924 4.6668 17.568 4.75744V8.09468C17.3509 8.07435 17.133 8.0623 16.915 8.05855C16.6707 8.05218 16.4264 8.04917 16.182 8.04952C15.475 8.04952 14.923 8.14587 14.507 8.35965C14.2273 8.50048 13.9922 8.71664 13.828 8.98394C13.57 9.40549 13.454 9.9826 13.454 10.7424V12.0442H17.373L16.987 14.1549L16.7 15.7247H13.454V24C19.396 23.2794 24 18.2017 24 12.0442C24 5.39277 18.627 0 12 0C5.373 0 0 5.39277 0 12.0442C0 17.6929 3.874 22.4323 9.101 23.734Z"
                          fill="#282828" />
                      </svg>
                    </Link>
                    <Link to={Links.Tripadvisors} target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16"
                        fill="none">
                        <path
                          d="M12.006 1.41041e-06C9.336 1.41041e-06 6.668 0.814018 4.361 2.44309H0L1.963 4.65983C1.06861 5.50591 0.441617 6.6131 0.1644 7.83595C-0.112816 9.0588 -0.0272945 10.3401 0.409731 11.5116C0.846756 12.683 1.61484 13.6898 2.61309 14.3997C3.61134 15.1096 4.79306 15.4894 6.003 15.4892C7.51482 15.4905 8.97095 14.8969 10.078 13.8279L12 16L13.922 13.83C15.0284 14.8979 16.4834 15.4907 17.994 15.4892C19.585 15.4892 21.1108 14.8331 22.2359 13.6653C23.3611 12.4974 23.9935 10.9134 23.994 9.26152C23.9949 8.3952 23.8213 7.53826 23.4843 6.74576C23.1472 5.95327 22.6543 5.24274 22.037 4.65983L24 2.44309H19.65C17.3962 0.850066 14.7325 -0.0012648 12.006 1.41041e-06ZM12 2.03504C13.531 2.03504 15.063 2.34964 16.504 2.97262C13.943 3.99014 12 6.36989 12 9.14212C12 6.36885 10.058 3.99014 7.496 2.97262C8.92314 2.35503 10.4539 2.0357 12 2.03504ZM6.002 5.04815C6.53504 5.04815 7.06285 5.15716 7.55531 5.36895C8.04777 5.58075 8.49523 5.89118 8.87215 6.28252C9.24906 6.67387 9.54804 7.13846 9.75203 7.64978C9.95601 8.16109 10.061 8.70911 10.061 9.26256C10.061 9.816 9.95601 10.364 9.75203 10.8753C9.54804 11.3867 9.24906 11.8512 8.87215 12.2426C8.49523 12.6339 8.04777 12.9444 7.55531 13.1562C7.06285 13.368 6.53504 13.477 6.002 13.477C4.92549 13.477 3.89306 13.0329 3.13185 12.2426C2.37064 11.4522 1.943 10.3803 1.943 9.26256C1.943 8.14483 2.37064 7.07288 3.13185 6.28252C3.89306 5.49217 4.92549 5.04815 6.002 5.04815ZM17.994 5.05023C18.5268 5.05002 19.0545 5.15879 19.5469 5.37032C20.0392 5.58184 20.4866 5.89199 20.8635 6.28304C21.2404 6.6741 21.5395 7.1384 21.7436 7.64945C21.9477 8.1605 22.0528 8.70828 22.053 9.26152C22.0532 9.81476 21.9484 10.3626 21.7447 10.8738C21.541 11.385 21.2423 11.8496 20.8656 12.2409C20.489 12.6323 20.0418 12.9427 19.5496 13.1546C19.0574 13.3665 18.5298 13.4757 17.997 13.4759C16.9209 13.4763 15.8887 13.0329 15.1275 12.2431C14.3663 11.4533 13.9384 10.382 13.938 9.26463C13.9376 8.14732 14.3647 7.0756 15.1254 6.28524C15.886 5.49489 16.9179 5.05064 17.994 5.05023ZM6.002 7.05412C5.43762 7.05412 4.89635 7.2869 4.49728 7.70126C4.0982 8.11562 3.874 8.67761 3.874 9.2636C3.874 9.84958 4.0982 10.4116 4.49728 10.8259C4.89635 11.2403 5.43762 11.4731 6.002 11.4731C6.56638 11.4731 7.10765 11.2403 7.50672 10.8259C7.9058 10.4116 8.13 9.84958 8.13 9.2636C8.13 8.67761 7.9058 8.11562 7.50672 7.70126C7.10765 7.2869 6.56638 7.05412 6.002 7.05412ZM17.994 7.05412C17.4296 7.05412 16.8884 7.2869 16.4893 7.70126C16.0902 8.11562 15.866 8.67761 15.866 9.2636C15.866 9.84958 16.0902 10.4116 16.4893 10.8259C16.8884 11.2403 17.4296 11.4731 17.994 11.4731C18.5584 11.4731 19.0996 11.2403 19.4987 10.8259C19.8978 10.4116 20.122 9.84958 20.122 9.2636C20.122 8.67761 19.8978 8.11562 19.4987 7.70126C19.0996 7.2869 18.5584 7.05412 17.994 7.05412Z"
                          fill="#282828" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Links</Accordion.Header>
              <Accordion.Body>
                <div class="d-flex flex-column foot-links">
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link to={props.slug[0]}>About Us</Link></Nav.Link>
                  <Nav.Link><Link to={props.slug[12]}>Rooms</Link></Nav.Link>
                  <Nav.Link><Link to={props.slug[7]}>Gallery</Link></Nav.Link>
                  <Nav.Link><Link to={props.slug[5]}>Facilities</Link></Nav.Link>
                  <Nav.Link><Link to={props.slug[3]}>Contact Us</Link></Nav.Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-7 col-lg-6 d-flex">
                <Nav.Link><Link to={props.slug[15]} >Terms & Condition </Link><span class="divider"> &#124; </span> </Nav.Link>
                <Nav.Link><Link to={props.slug[9]} >Privacy policy </Link><span class="divider"> &#124; </span> </Nav.Link>
                <Nav.Link><Link to={props.slug[12]} >Cancellation Policy</Link></Nav.Link>
              </div>
              <div class="col-sm-12 col-md-5 col-lg-6 text-center">
                <p>© 2023 eazotel | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
