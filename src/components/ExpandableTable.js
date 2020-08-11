import React, { useState } from 'react';
import {
  Collapse,
  Button,
  Table,
  Badge,
  UncontrolledTooltip,
} from 'reactstrap';

const ExpandableTable = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button color='primary' onClick={toggle} style={{ marginBottom: '1rem' }}>
        Table View
      </Button>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Table responsive hover>
          <thead className='text-primary'>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Email</th>
              {/* No phone number functionality at the moment - Tim
              <th>Phone</th> */}
              <th className='text-right'>Time Remaining</th>
              <th className='text-right'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((item, i) => {
              return [
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.user}</td>
                  <td>noahb@hotmail.com</td>
                  {/* No phone number functionality at the moment - Tim*/}
                  {/* <td>(555) 555-5555</td> */}
                  <td className='text-right'>{(i + 1) * 15} mins</td>
                  <td className='text-right'>
                    <Badge
                      style={{ marginRight: 10, cursor: 'pointer' }}
                      color='success'
                      id='serving'
                    >
                      <UncontrolledTooltip placement='bottom' target='serving'>
                        Mark Serving Now
                      </UncontrolledTooltip>
                      <i className='nc-icon nc-check-2' />
                    </Badge>
                    <Badge
                      color='danger'
                      id='complete'
                      onClick={() => props.onDelete(item)}
                      style={{ cursor: 'pointer' }}
                    >
                      <UncontrolledTooltip placement='bottom' target='complete'>
                        Mark Participant as Complete
                      </UncontrolledTooltip>
                      <i className='nc-icon nc-simple-remove' />
                    </Badge>
                  </td>
                </tr>,
              ];
            })}
          </tbody>
          {/* <tr>
            <td>1</td>
            <td>John Lennon</td>
            <td>noahb@hotmail.com</td>
            <td>(555) 555-5555</td>
            <td className='text-right'>10 mins</td>
            <td className='text-right'>
              <Badge
                style={{ marginRight: 10 }}
                color='success'
                href='#'
                id='serving'
              >
                <UncontrolledTooltip placement='bottom' target='serving'>
                  Mark Serving Now
                </UncontrolledTooltip>
                <i className='nc-icon nc-check-2' />
              </Badge>
              <Badge color='danger' href='#' id='complete'>
                <UncontrolledTooltip placement='bottom' target='complete'>
                  Mark Participant as Complete
                </UncontrolledTooltip>
                <i className='nc-icon nc-simple-remove' />
              </Badge>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Paul McCartney</td>
            <td>noahb@hotmail.com</td>
            <td>(555) 555-5555</td>
            <td className='text-right'>20 mins</td>
            <td className='text-right'>
              <Badge
                style={{ marginRight: 10 }}
                color='success'
                href='#'
                id='serving'
              >
                <UncontrolledTooltip placement='bottom' target='serving'>
                  Mark Serving Now
                </UncontrolledTooltip>
                <i className='nc-icon nc-check-2' />
              </Badge>
              <Badge color='danger' href='#' id='complete'>
                <UncontrolledTooltip placement='bottom' target='complete'>
                  Mark Participant as Complete
                </UncontrolledTooltip>
                <i className='nc-icon nc-simple-remove' />
              </Badge>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>George Harrison</td>
            <td>noahb@hotmail.com</td>
            <td>(555) 555-5555</td>
            <td className='text-right'>30 mins</td>
            <td className='text-right'>
              <Badge
                style={{ marginRight: 10 }}
                color='success'
                href='#'
                id='serving'
              >
                <UncontrolledTooltip placement='bottom' target='serving'>
                  Mark Serving Now
                </UncontrolledTooltip>
                <i className='nc-icon nc-check-2' />
              </Badge>
              <Badge color='danger' href='#' id='complete'>
                <UncontrolledTooltip placement='bottom' target='complete'>
                  Mark Participant as Complete
                </UncontrolledTooltip>
                <i className='nc-icon nc-simple-remove' />
              </Badge>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ringo Starr</td>
            <td>noahb@hotmail.com</td>
            <td>(555) 555-5555</td>
            <td className='text-right'>40 mins</td>
            <td className='text-right'>
              <Badge
                style={{ marginRight: 10 }}
                color='success'
                href='#'
                id='serving'
              >
                <UncontrolledTooltip placement='bottom' target='serving'>
                  Mark Serving Now
                </UncontrolledTooltip>
                <i className='nc-icon nc-check-2' />
              </Badge>
              <Badge color='danger' href='#' id='complete'>
                <UncontrolledTooltip placement='bottom' target='complete'>
                  Mark Participant as Complete
                </UncontrolledTooltip>
                <i className='nc-icon nc-simple-remove' />
              </Badge>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Thom Yorke</td>
            <td>noahb@hotmail.com</td>
            <td>(555) 555-5555</td>
            <td className='text-right'>50 mins</td>
            <td className='text-right'>
              <Badge
                style={{ marginRight: 10 }}
                color='success'
                href='#'
                id='serving'
              >
                <UncontrolledTooltip placement='bottom' target='serving'>
                  Mark Serving Now
                </UncontrolledTooltip>
                <i className='nc-icon nc-check-2' />
              </Badge>
              <Badge color='danger' href='#' id='complete'>
                <UncontrolledTooltip placement='bottom' target='complete'>
                  Mark Participant as Complete
                </UncontrolledTooltip>
                <i className='nc-icon nc-simple-remove' />
              </Badge>
            </td>
          </tr> */}
        </Table>
      </Collapse>
    </div>
  );
};

export default ExpandableTable;
